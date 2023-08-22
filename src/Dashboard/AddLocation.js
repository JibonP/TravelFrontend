import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDestination } from "../components/api";
import Loader from "./Loader";

const AddLocation = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleAddLocation = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await addDestination(name, location);
      navigate("/");
    } catch (error) {
      console.error("Error adding destination:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add a New Destination</h3>
      {isLoading ? (
        <Loader />
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
