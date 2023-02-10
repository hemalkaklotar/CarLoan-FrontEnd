import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Message from "../../common/Message";
import MessageBoat from "../../Loanenquiry/MessageBoat";
import { getmyLatestLoan } from "./API";
import axios from "axios";
import Loan from "./Loan";
import Car from "./Car";
import Licence from "./Licence";
import PersonalInfo from "./PersonalInfo";
import Exppenses from "./Expenses";
import { Link } from "react-router-dom";
import Income from "./Income";
import DocumentVerification from "./DocumentVerification";
const Home = ({ headermsg, Authentication }) => {
  const [loanlist, setLoanList] = useState({});
  const [drivinglicenceDetails, setDrivinglicenceDetails] = useState({});

  const [collapse, setCollapse] = useState({
    carDetails: false,
    personalDetails: true,
    drivingLicence: true,
    expensesDetails: true,
    IncomeDetails: true,
  });
  // Api preveter stop the API request once it sent to the server
  const [apiPreventer, setApiPreventer] = useState({
    carDetails: false,
    personalDetails: false,
    drivingLicence: false,
    expensesDetails: false,
    IncomeDetails: false,
  });
  var date;
  useEffect(() => {
    getmyLatestLoan(setLoanList, Authentication).then((data) => {
      if (data.success === true) {
        setLoanList(data.data);
      }
    });
  }, []);
  return (
    <div className="position-relative">
      {/* <Message msg={headermsg} /> */}
      <div className="container-xxl mt-5">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="card p-3">
              <p
                className="m-0 p-0"
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "var(--color-dark-100)",
                }}
              >
                Application summary
              </p>

              <div className="d-flex mt-3 gap-5">
                <div className="">
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                    className="text-muted fst-bold"
                  >
                    Last updated
                  </span>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "800",
                      color: "var(--color-primary)",
                    }}
                  >
                    {(date = new Date(loanlist.updatedAt).toLocaleDateString())}
                  </p>
                </div>
                <div className="">
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                    className="text-muted fst-bold"
                  >
                    Status
                  </span>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "800",
                      color: "var(--color-primary)",
                    }}
                  >
                    {loanlist.loan_status}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 ">
            <Loan loanlist={loanlist} />
            <Car
              collapse={collapse}
              setCollapse={setCollapse}
              loanlist={loanlist}
            />
            <PersonalInfo
              Authentication={Authentication}
              collapse={collapse}
              setCollapse={setCollapse}
              setApiPreventer={setApiPreventer}
              apiPreventer={apiPreventer}
            />
            <Licence
              Authentication={Authentication}
              setCollapse={setCollapse}
              collapse={collapse}
              setApiPreventer={setApiPreventer}
              apiPreventer={apiPreventer}
            />
            <Exppenses
              setCollapse={setCollapse}
              collapse={collapse}
              Authentication={Authentication}
              loan_id={loanlist.loan_id}
              setApiPreventer={setApiPreventer}
              apiPreventer={apiPreventer}
            />
            <Income
              setCollapse={setCollapse}
              collapse={collapse}
              Authentication={Authentication}
              loan_id={loanlist.loan_id}
              setApiPreventer={setApiPreventer}
              apiPreventer={apiPreventer}
            />

            <DocumentVerification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
