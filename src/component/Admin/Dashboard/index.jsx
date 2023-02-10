import React, { useEffect, useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { BsWallet2 } from "react-icons/bs";
import Card from "./Card";
import SearchBar from "../../common/SearchBar";
import Table from "./Table";
import { useSelector } from "react-redux";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AllLeadRequest from "./AllLeadRequest";
import InProgressRequest from "./InProgressRequest";
import InReviewRequest from "./InReviewRequest";
import "../../../pages/Admin/style.css";
import axios from "axios";
import { fetchAllAgent } from "./API";
import Modal from "../../common/Modal";
import Model from "../../common/Modal";
import ShowALLAgent from "../../../pages/Admin/ShowALLAgent";
import { useLocation } from "react-router-dom";
import ModelLg from "../../common/ModelLg";
const cardList = [
  {
    cardTitle: "Total Loan Request",
    icon: <BsGraphUp />,
  },
  {
    cardTitle: "New Request (Last Week)",
    icon: <IoMdPersonAdd />,
  },
  {
    cardTitle: "Total Agents",
    icon: <AiOutlineUsergroupAdd />,
  },
  {
    cardTitle: "Total Revenue",
    icon: <BsWallet2 />,
  },
];
const Dashboard = () => {
  const Authentication = useSelector((state) => state.Auth);
  let { path, url } = useRouteMatch();
  let location = useLocation();

  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const [showlgModel, setShowLgModel] = useState(false);

  const [LoanRequestList, setLoanRequestList] = useState([]);
  const [dropdownvisible, setDropdownVisible] = useState(false);
  const [dropdownWrapper, setDropdownWrapper] = useState(false);
  const [dataUpdated, setdataUpdated] = useState(false);
  const [AgentList, setAgentList] = useState([]);
  const [singleAgent, setSingleAgent] = useState({});

  console.log("Authentication", Authentication);
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect(() => {}, [searchTerm]);

  function handleChangeStatus(change) {
    console.log(change);
    const loanDetais = {
      loan_status: change,
      loan_id: LoanRequestList,
    };
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${process.env.REACT_APP_DOMAIN_NAME}/admin/manageLoanStatus`,
          loanDetais,
          {
            headers: { token: `Bearer ${Authentication.token}` },
          }
        )
        .then((data) => {
          resolve(data.data);
          console.log("xx", data.data);
          // return data.data.success;
          setdataUpdated(!dataUpdated);
        })
        .catch((e) => console.log(e.message));
    });
  }
  function handleModal(agent) {
    setShow(true);
    setSingleAgent(agent);
    console.log("LoanRequestList", LoanRequestList);
  }
  useEffect(() => {
    console.log(Authentication.isUserIs);
    if (Authentication.isUserIs === "Admin") {
      fetchAllAgent(Authentication).then((data) => setAgentList(data));
    }
  }, []);
  return (
    <div className="d-flex me-3 flex-column flex-lg-row position-relative h-100">
      {console.log("url", location.pathname === `${url}/show-all-agent`)}
      <div className="col-12 position-relative col-xl-3 ">
        <div className="row un-scroll">
          <div className="w-95 w-100 mx-auto col-12 col-md-4 col-xl-12  py-3">
            {cardList.map((card, key) => {
              return <Card card={card} index={key} />;
            })}
          </div>
        </div>
      </div> 
      <div className="col-12 position-relative top-0 col-xl-9 p-4 ">
        <div className="row un-scroll">
          <SearchBar
            setSearchTerm={setSearchTerm}
            Authentication={Authentication}
          />
          {location.pathname === `${url}/show-all-agent` ? (
            <Switch>
              <Route exact path={`${path}show-all-agent`}>
                <ShowALLAgent Authentication={Authentication} />
              </Route>
            </Switch>
          ) : (
            <div className="d-flex justify-content-between align-items-center my-3">
              <ul className="d-flex gap-5 list-unstyled">
                <li>
                  <Link
                    className={` ${activeTab === 1 ? "" : "text-muted"}`}
                    to={`${url}`}
                    onClick={() => setActiveTab(1)}
                  >
                    All Lead
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${activeTab === 2 ? "" : "text-muted"}`}
                    style={{ color: "var(--color-light-400)" }}
                    to={`${url}/in-progress`}
                    onClick={() => setActiveTab(2)}
                  >
                    In Progress Lead
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${activeTab === 3 ? "" : "text-muted"}`}
                    style={{ color: "var(--color-light-400)" }}
                    to={`${url}/in-review`}
                    onClick={() => setActiveTab(3)}
                  >
                    In Review Lead
                  </Link>
                </li>
              </ul>
              <div className="position-relative d-flex gap-3">
                {LoanRequestList.length >= 1 && (
                  <div
                    className="py-2 px-4 text-white"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      borderRadius: "7px",
                      width: "195px",
                      textAlign: "center",
                    }}
                    onClick={() => setDropdownWrapper(!dropdownWrapper)}
                  >
                    Manage Loan
                  </div>
                )}
                {console.log("LoanRequestList.length ", LoanRequestList.length)}
                {dropdownWrapper ? (
                  <div
                    className="position-absolute dropdown right-0 w-100"
                    style={{ zIndex: "9999" }}
                  >
                    <ul
                      className="list-unstyled mt-1"
                      style={{ boxShadow: "12px 22px 15px #696969" }}
                    >
                      <li className="py-2 ps-3 border position-relative border-bottom bg-light">
                        <span>Change Loan Status to</span>
                        <div className="child child-1">
                          <ul
                            className="list-unstyled"
                            style={{ boxShadow: "-12px 6px 15px #696969" }}
                          >
                            <li
                              className="border-bottom py-2 ps-2 bg-light"
                              onClick={() => handleChangeStatus("InProgress")}
                            >
                              In Progress
                            </li>
                            <li
                              className="border-bottom py-2 ps-2 bg-light"
                              onClick={() => handleChangeStatus("InReview")}
                            >
                              In Review
                            </li>
                            <li
                              className="border-bottom py-2 ps-2 bg-light"
                              onClick={() => handleChangeStatus("Approved")}
                            >
                              Approved
                            </li>
                            <li
                              className="border-bottom py-2 ps-2 bg-light"
                              onClick={() => handleChangeStatus("Rejected")}
                            >
                              Rejected
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className={`${
                          !Authentication.isUserIs === "Admin" ? "d-none" : ""
                        } py-2 ps-3 border border-bottom bg-light position-relative`}
                      >
                        <span className="">Assign Loan</span>
                        <div className="child child-2">
                          <ul
                            className="list-unstyled"
                            style={{ boxShadow: "-12px 6px 15px #696969" }}
                          >
                            {AgentList.map((agent) => (
                              <li
                                className="border-bottom py-2 ps-2 bg-light"
                                onClick={() => handleModal(agent)}
                              >
                                {agent.firstName} {agent.lastName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

          <Model
            show={show}
            setShow={setShow}
            singleAgent={singleAgent}
            LoanRequestList={LoanRequestList}
            Authentication={Authentication}
          />
          <Switch>
            <Route exact path={path}>
              <AllLeadRequest
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                Authentication={Authentication}
                LoanRequestList={LoanRequestList}
                setLoanRequestList={setLoanRequestList}
                dropdownvisible={dropdownvisible}
                setDropdownVisible={setDropdownVisible}
                dataUpdated={dataUpdated}
              />
            </Route>
            {/* <Route exact path={`${path}show-all-agent`}>
              <ShowALLAgent />
            </Route> */}

            <Route exact path={`${path}in-progress`}>
              <InProgressRequest
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                Authentication={Authentication}
                LoanRequestList={LoanRequestList}
                setLoanRequestList={setLoanRequestList}
                dropdownvisible={dropdownvisible}
                setDropdownVisible={setDropdownVisible}
                dataUpdated={dataUpdated}
              />
            </Route>
            <Route exact path={`${path}in-review`}>
              <InReviewRequest
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                Authentication={Authentication}
                LoanRequestList={LoanRequestList}
                setLoanRequestList={setLoanRequestList}
                dropdownvisible={dropdownvisible}
                setDropdownVisible={setDropdownVisible}
                dataUpdated={dataUpdated}
              />
            </Route>
            {/* <Route path={`${path}/in-review`}>
              <InReview Authentication={Authentication} />
            </Route>
            <Route path={`${path}/in-progress`}>
              <InProogress Authentication={Authentication} />
            </Route> */}
          </Switch>
          {/* <Table
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            Authentication={Authentication}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="col-12 col-xl-8 p-4">
  <div>
    <div className="card p-3 my-3">
      <div className="d-flex border-bottom justify-between py-2 -bottom">
        <div className="col  d-flex  gap-2 ">
          <h6 className="fst-italic  m-0 p-0">Car :</h6>
          <span className="fst-italic  m-0 p-0">{cuurentObj?.companyName}</span>
        </div>
        <div className="col d-flex gap-2 justify-content-end -danger">
          <h6 className="fst-italic m-0 p-0">Status :</h6>
          <span className="fst-italic m-0 p-0 fw-bold">
            {cuurentObj?.loan_status}
          </span>
        </div>
      </div>

      <div className="row pt-3 border-bottom py-3">
        <div className="col-6 col-sm-6  col-md-3">
          <div className="d-flex flex-column align-items-start">
            <div>
              <h6 className="m-0 p-0">Car Name:</h6>
              <span className="text-truncate">{cuurentObj?.companyName}</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <div className="d-flex flex-column align-items-end align-items-sm-end align-items-md-center">
            <div>
              <h6 className="m-0 p-0">Modal Name:</h6>
              <span className="text-truncate">{cuurentObj?.modelName}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6  mt-2 mt-md-0 col-md-3">
          <div className="d-flex flex-column align-items-start  align-items-md-center">
            <div>
              <h6 className="m-0 p-0">Modal Type:</h6>
              <span className="text-truncate">{cuurentObj?.modelType}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 mt-2 mt-md-0 col-md-3">
          <div className="d-flex flex-column align-items-end align-items-sm-end">
            <div>
              <h6 className="m-0 p-0">Modal Year:</h6>
              <span className="text-truncate">{cuurentObj?.modelYear}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex pt-3 pt-3 justify-between align-item-start">
        <div className="col d-flex flex-xl-row gap-lg-3  flex-column">
          <h6 className="m-0 p-0">Monthly Income:</h6>
          <span className="text-truncate">{cuurentObj?.monthlyIncome}</span>
        </div>
        <div className="col d-flex flex-xl-row justify-content-center align-items-center  gap-lg-3 flex-column">
          <h6 className="m-0 p-0">Purchase Price:</h6>
          <span className="text-truncate">{cuurentObj?.purchasePrice}</span>
        </div>
        <div className="col d-flex flex-xl-row justify-content-end align-items-end  gap-lg-3 flex-column">
          <h6 className="m-0 p-0">term:</h6>
          <span className="text-truncate">{cuurentObj?.term}</span>
        </div>
      </div>

      <div className="pt-3 pt-3 justify-between align-item-start">
        <h6 className="m-0 p-0 fw-bold fs-6 fst-italic">Additional Income</h6>
        <div className="row my-3">
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncate  p-0 m-0">
              Rental Income per month
            </p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            ></h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncate  p-0 m-0">
              Investment Income
            </p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            ></h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncat e  p-0 m-0">
              Salary Sacrifices Income
            </p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            ></h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncate  p-0 m-0">
              Center Link Benifits
            </p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            ></h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncate  p-0 m-0">
              Forign Income per month
            </p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            ></h6>
          </div>
        </div>
      </div>

      <div className="pt-3 pt-3 justify-between align-item-start">
        <h6 className="m-0 p-0 fw-bold fs-6 fst-italic">Additional Expenses</h6>
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
            <p className="text-muted text-truncate  p-0 m-0">Travelling cost</p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            >
              {expensesDetail.travellingCost}
            </h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncat e  p-0 m-0">Utilities cost</p>
            <h6
              className="fw-bold p-0 m-0"
              style={{ color: "var(--color-primary)" }}
            >
              {expensesDetail.utilitiesCost}
            </h6>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-4 py-3 border-bottom">
            <p className="text-muted text-truncate  p-0 m-0">Insurances cost</p>
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
</div>; */
}
