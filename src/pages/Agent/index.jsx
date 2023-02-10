import React, { useState } from "react";
// import "./style.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "../../component/Loanenquiry/css/formWrapper.css";

import { useForm } from "react-hook-form";
import SignIN from "../../component/Admin/SignIN";
import OTPVerification from "../../component/Admin/OTPVerification";
import AuthPage from "./AuthPage";
import DashBoard from "../Admin/Dashboard";
import AdminGaurd from "../Admin/AdminGaurd";
// import AdminGaurd from "./AdminGaurd";
const Agent = () => {
  let { path, url } = useRouteMatch();

  const [toggleSignInComponent, settoggleSignInComponent] = useState(true);
  const [toggleOTPComponent, settoggleOTPComponent] = useState(false);
  const [mobieNumber, setMobileNumber] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  return (
    <div>
      <Switch>
        <Route exact path={`${path}/auth`}>
          <AuthPage />
        </Route>
        <Route path={`${path}/`}>
          <AdminGaurd>
            <DashBoard />
          </AdminGaurd>
        </Route>
      </Switch>
    </div>
  );
};

export default Agent;
