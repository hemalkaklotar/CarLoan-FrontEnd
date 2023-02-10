import React from "react";
import { Children } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginDetails from "../../component/Loanenquiry/LoginDetails";
import { setUserDirectLogin } from "../../redux/Actions/Actions";

import { useHistory } from "react-router-dom";
const UserGaurd = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const Authentication = useSelector((state) => state.Auth);
  const history = useHistory();
  if (
    Authentication.isAuthenticated &&
    (Authentication.credential === "Existing User" ||
      Authentication.credential === "New User")
  ) {
    return children;
  } else {
    dispatch(setUserDirectLogin());
    history.push("/leadRequest/log-in");
  }
};

export default UserGaurd;

// (Authentication.isAuthenticated && Authentication.isUserIs) ? return children
