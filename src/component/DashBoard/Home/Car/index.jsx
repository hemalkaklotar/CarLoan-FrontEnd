import React, { useEffect, useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { getmyLatestLoan } from "./API";
const Car = ({ collapse, setCollapse, loanlist }) => {
  return (
    <div className="card mt-2">
      <div
        className="p-3"
        style={{
          color: "var(--color-dark-200)",
        }}
      >
        <div className="d-flex gap-3 w-100 ">
          <h5 className="">Car details</h5>
          <span
            onClick={(e) =>
              setCollapse({
                ...collapse,
                carDetails: !collapse.carDetails,
              })
            }
          >
            {collapse.carDetails ? <FiChevronsDown /> : <FiChevronsUp />}
          </span>
        </div>
        <div
          className={`row my-2 pt-2 border-top ${
            collapse.carDetails ? "h-0" : ""
          }`}
        >
          <div className="col-12 col-xl-10">
            <div className="d-flex justify-content-between align-items-start">
              <div className="">
                <h6 className="car-modelName fst-italic">
                  {loanlist?.modelName}
                </h6>
                <h2
                  className="car-companyName"
                  style={{ color: "var(--color-primary)" }}
                >
                  {loanlist?.companyName}
                </h2>
                <p className="fw-bold car-modelType text-truncate p-0 m-0">
                  {loanlist?.modelType}
                </p>
              </div>
              <div className="card p-2 border border-primary "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
