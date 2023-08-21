import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDestination } from "../components/api";
import Loader from "./Loader"; // Import the Loader component

const AddLocation = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false); // Turn off loading after 2000 milliseconds
    }, 2000);
  }, []);

  const handleAddLocation = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Start loading
      await addDestination(name, location);
      navigate("/");
    } catch (error) {
      console.error("Error adding destination:", error);
    } finally {
      setIsLoading(false); // Stop loading whether success or error
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add a New Destination</h3>
      {isLoading ? (
        <Loader /> // Render Loader component if isLoading is true
      ) : (
        <form onSubmit={handleAddLocation}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Destination
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
