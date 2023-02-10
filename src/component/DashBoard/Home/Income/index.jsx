import axios from "axios";
import React from "react";
import { useState } from "react";
import { getLatestIncmoneDetails } from "./API";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Income = ({
  setCollapse,
  collapse,
  Authentication,
  loan_id,
  setApiPreventer,
  apiPreventer,
}) => {
  const [incomesDetail, setIncomesDetail] = useState({});
  console.log(loan_id);
  function handleIncomes() {
    setCollapse({
      ...collapse,
      IncomeDetails: !collapse.IncomeDetails,
    });
    setApiPreventer({
      ...apiPreventer,
      IncomeDetails: true,
    });
    if (!apiPreventer.IncomeDetails) {
      console.log(":Hello");
      getLatestIncmoneDetails(loan_id, Authentication).then((data) => {
        if (data.success) {
          setIncomesDetail(data.data);
        }
      });
    } else {
      console.log("Already calleed");
    }
  }
  return (
    <div className="card mt-2">
      {console.log("income list details", incomesDetail)}
      <div
        className="p-3"
        style={{
          color: "var(--color-dark-200)",
        }}
      >
        <div className="d-flex gap-3 w-100 ">
          <h5 className="">Incomes Information</h5>
          <span onClick={(e) => handleIncomes()}>
            {collapse.IncomeDetails ? <FiChevronsDown /> : <FiChevronsUp />}
          </span>
          <Link style={{ margin: "0" }} to="/leadRequest/income-details">
            UPDATE
          </Link>
        </div>
        <div
          className={`row border-top ${collapse.IncomeDetails ? "h-0" : ""}`}
        >
          <div className="row">
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Rental Income per month
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {incomesDetail.rentalIncomePerMonth}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Investment Income
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {incomesDetail.investmentIncome}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncat e  p-0 m-0">
                Salary Sacrifices Income
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {incomesDetail.salarySacrificePerMonth}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Center Link Benifits
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {incomesDetail.centerlinkBenifit}
              </h6>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
              <p className="text-muted text-truncate  p-0 m-0">
                Forign Income per month
              </p>
              <h6
                className="fw-bold p-0 m-0"
                style={{ color: "var(--color-primary)" }}
              >
                {incomesDetail.forignIncomePerMonth}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
