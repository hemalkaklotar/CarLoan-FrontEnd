import React from "react";
import { useForm } from "react-hook-form";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/auth";
import { loginDTO } from "../../../redux/Actions/Actions";
import axios from "axios";
import { useDispatch } from "react-redux";
const SignIN = ({
  settoggleOTPComponent,
  settoggleSignInComponent,
  setMobileNumber,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onMobileSubmit = (data) => {
    let mobileNumber = data.mobileNumber;
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/agent/findAgent`, {
        mobileNumber: data.mobileNumber,
      })
      .then((data) => {
        if (data.data.success === true) {
          console.log(data.data);
          dispatch(
            loginDTO({
              token: data.data.token,
              isUserIs: data.data.role,
            })
          );
          // if (!firebase.apps.length) {
          //   firebase.initializeApp(firebaseConfig);
          // } else {
          //   firebase.app();
          // }
          // const auth = firebase.auth();
          // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          //   "recaptcha-container",
          //   {
          //     size: "invisible",
          //     callback: function (response) {
          //       console.log("Captcha Resolved");
          //       this.onSignInSubmit();
          //     },
          //     defaultCountry: "IN",
          //   }
          // );
          // console.log(window.recaptchaVerifier);
          // let phone_number = "+91" + mobileNumber;
          // setMobileNumber(mobileNumber);
          // const appVerifier = window.recaptchaVerifier;
          // auth
          //   .signInWithPhoneNumber(phone_number, appVerifier)
          //   .then((confirmationResult) => {
          //     console.log("otp sent");
          //     console.log("confirmationResult", confirmationResult);
          //     settoggleOTPComponent(true);
          //     settoggleSignInComponent(false);
          //     window.confirmationResult = confirmationResult;
          //   });

          setMobileNumber(mobileNumber);
          settoggleOTPComponent(true);
          settoggleSignInComponent(false);
        }
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <form className="h-100 w-100 form" onSubmit={handleSubmit(onMobileSubmit)}>
      <div className="row w-100">
        <div id="recaptcha-container"></div>
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="form-wrapper">
            <div className="field-area">
              <div class="mb-4">
                <label htmlFor="mobileNumber" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="mobileNumber"
                  className="form-control"
                  {...register("mobileNumber")}
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

export default SignIN;
