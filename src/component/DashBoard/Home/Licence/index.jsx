import React, { useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { getLicenceDetails } from "./API";
const Licence = ({
  Authentication,
  setCollapse,
  collapse,
  setApiPreventer,
  apiPreventer,
}) => {
  const [drivinglicenceDetails, setDrivinglicenceDetails] = useState({});
  function handleDrivingLicenceInformation() {
    setCollapse({
      ...collapse,
      drivingLicence: !collapse.drivingLicence,
    });
    setApiPreventer({
      ...apiPreventer,
      drivingLicence: true,
    });
    if (!apiPreventer.drivingLicence) {
      getLicenceDetails(Authentication).then((data) => {
        if (data.success) {
          setDrivinglicenceDetails(data.Data);
        }
      });
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
        <div className="d-flex gap-3 w-100">
          <h5 className="">Driving Licence Information</h5>
          <span onClick={(e) => handleDrivingLicenceInformation()}>
            {collapse.drivingLicence ? <FiChevronsDown /> : <FiChevronsUp />}
          </span>
          
        </div>
        <div
          className={`row border-top ${collapse.drivingLicence ? "h-0" : ""}`}
        >
          <div className="col-12 col-xl-6 ">
            <h5 className="text-muted py-3 border-bottom text-center">
              Basic Information
            </h5>
            <div className="row">
              <div className="col py-2 border-bottom">
                <p className="text-muted text-truncate  p-0 m-0">
                  First Name(Driving Licenece)
                </p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.firstNameOnDrivingLicense}
                </h6>
              </div>
              <div className="col py-2 border-bottom">
                <p className="text-muted text-truncate  p-0 m-0">
                  Last Name(Driving Licenece)
                </p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.lastNameOnDrivingLicense}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col py-2">
                <p className="text-muted text-truncate  p-0 m-0">
                  Date of Birth
                </p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.dateOfBirth}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12  col-xl-6 ">
            <h5 className="text-muted py-3 border-bottom text-center">
              Licence Information
            </h5>
            <div className="row">
              <div className="col py-2 border-bottom">
                <p className="text-muted text-truncate  p-0 m-0">
                  Licence Number
                </p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.licenceNumber}
                </h6>
              </div>
              <div className="col py-2 border-bottom">
                <p className="text-muted text-truncate  p-0 m-0">Expiry Date</p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.expieryDate}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col py-2">
                <p className="text-muted text-truncate  p-0 m-0">
                  Licence Type
                </p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.licenseType}
                </h6>
              </div>
              <div className="col py-2">
                <p className="text-muted text-truncate  p-0 m-0">Issue State</p>
                <h6
                  className="fw-bold p-0 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {drivinglicenceDetails.issue_state}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licence;
