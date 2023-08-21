import React from "react";
import { createRoot } from "react-dom/client"; // Use createRoot from react-dom/client
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Dashboard/AuthContext"; // Adjust the path if needed
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
