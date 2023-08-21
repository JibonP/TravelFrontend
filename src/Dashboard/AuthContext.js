import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const persistedAuth = localStorage.getItem("authenticated");
    if (persistedAuth === "true") {
      setAuthenticated(true);
    }
  }, []);

  const signIn = () => {
    setAuthenticated(true);

    localStorage.setItem("authenticated", "true");
  };

  const signOut = () => {
    setAuthenticated(false);

    localStorage.removeItem("authenticated");
  };
  const signUp = () => {
    setAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
