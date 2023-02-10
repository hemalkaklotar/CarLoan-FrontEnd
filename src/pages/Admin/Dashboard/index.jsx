import React, { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Dashboard from "../../../component/Admin/Dashboard";
import PageNotFound from "../../../component/common/PageNotFound";
import CloseHamburgur from "../../../images/CloseHamburgur";
import Hamburgur from "../../../images/Hamburgur";
import { LogOutUser } from "../../../redux/Actions/Actions";

import AddAgent from "../AddAgent";
import ShowALLAgent from "../ShowALLAgent";

const DashBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Authentication = useSelector((state) => state.Auth);
  let { path, url } = useRouteMatch();
  const [shownavbar, setShowNavbar] = useState(false);
  function handleLogout() {
    dispatch(LogOutUser());
  }
  return (
    <div style={{ height: "100vh" }}>
      <div className="nav-icon">
        <button onClick={(e) => setShowNavbar(!shownavbar)}>
          {shownavbar ? <CloseHamburgur /> : <Hamburgur />}
        </button>
      </div>

      <div className="d-flex h-100 overflow-hidden">
        <nav
          className={`d-flex flex-row ${
            shownavbar ? "showNavbar" : "hideNavbar"
          }`}
        >
          <ul>
            {shownavbar && (
              <>
                <li onClick={() => setShowNavbar(!shownavbar)}>
                  <Link to={`${url}`}>Home</Link>
                </li>
                {/* <li>
                  <Link
                    to={`${url}/all-application`}
                    onClick={() => setShowNavbar(!shownavbar)}
                  >
                    All Application
                  </Link>
                </li> */}
                <li
                  className={`${
                    Authentication.isUserIs === "Admin" ? "" : "d-none"
                  }`}
                >
                  <Link
                    to={`${url}/add-agent`}
                    onClick={() => setShowNavbar(!shownavbar)}
                  >
                    Add Agent
                  </Link>
                </li>
                <li
                  className={`${
                    Authentication.isUserIs === "Admin" ? "" : "d-none"
                  }`}
                >
                  <Link
                    to={`${url}/show-all-agent`}
                    onClick={() => setShowNavbar(!shownavbar)}
                  >
                    Show All Agent
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="position-fixed" style={{ top: "12px", right: "25px" }}>
          <Link onClick={() => handleLogout()}>
            <div className="d-flex gap-4 align-items-center">
              <RiLogoutBoxLine />
              <span style={{ fontSize: "19px", fontWeight: "800" }}>
                Log Out
              </span>
            </div>
          </Link>
        </div>
        <div style={{ minHeight: "80vh" }} className="m-12 w-100">
          <Switch>
            <Route exact path={`${path}add-agent`}>
              <AddAgent />
            </Route>
            <Route path={path}>
              <Dashboard />
            </Route>
          </Switch>
        </div>
        {/* <Topics path={path} /> */}
      </div>
    </div>
  );
};

export default DashBoard;
