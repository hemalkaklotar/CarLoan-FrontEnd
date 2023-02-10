import React from "react";
import MessageBoat from "../MessageBoat";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { generateNewLead } from "./API";

import { useHistory } from "react-router-dom";
const ResumeMyJourney = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const ketty_s_message =
    "At CarClarity your privacy and security is important to us.";
  let loanEnquiry = {
    purchasePrice: state?.loanDetail?.purchasePrice,
    deposite: state?.loanDetail?.deposite,
    term: state?.loanDetail?.term,
    balloon: state?.loanDetail?.balloon,
    selectedCar: state?.cardetail?.car_id,
    companyName: state?.cardetail?.companyName,
    modelName: state?.cardetail?.modelName,
    modelType: state?.cardetail?.modelType,
    modelYear: state?.cardetail?.modelYear,
    monthlyIncome: state?.workdetail?.monthlyIncome,
    workDetail: state?.workdetail?.workDetail,
    loan_status: "InReview",
  };
  const Authentication = state.Auth.token;
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(loanEnquiry);
    generateNewLead(loanEnquiry, Authentication, dispatch);
    history.push("/leadRequest/user-detail");
  };
  return (
    <div className="container-xxl form-main  py-5 px-3">
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper h-100 position-relative">
          <MessageBoat msg={ketty_s_message} />
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10 mt-5">
              <form className="h-100 form">
                <div className="field-area">
                  <div className="btn-area d-flex justify-content-end ">
                    <input type="submit" value="Next" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="otppromtviewer h-100 w-100 top-0 d-flex justify-content-center align-items-center position-absolute">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="btn-area d-flex justify-content-end">
                <input type="submit" value="Continue Journey" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMyJourney;
