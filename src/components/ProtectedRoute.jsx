// ProtectedRoute.jsx
// ! check if the user has a jwt token stored in local storage

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const verifyAccessToken = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No token");
      const res = await axios.get(
        `${import.meta.env.VITE_PROXY_URL}/verifyAuth`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      if (res.data.authenticated) {
        setAuthenticated(true);
      }
    } catch {
      try {
        const refreshRes = await axios.post(
          `${import.meta.env.VITE_PROXY_URL}/refreshToken`,
          {},
          { withCredentials: true }
        );

        localStorage.setItem("accessToken", refreshRes.data.accessToken);
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    verifyAccessToken();
  }, []);
  if (loading) return <div> Loading ...</div>;
  if (!authenticated) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
