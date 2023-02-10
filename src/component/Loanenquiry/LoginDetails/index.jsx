import React from "react";
import MessageBoat from "../MessageBoat";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { nextpage, loginDTO } from "../../../redux/Actions/Actions";
import { sendOTP } from "./API";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import loginvalidation from "./validation";
import { useState } from "react";
import OTPViewer from "./OTPViewer";

const LoginDetails = () => {
  const dispatch = useDispatch();
  const [OTPPromtView, setOTPPromptView] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const Authentication = useSelector((checkAuth) => checkAuth.Auth);
  const history = useHistory();

  const ketty_s_message =
    "At CarClarity your privacy and security is important to us.";
  const ketty_s_message2 =
    "Please protect your account with SMS authentication.";
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(loginvalidation) });

  const onSubmit = (data) => {
    setMobileNumber(data.mobileNumber);
    sendOTP(data.mobileNumber, setOTPPromptView);
  };
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper position-relative">
            <MessageBoat msg={ketty_s_message} msg1={ketty_s_message2} />
            <div className="row">
              <div className="col-0 col-sm-2">
                <div id="recaptcha-container"></div>
              </div>
              <div className="col-12 col-sm-10 mt-5">
                <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field-area">
                    <div class="mb-4">
                      <label htmlFor="mobileNumber" class="form-label">
                        Mobile number
                      </label>
                      <input
                        type="number"
                        name="mobileNumber"
                        className="form-control"
                        {...register("mobileNumber", { required: true })}
                      />
                      <p className="d-inline errormsg">
                        {errors?.mobileNumber?.message}
                      </p>
                    </div>
                    <div />
                  </div>
                  <div className="btn-area d-flex justify-content-end ">
                    <input type="submit" value="next" />
                  </div>
                </form>
              </div>
            </div>
            {OTPPromtView && (
              <div className="otppromtviewer h-100 w-100 top-0 d-flex justify-content-center align-items-center position-absolute">
                <OTPViewer mobileNumber={mobileNumber} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDetails;
