import React from "react";
import { useForm } from "react-hook-form";
import ReviewForm from "../components/forms/reviewForm";
import "../style/reviewpage.css";
const ReviewPage = () => {
  return (
    <>
      <h2>Magazine Reviews & Suggestions</h2>
      <div className="revinfo">
        <p>
          We value your feedback! Please share your review about our magazine
          and any suggestions you have.
        </p>
      </div>

      <div className="reviewarea">Here will be reviews shown</div>
      <h2 className="fomrheader">Your Review/Suggestions</h2>
      <ReviewForm />
    </>
  );
};

export default ReviewPage;
