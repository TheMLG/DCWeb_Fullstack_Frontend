import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReviewForm from "../components/forms/reviewForm";
import "../style/reviewpage.css";
const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews`);
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <h3>Magazine Reviews & Suggestions</h3>
      <div className="revinfo">
        <p>
          We value your feedback! Please share your review about our magazine
          and any suggestions you have.
        </p>
      </div>

      <div className="reviewarea">
        {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : reviews.length === 0 ? (
          <p>No reviews submitted yet.</p>
        ) : (
          <div className="cardsContainerStyle">
            {reviews
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 5)
              .map((review) => (
                <div key={review._id} className="cardStyle">
                  <div className="headerStyle">
                    <h4 style={{ margin: 0, color: "var(--tc)" }}>
                      {review.name}
                    </h4>
                    <div className="ratingStyle">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <span key={i}>&#9733;</span>
                      ))}
                      {Array.from({ length: 5 - review.rating }, (_, i) => (
                        <span key={i} style={{ color: "#ccc" }}>
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="commentStyle">{review.comment}</p>
                </div>
              ))}
          </div>
        )}
      </div>
      <h3 className="formheader">Your Review/Suggestions</h3>
      <ReviewForm />
    </>
  );
};

export default ReviewPage;
