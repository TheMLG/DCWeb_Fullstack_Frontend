import React from "react";
import { useForm } from "react-hook-form";
import ReviewForm from "../components/forms/reviewForm";
import "../style/reviewpage.css";
const ReviewPage = () => {
  return (
    <>
      <h3>Magazine Reviews & Suggestions</h3>
      <div className="revinfo">
        <p>
          We value your feedback! Please share your review about our magazine
          and any suggestions you have.
        </p>
      </div>

      <div className="reviewarea">Here will be reviews shown</div>
      <h3 className="formheader">Your Review/Suggestions</h3>
      <ReviewForm />
    </>
  );
};

export default ReviewPage;
