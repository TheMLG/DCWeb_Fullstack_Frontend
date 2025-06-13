import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../loader.jsx";
import "../../style/fundform.css";

const FundForm = () => {
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
      amount: "0",
      screenshot: null,
    },
  });

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    setServerError("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("amount", data.amount);

    // Append screenshot file
    if (data.screenshot && data.screenshot[0]) {
      formData.append("screenshot", data.screenshot[0]);
    }

    try {
      const response = await fetch("/api/fund", {
        method: "POST",
        body: formData,
      });

      let result = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        try {
          result = await response.json();
        } catch (jsonError) {
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
    }
  };

  return (
    <div className="form-container">
      <form className="form-body" onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <label htmlFor="name">
          Amount:
          <input
            className="form-input"
            type="text"
            placeholder="Enter Amount you paid"
            {...register("amount", { required: "This field is required" })}
          />
          {errors.amount && <p className="error">{errors.amount.message}</p>}
        </label>

        <label htmlFor="screenshot">
          Upload Screenshot:
          <input
            className="form-input"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            {...register("screenshot", {
              required: "Screenshot is required",
            })}
          />
          {errors.screenshot && (
            <p className="error">{errors.screenshot.message}</p>
          )}
        </label>

        {serverError && <p className="error">{serverError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <button className="form-button" type="submit" disabled={isSubmitting}>
          {/* Submit */}
        {/* <Loader/> */}
        
             {isSubmitting ? <Loader/> : "Submit"}
            

        </button>
        {/* {isSubmitting && <Loader />} */}
      </form>
    </div>
  );
};

export default FundForm;
