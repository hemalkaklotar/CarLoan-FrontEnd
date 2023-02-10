import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginDTO } from "../../../redux/Actions/Actions";

const OTPVerification = ({ settoggleOTPComponent, mobieNumber }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onOTPSubmit = (data) => {
    // console.log(mobieNumber);
    // window.confirmationResult
    //   .confirm(data.otp)
    //   .then((confirmationResult) => {
    //     console.log("confirm verified");
    //   })
    //   .then(() => {
        history.push("/Agent");
      // })
      // .catch((e) => console.log("In valid "));
  };
  return (
    <form className="h-100 w-100 form" onSubmit={handleSubmit(onOTPSubmit)}>
      <div className="row w-100">
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="form-wrapper">
            <div className="field-area">
              <div class="mb-4">
                <label htmlFor="otp" class="form-label">
                  OTP
                </label>
                <input
                  type="number"
                  name="otp"
                  className="form-control"
                  {...register("otp")}
                />
              </div>
            </div>
            <div className="btn-area d-flex justify-content-end ">
              <input type="submit" value="Next" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OTPVerification;
