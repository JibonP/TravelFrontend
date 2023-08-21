import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getReviews,
  addReview,
  editReview,
  deleteReview,
} from "../components/api";

const fetchReviews = async (id, setReviews) => {
  try {
    const response = await getReviews(id);
    setReviews(response);
    console.log("Updated Reviews:", response);
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const ReviewPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [editReviewId, setEditReviewId] = useState(null);

  useEffect(() => {
    fetchReviews(id, setReviews); // Pass fetchReviews as a dependency
  }, [id]);

  const handleAddReview = async () => {
    try {
      await addReview(id, newReview);
      setNewReview("");
      fetchReviews();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleEditReview = async (reviewId) => {
    try {
      const updatedData = {
        content: newReview,
      };

      await editReview(reviewId, updatedData);

      setEditReviewId(null);
      setNewReview("");
      fetchReviews();
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="list-group">
          {reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              {editReviewId === review.id ? (
                <>
                  <input
                    type="text"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className="form-control"
                  />
                  <button
                    onClick={() => handleEditReview(review.id)}
                    className="btn btn-primary my-2"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {review.content}
                  <button
                    onClick={() => setEditReviewId(review.id)}
                    className="btn btn-secondary mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="my-4">No reviews available</p>
      )}

      <h3 className="my-4">Add a Review</h3>
      <form onSubmit={handleAddReview}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-success">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
