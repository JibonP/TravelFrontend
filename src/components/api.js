import axios from "axios";

const BASE_URL = "https://travelbackend-9zbn.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export const login = (email, password) => {
  return api.post("/auth/login", { email, password });
};

export const signup = (email, password) => {
  return api.post("/auth/signup", { email, password });
};

export const forgotPassword = (email) => {
  return api.post("/auth/forgot-password", { email });
};

export const resetPassword = (token, newPassword) => {
  return api.post("/auth/reset-password", { token, newPassword });
};

export const getUserProfile = () => {
  return api.get("/user/profile");
};

export const updatePassword = (currentPassword, newPassword) => {
  return api.put("/user/update-password", { currentPassword, newPassword });
};

export const deleteAccount = () => {
  return api.delete("/user/delete-account");
};

export const getDestinations = () => {
  return api.get("/destinations");
};

export const addDestination = (name, location) => {
  return api.post("/destinations/add", { name, location });
};

export const editDestination = (destinationId, name, location) => {
  return api.put(`/destinations/${destinationId}/edit`, { name, location });
};

export const deleteDestination = (destinationId) => {
  return api.delete(`/destinations/${destinationId}/delete`);
};

export const addReview = async (destinationId, content, rating) => {
  try {
    const response = await api.post(`/reviews/${destinationId}/add`, {
      content,
      rating,
    });
    console.log("Add Review Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const editReview = (reviewId, updatedData) => {
  return api.put(`/reviews/${reviewId}/update`, updatedData);
};

export const deleteReview = (reviewId) => {
  return api.delete(`/reviews/${reviewId}/delete`);
};

export const updateReview = (reviewId, updatedData) => {
  return api.put(`/reviews/${reviewId}`, updatedData);
};

export const getAddedDestinations = async () => {
  try {
    const response = await axios.get(
      "https://travelbackend-9zbn.onrender.com/destinations/added-destinations"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getReviews = async (destinationId) => {
  try {
    const response = await api.get(`/reviews/${destinationId}`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default api;
