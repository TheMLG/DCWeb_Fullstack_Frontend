import React from "react";
import { useForm } from "react-hook-form";
import "../../style/reviewform.css";

const StarRating = ({ value, onChange, onBlur }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-container">
      {stars.map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => onChange(star)}
          onBlur={onBlur}
          className={`star ${star <= value ? "filled" : "empty"}`}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
};

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      rating: 0,
      comment: "",
    },
  });

 const rating = watch("rating");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/reviews", {
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
    <div className="rev-form-container">
      <section className="review-section">
      

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="review-form"
          noValidate
        >
          <label htmlFor="name">
            Name:
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="form-input"
              disabled={isSubmitting}
            />
            {errors.name && <p className="form-error">{errors.name.message}</p>}
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Your email"
              className="form-input"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </label>

          <label htmlFor="phone">
            Phone Number:
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: "Invalid phone number format",
                },
              })}
              className="form-input"
              placeholder="Your phone number"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
          </label>

          <label className="Rating-label">
            Rating:
            <StarRating
              value={rating}
              onChange={(val) =>
                setValue("rating", val, { shouldValidate: true })
              }
              onBlur={() => {}}
            />
            {errors.rating && (
              <p className="form-error">{errors.rating.message}</p>
            )}
          </label>

          <label htmlFor="suggestions">
            Reviews Or Suggestions:
            <textarea
              {...register("comment", { required: "Comment is required" })}
              rows="4"
              placeholder="Write your comments here..."
              className="form-textarea"
              disabled={isSubmitting}
            />
            {errors.comment && (
              <p className="form-error">{errors.comment.message}</p>
            )}
          </label>

          <button type="submit" disabled={isSubmitting} className="form-button">
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ReviewForm;
