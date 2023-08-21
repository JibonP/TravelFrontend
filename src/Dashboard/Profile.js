import React, { useState } from "react";
import { updatePassword, deleteAccount } from "../components/api";

const Profile = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(currentPassword, newPassword);
    } catch (error) {}
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
    } catch (error) {}
  };

  return (
    <div>
      <h2>Profile</h2>
      <h3>Welcome, {user.email}!</h3>
      <div>
        <h4>Change Password</h4>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
      <div>
        <h4>Delete Account</h4>
        <button onClick={handleDeleteAccount}>Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
