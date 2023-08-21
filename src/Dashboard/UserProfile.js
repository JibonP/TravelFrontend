import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserProfile } from "../components/api";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const response = await getUserProfile();
      setUserProfile(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      <Link to="/dashboard/profile/edit">Edit Profile</Link>
    </div>
  );
};

export default UserProfile;
