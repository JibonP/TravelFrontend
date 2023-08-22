import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getDestinations, deleteDestination } from "../components/api";
import Loader from "./Loader";
import "./Home.css";

const Home = () => {
  const { authenticated } = useAuth();
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authenticated) {
      loadPlaces();
    }
  }, [authenticated]);

  const loadPlaces = async () => {
    try {
      setTimeout(async () => {
        const response = await getDestinations();
        setPlaces(response.data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (placeId) => {
    try {
      await deleteDestination(placeId);
      loadPlaces();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to a New Way of Traveling</h1>
      </div>

      <div className="container">
        <div className="row">
          {isLoading ? (
            <Loader />
          ) : (
            places.map((place) => (
              <div className="col-md-4 mb-4" key={place.id}>
                <div className="card">
                  <img
                    src={place.image_url}
                    className="card-img-top"
                    alt={place.name}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{place.name}</h5>
                      <Link to={`/reviews/${place.id}`} className="card-link">
                        {place.location}
                      </Link>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(place.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {!authenticated && (
        <div className="auth-buttons-container text-center">
          <div className="auth-buttons-box">
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <span className="auth-button-spacing"></span>{" "}
            <Link to="/login" className="btn btn-secondary">
              Log In
            </Link>
          </div>
        </div>
      )}

      <div className="add-destinations-link">
        <Link to="/add-destination" className="btn btn-primary">
          Add Destinations
        </Link>
      </div>
    </div>
  );
};

export default Home;
