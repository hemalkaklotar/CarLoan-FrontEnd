import axios from "axios";
import React from "react";
import { getPersonalDetails } from "./API";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { useState } from "react";
const PersonalInfo = ({
  Authentication,
  collapse,
  setCollapse,
  apiPreventer,
  setApiPreventer,
}) => {
  const [personalInformation, setPersonalInformation] = useState({});
  function handlePersonalInfo() {
    console.log("s");
    setCollapse({
      ...collapse,
      personalDetails: !collapse.personalDetails,
    });
    setApiPreventer({
      ...apiPreventer,
      personalDetails: true,
    });

    if (!apiPreventer.personalDetails) {
      getPersonalDetails(Authentication)
        .then((data) => {
          if (data.success) {
            setPersonalInformation(data.Data);
          }
        })
        .catch(() => console.log("ERROR"));
    }
  }
  return (
    <div className="card mt-2">
      <div
        className="p-3"
        style={{
          color: "var(--color-dark-200)",
        }}
      >
        <div className="d-flex gap-3 w-100 ">
          <h5 className="">Personal Information</h5>
          <span onClick={handlePersonalInfo}>
            {collapse.personalDetails ? <FiChevronsDown /> : <FiChevronsUp />}
          </span>
        </div>
        <div
          className={`row m-1 border-top ${
            collapse.personalDetails ? "h-0" : ""
          }`}
        >
          <div className="col py-2">
            <p className="text-muted  fw-bold p-0 m-0">First Name</p>

            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            >
              {personalInformation.firstName}
            </h6>
          </div>
          <div className="col  py-2">
            <p className="text-muted fw-bold p-0 m-0">Last Name</p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            >
              {personalInformation.lastName}
            </h6>
          </div>
          <div className="col py-2">
            <p className="text-muted  fw-bold p-0 m-0">Email-address</p>

            <h6
              className="fw-bold p-0 m-0 text-truncate"
              style={{
                color: "var(--color-primary)",
                maxWidth: "195px",
              }}
            >
              {personalInformation.emailId}
            </h6>
          </div>
          <div className="col  py-2 ">
            <p className="text-muted fw-bold p-0 m-0">State</p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            >
              {personalInformation.state}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
