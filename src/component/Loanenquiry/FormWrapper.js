// export { default as LoanDetails } from "./LoanDetails";
// export { default as Cardetails } from "./CarDetails";

import "./css/formWrapper.css";

import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import LoanDetails from "./LoanDetails";
import Cardetails from "./CarDetails";
// import { Outlet } from "react-router-dom";
import Usages from "./Usages";
import SelectCarDetail from "./SelectCarDetails";
import WorkDetails from "./WorkDetails";
import UserDetails from "./UserDetails";
import PersonalDetail from "./PersonalDetail";
import DrivingLicenceDetail from "./DrivingLicenceDetail";
import { Route, Switch, Link } from "react-router-dom";

const FormWrapper = () => {
  const pageNumber = useSelector((page) => page.pageMovement.pageStep);
  const [step, setstep] = useState(0);
  const Authentication = useSelector((checkAuth) => checkAuth.Auth);

  function renderSwitch(pageNumber) {
    switch (pageNumber) {
      case 0:
        return "/leadRequest";
      case 1:
        return "/leadRequest/choose-car";
      case 2:
        return "/leadRequest/WorkDetails";
      case 3:
        return "/leadRequest/log-in";
      case 4:
        return <UserDetails />;
      case 5:
        return <PersonalDetail />;
      case 6:
        return <DrivingLicenceDetail />;
      default:
        return Authentication.token;
    }
  }
  return (
    <div className="container-xxl form-main  py-5 px-3">
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper"></div>
      </div>
    </div>
  );
};

export default FormWrapper;
