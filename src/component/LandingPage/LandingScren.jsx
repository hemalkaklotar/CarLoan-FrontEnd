import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import True from "../../images/true";
import ChartCurrency from "../../images/ChartCurrency";
import { useDispatch, useSelector } from "react-redux";

import car1 from "../../images/car1.webp";
import car2 from "../../images/car2.webp";
import car3 from "../../images/car3.webp";
import car4 from "../../images/car4.webp";
import car5 from "../../images/car5.webp";
import car6 from "../../images/car6.webp";
import car7 from "../../images/car7.webp";
import {
  setUserDirectLogin,
  setUserNormalLogin,
} from "../../redux/Actions/Actions";

import logo from "../../images/logo1.png";

import { CiLogin } from "react-icons/ci";

import "./style.css";
import { useState } from "react";
import CashFloating from "../../images/CashFloating";
import SafeShield from "../../images/SafeShield";
import { useHistory } from "react-router-dom";

const LandingScren = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const imgset = [car1, car2, car3, car4, car5, car6, car7];
  const [loadedImg, setLoadedimg] = useState(car1);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLoadedimg(imgset[i]);
      i++;
      if (i == imgset.length) {
        i = 0;
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);
  function moveToLeadDetail() {
    history.push("/leadRequest/LoanDetails");
  }
  return (
    <div className="container-xxl landing">
      <div
        style={{ color: "var(--color-primary)", fontSize: "32px" }}
        className="d-flex gap-3 align-items-center justify-content-between"
      >
        <div style={{ height: "1.8em", width: "1.8em" }}>
          <img style={{ height: "100%" }} src={logo} alt="" />
        </div>
        <Link
          to="leadRequest/log-in"
          onClick={() => {
            dispatch(setUserDirectLogin());
          }}
        >
          <div
            style={{ color: "var(--color-primary)", fontSize: "32px" }}
            className="d-flex align-itens-center gap-2 justify-content-center"
          >
            <CiLogin />
            <span style={{ fontSize: "19px", fontWeight: "800" }}>Log in </span>
          </div>
        </Link>
      </div>
      <div className="wrapper d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="d-flex my-lg-5 py-lg-5 flex-column justify-content-center align-items-center flex-lg-row w-100">
          <div className="col">
            <div className="tittle  text-center text-sm-start">
              <p>Car finance. Easy as.</p>
            </div>
            <div className="buttet-Point ms-4">
              <ul className="list-unstyled m-0">
                <li className="list-item my-2 d-flex gap-3 align-items-center">
                  <True />
                  <span>
                    Get your top loan matches from 30+ lenders in 60 sec
                  </span>
                </li>

                <li className="list-item my-2 d-flex gap-3 align-items-center">
                  <True />
                  <span>
                    Get personalised loan options based on your circumstances
                  </span>
                </li>

                <li className="list-item my-2 d-flex gap-3 align-items-center">
                  <True />
                  <span>No impact on credit score</span>
                </li>
              </ul>
            </div>

            <div className="btn-area d-flex flex-column justify-content-center align-items-center py-4">
              <div className="btn-get-loan-option">
                <Link
                  to="/leadRequest"
                  onClick={() => {
                    dispatch(setUserNormalLogin());
                  }}
                >
                  Get my loan options
                </Link>
              </div>
              <p className="my-3 fs-6 fw-bolder"> OR </p>
              <Link> Talk to an expert</Link>
            </div>
          </div>
          <div className="col">
            <div className="car-img-box">
              <img src={loadedImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <div className="row mx-auto">
          <div className="col-12 col-sm-4">
            <div className="card-wraper py-3 w-100 gap-4 d-flex justify-content-between align-items-start px-5">
              <div className="flex-shrink-0">
                <ChartCurrency />
              </div>
              <div className="d-flex flex-column">
                <p className="card-heading text-left">
                  Competitive car loan rates
                </p>
                <span className="card-sub-heading text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione, rem aut? Assumenda officia labore molestiae, nostrum
                  atque eveniet reiciendis voluptatum.
                </span>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-4">
            <div className="card-wraper py-3 w-100 gap-4 d-flex justify-content-between align-items-start px-5">
              <div className="flex-shrink-0">
                <CashFloating />
              </div>
              <div className="d-flex flex-column">
                <p className="card-heading text-left">
                  Competitive car loan rates
                </p>
                <span className="card-sub-heading text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione, rem aut? Assumenda officia labore molestiae, nostrum
                  atque eveniet reiciendis voluptatum.
                </span>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-4">
            <div className="card-wraper py-3 w-100 gap-4 d-flex justify-content-between align-items-start px-5">
              <div className="flex-shrink-0">
                <SafeShield />
              </div>
              <div className="d-flex flex-column">
                <p className="card-heading text-left">
                  Competitive car loan rates
                </p>
                <span className="card-sub-heading text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione, rem aut? Assumenda officia labore molestiae, nostrum
                  atque eveniet reiciendis voluptatum.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScren;
