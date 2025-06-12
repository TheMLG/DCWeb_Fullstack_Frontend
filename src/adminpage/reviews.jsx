import React, { useEffect, useState } from "react";
import "../style/reviewBoard.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
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

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="containerStyle">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Reviews
      </h2>
      {reviews.length === 0 ? (
        <p>No reviews submitted yet.</p>
      ) : (
        <div className="maincontainer">
          <div className="cardsContainerStyle">
            {reviews.map((review) => (
              <div key={review._id} className="cardStyle">
                <div className="headerStyle">
                  <h3 style={{ margin: 0 }}>{review.name}</h3>
                  <div className="ratingStyle">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>&#9733;</span> // solid star
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <span key={i} style={{ color: "#ccc" }}>
                        &#9733;
                      </span> // empty star
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    marginBottom: "6px",
                    fontStyle: "italic",
                    color: "#555",
                  }}
                >
                  Email: {review.email}
                </p>
                <p
                  style={{
                    marginBottom: "6px",
                    fontStyle: "italic",
                    color: "#555",
                  }}
                >
                  Phone: {review.phone}
                </p>
                <p className="commentStyle">{review.comment}</p>
                <small className="dateStyle">
                  {new Date(review.createdAt).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
