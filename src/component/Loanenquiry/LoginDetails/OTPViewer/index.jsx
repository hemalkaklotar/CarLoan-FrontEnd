import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { loginDTO } from "../../../../redux/Actions/Actions";
import { generateNewLead } from "./API";
import { useEffect } from "react";
const OTPViewer = ({ mobileNumber }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const isDirectLogin = useSelector((state) => state.Auth.directLogin);
  const [flag, setFlag] = useState(false);
  let loanEnquiry = {
    purchasePrice: state?.loanDetail?.purchasePrice,
    deposite: state?.loanDetail?.deposite,
    term: state?.loanDetail?.term,
    balloon: state?.loanDetail?.balloon,
    car_id: state?.cardetail?.car_id,
    monthlyIncome: state?.workdetail?.monthlyIncome,
    workDetail: state?.workdetail?.workDetail,
  };

  let Authentication = state?.Auth?.token;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    // window.confirmationResult
    //   .confirm(data.otp)
    //   .then((confirmationResult) => {
    //     console.log(confirmationResult);
    //     console.log("confirm verified", mobileNumber);
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/newuser`, {
        mobileNumber: mobileNumber,
      })
      .then((confirm) => {
        dispatch(
          loginDTO({
            token: confirm.data.token,
            credential: confirm.data.message,
          })
        );
        setFlag(true);
        if (isDirectLogin) {
          if (confirm.data.message === "Existing User") {
            history.push("/dashboard");
          } else {
            history.push("/leadRequest");
          }
        } else {
          history.push("/leadRequest/resume-my-journey");
        }
      })
      // .then(() => {})
      // .then(() => {})
      .catch((e) => e.message);
    // })
    // .catch((error) => {
    //   alert(error.message);
    // });
  };
  useEffect(() => {}, [flag]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <label htmlFor="otp" class="form-label otp-text">
          verify your otp
        </label>
        <input
          type="number"
          name="otp"
          className="form-control backdrop-12"
          {...register("otp", { required: true })}
        />
        <p className="d-inline errormsg">{errors?.mobileNumber?.message}</p>
      </div>
      <div className="btn-area d-flex justify-content-end ">
        <input type="submit" value="Submit" />
      </div>
      <div />
    </form>
  );
};

export default OTPViewer;
