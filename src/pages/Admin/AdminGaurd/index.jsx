import React from "react";
import { Children } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthPage from "../AuthPage";

const AdminGaurd = ({ children, ...rest }) => {
  const Authentication = useSelector((state) => state.Auth);
  if (
    (Authentication.isAuthenticated && Authentication.isUserIs === "Admin") ||
    Authentication.isUserIs === "Agent"
  ) {
    return children;
  } else {
    return <AuthPage />;
  }
};

export default AdminGaurd;

// (Authentication.isAuthenticated && Authentication.isUserIs) ? return children
