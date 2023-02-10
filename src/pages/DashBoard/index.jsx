import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AllApplication from "../../component/DashBoard/AllApplication";
import Home from "../../component/DashBoard/Home";
import Topics from "../../component/DashBoard/Topics";
import CloseHamburgur from "../../images/CloseHamburgur";
import Hamburgur from "../../images/Hamburgur";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { LogOutUser } from "../../redux/Actions/Actions";
import "./style.css";
import UserGaurd from "./UserGaurd";
const DashBoard = ({ Authentication }) => {
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  const [shownavbar, setShowNavbar] = useState(false);
  const HomeHeader = "Show My Latest Requests";
  function handleLogout() {
    dispatch(LogOutUser());
  }
  // const selector = useSelector((state) => state.Auth);
  return (
    <>
      <div className="nav-icon">
        <button onClick={(e) => setShowNavbar(!shownavbar)}>
          {shownavbar ? <CloseHamburgur /> : <Hamburgur />}
        </button>
      </div>

      <div className="d-flex">
        <nav
          className={`d-flex flex-row h-100 position-fixed ${
            shownavbar ? "showNavbar" : "hideNavbar"
          }`}
          style={{ zIndex: "1" }}
        >
          <ul>
            {shownavbar && (
              <>
                <li onClick={() => setShowNavbar(!shownavbar)}>
                  <Link to={`${url}`}>Home</Link>
                </li>
                <li>
                  <Link
                    to={`${url}/all-application`}
                    onClick={() => setShowNavbar(!shownavbar)}
                  >
                    All Application
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="w-100">
          <div
            style={{
              marginLeft: "320px",
              zIndex: "9999",
              backgroundColor: "#fff",

              paddingRight: "22px",
              top: "0",
            }}
            className=" d-flex justify-content-end border-bottom position-sticky"
          >
            <div
              style={{
                color: "var(--color-primary)",
                fontSize: "22px",
                right: "24px",
                zIndex: "9999",
                minWidth: "140px",
              }}
              className="d-flex gap-3 align-items-center"
            >
              <Link onClick={() => handleLogout()}>
                <RiLogoutBoxLine />
                <span style={{ fontSize: "19px", fontWeight: "800" }}>
                  Log Out
                </span>
              </Link>
            </div>
          </div>

          <Switch>
            <div>
              <Route exact path={path}>
                <UserGaurd>
                  <Home Authentication={Authentication} />
                </UserGaurd>
              </Route>
              <Route path={`${path}/all-application`}>
                <UserGaurd>
                  <AllApplication Authentication={Authentication} />
                </UserGaurd>
              </Route>
            </div>
          </Switch>
        </div>
        {/* <Topics path={path} /> */}
      </div>
    </>
  );
};

export default DashBoard;
