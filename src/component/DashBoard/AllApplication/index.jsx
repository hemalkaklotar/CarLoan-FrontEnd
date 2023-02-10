import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AllList from "./AllList";
import InProogress from "./InProogress";
import InReview from "./InReview";

const AllApplication = ({Authentication}) => {
  // let { topicId } = useParams();
  // const Authentication = useSelector((state) => state.Auth);
  let { path, url } = useRouteMatch();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="position-relative">
      {/* <Message msg={headermsg} /> */}
      <div className="container-xxl mt-5">
        <div className="row mt-0 pt-0">
          <div className="col-12 col-md-4 mt-5">
            <div className="card p-3">
              <p
                style={{
                  color: "var(--color-dark-200)",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                Get Loan Options
              </p>
              <ul>
                <li className="text-muted" style={{ fontSize: "15px" }}>
                  Comapre 30+ matched lenders in 60 seconds
                </li>
                <li className="text-muted" style={{ fontSize: "15px" }}>
                  Same day approvals with 95 % approval rate{" "}
                </li>
              </ul>

              <div
                className="d-flex p-3 justify-content-between align-items-start"
                style={{ backgroundColor: "#218d2125", borderRadius: "8px" }}
              >
                <div>
                  <p
                    className="m-0 p-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "var(--color-dark-100)",
                    }}
                  >
                    Payment From
                  </p>
                  <p
                    className="m-0 p-0"
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "32px",
                      fontWeight: "800",
                    }}
                  >
                    $###
                  </p>
                  <span className="text-muted fst-bold">per week</span>
                </div>
                <div>
                  <button
                    className="d-block btn mt-1 py-2 text-light"
                    style={{
                      width: "110px",
                      backgroundColor: "var(--color-primary)",
                      borderRadius: "32px",
                    }}
                  >
                    start Now
                  </button>
                  <p
                    className="text-muted mt-1 fst-bold"
                    style={{ maxWidth: "110px", fontSize: "13px" }}
                  >
                    No impact on your Credit score
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" col-12 col-md-8 mt-0"
            style={{ height: "82vh", maxHeight: "830px", overflow: "Auto" }}
          >
            <ul
              className="d-flex list-unstyled border-bottom pt-0 mt-0"
              style={{
                backgroundColor: "#fff",
                position: "sticky",
                top: "0",
                zIndex: "3000",
              }}
            >
              <li className="text-muted mx-4 py-2">
                <Link
                  className={` ${activeTab === 0 ? "" : "text-muted"}`}
                  to={`${url}`}
                  onClick={() => {
                    setActiveTab(0);
                  }}
                >
                  All
                </Link>
              </li>
              <li className="text-muted mx-4 py-2">
                <Link
                  className={` ${activeTab === 1 ? "" : "text-muted"}`}
                  to={`${url}/in-progress`}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  in Progress
                </Link>
              </li>
              <li className="text-muted mx-4 py-2">
                <Link
                  className={` ${activeTab === 2 ? "" : "text-muted"}`}
                  to={`${url}/in-review`}
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  In Review
                </Link>
              </li>
            </ul>
            <Switch>
              <Route exact path={path}>
                <AllList Authentication={Authentication} />
              </Route>
              <Route path={`${path}/in-review`}>
                <InReview Authentication={Authentication} />
              </Route>
              <Route path={`${path}/in-progress`}>
                <InProogress Authentication={Authentication} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;
