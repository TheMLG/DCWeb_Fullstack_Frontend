import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../loader.jsx";
import "../../style/contributeform.css";

const ContributeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      articleTitle: "",
      articleIdea: "",
      articleFiel: null,
    },
  });

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    setServerError("");
    setSuccessMessage("");

    const formData = new FormData();
    // Append all form fields to FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Append the file to FormData
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append("files", fileInput.files[i]); // Use 'files' as the key for multiple files
      }
    }
    try {
      console.log(data);

      const response = await fetch("/api/contribute", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formData,
      });

      let result = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        try {
          result = await response.json();
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
          result = null;
        }
      }

      if (response.ok) {
        alert("Submitted Successfully");
        setSuccessMessage("Submitted Successfully");
        reset();
      } else {
        alert((result && result.message) || "Failed");
        setServerError((result && result.message) || "Failed");
      }
    } catch (error) {
      setServerError(error.message || "An unexpected error occurred.");
      console.error("Error in onSubmit block:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form
          className="form-body"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label htmlFor="name">
            Name:
            <input
              className="form-input"
              type="text"
              placeholder="your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </label>

          <label htmlFor="email">
            Email:
            <input
              className="form-input"
              type="email"
              placeholder="your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </label>

          <label htmlFor="phone">
            Phone Number:
            <input
              className="form-input"
              type="tel"
              placeholder="your phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]{7,20}$/,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </label>

          <label htmlFor="articleTitle">
            Article Title:
            <input
              className="form-input"
              type="text"
              placeholder="article title"
              {...register("articleTitle", {
                required: "Article title is required",
              })}
            />
            {errors.articleTitle && (
              <p className="error">{errors.articleTitle.message}</p>
            )}
          </label>

          <label htmlFor="articleIdea">
            Article Idea:
            <textarea
              className="form-input"
              placeholder="briefly describe your article idea"
              {...register("articleIdea", {
                required: "Article idea is required",
              })}
            />
            {errors.articleIdea && (
              <p className="error">{errors.articleIdea.message}</p>
            )}
          </label>

          <label htmlFor="files">
            Upload Article File(s):
            <input
              className="form-input"
              type="file"
              accept=".txt, .jpg, .jpeg, .png, .pdf"
              multiple
              {...register("files", {
                required: false,
              })}
            />
            {errors.files && <p className="error">{errors.files.message}</p>}
          </label>

          {serverError && <p className="error">{serverError}</p>}
          {successMessage && <p className="success">{successMessage}</p>}

          <button className="form-button" type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {isSubmitting && <Loader />}
          {/* <Loader/> */}
        </form>
      </div>
    </>
  );
};

export default ContributeForm;
