import React, { useState } from "react";
import { addReview } from "../components/api";

const AddReview = ({ destinationId, onReviewAdded }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReview(destinationId, content, rating);
      onReviewAdded();
      setContent("");
      setRating(5);
    } catch (error) {}
  };

  return (
    <div>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
