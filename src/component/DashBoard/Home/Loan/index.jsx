import React, { useEffect, useState } from "react";
import { getmyLatestLoan } from "./API";

const Loan = ({ loanlist }) => {
  return (
    <div className="card">
      <div
        className="p-3"
        style={{
          color: "var(--color-dark-200)",
        }}
      >
        <h5 className="pb-2 border-bottom">Loan details</h5>
        <div className="row my-2">
          <div className="col-12 col-xl-10  ">
            <div className="d-flex justify-content-between align-items-start">
              <div className="box  flex-fill">
                <h6 className="text-muted pb-2 border-bottom">
                  Purchase price
                </h6>
                <h6 style={{ color: "var(--color-primary)" }}>
                  {loanlist?.purchasePrice}
                </h6>
              </div>
              <div className="box  flex-fill">
                <h6 className="text-muted pb-2 border-bottom">Deposite</h6>
                <h6 style={{ color: "var(--color-primary)" }}>
                  {loanlist?.deposite}
                </h6>
              </div>
              <div className="box  flex-fill">
                <h6 className="text-muted pb-2 border-bottom">Ballon </h6>
                <h6 style={{ color: "var(--color-primary)" }}>
                  {loanlist?.balloon} %
                </h6>
              </div>
              <div className="box  flex-fill">
                <h6 className="text-muted pb-2 border-bottom">Terms</h6>
                <h6 style={{ color: "var(--color-primary)" }}>
                  {loanlist?.term}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
