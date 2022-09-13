import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase/Firebase.init";

const PrivateRoute = ({ children }) => {
  const [user, user1, loading, error] = useAuthState(auth);

  let location = useLocation();
  if (loading) {
    return <h1>loading</h1>;
  }
  if (!user || user1) {
    console.log(user);
    return <Navigate to="/login" state={location} replace />;
  }
  return children;
};

export default PrivateRoute;
