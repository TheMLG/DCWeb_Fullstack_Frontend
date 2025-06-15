import React from "react";
import { useForm } from "react-hook-form";
import "../style/uploader.css";

export default function Uploader() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      pdfurl: "",
      imgurl: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch(`/api/mag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result = null;
      if (response.headers.get("content-length") !== "0") {
        result = await response.json();
      }

      if (response.ok) {
        alert("Review submitted successfully!");
        reset();
      } else {
        alert((result && result.message) || "Failed to submit review.");
      }
    } catch (error) {
      alert("Error submitting review. Please try again later.");
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="uploader-form-body">
      <form className="uploader-form">
        <label htmlFor="title">
          Title:{" "}
          <input
            className="uploader-input"
            type="text"
            placeholder="Title here"
            {...register("title")}
          />
        </label>
        <label htmlFor="date">
          Date:{" "}
          <input
            className="uploader-input"
            type="date"
            placeholder="Date here"
            {...register("date")}
          />
        </label>
        <label htmlFor="pdfurl">
          PDF Url:{" "}
          <input
            className="uploader-input"
            type="text"
            placeholder="PDF URL here"
            {...register("pdfurl")}
          />
        </label>
        <label htmlFor="imgurl">
          Image Url:{" "}
          <input
            className="uploader-input"
            type="text"
            placeholder="Image URL here"
            {...register("imgurl")}
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
