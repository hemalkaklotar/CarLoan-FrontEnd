import axios from "axios";
import React from "react";
import { useState } from "react";
import { getLatestExpensesDetails } from "./API";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Expenses = ({ setCollapse, collapse, Authentication, loan_id }) => {
  const [expensesDetail, setExpensesDetail] = useState({});
  function handleExpenses() {
    setCollapse({
      ...collapse,
      expensesDetails: !collapse.expensesDetails,
    });
    getLatestExpensesDetails(loan_id, Authentication).then((data) => {
      if (data.success) {
        setExpensesDetail(data.data);
      }
    });
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
          <h5 className="">Expenses Information</h5>
          <span onClick={(e) => handleExpenses()}>
            {collapse.expensesDetails ? <FiChevronsDown /> : <FiChevronsUp />}
          </span>
          <Link style={{margin:"0" }} to="/leadRequest/expenses-details">UPDATE</Link>
        </div>
        <div
          className={`row border-top ${collapse.expensesDetails ? "h-0" : ""}`}
        >
          <div className="row">
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Motor vehical running cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.motorvehicalRunningCost}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Travelling cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.travellingCost}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncat e  p-0 m-0">
                Utilities cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.utilitiesCost}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Insurances cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.insurancesCost}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Telephone and internet cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.telephoneAndInternetCost}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Entertainment cost
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {expensesDetail.entertainmentCost}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
