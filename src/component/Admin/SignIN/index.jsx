import React from "react";
import { useForm } from "react-hook-form";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/auth";
const SignIN = ({
  settoggleOTPComponent,
  settoggleSignInComponent,
  setMobileNumber,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onMobileSubmit = (data) => {
    console.log("data");
    // console.log(data);
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
    // let phone_number = "+91" + data.mobileNumber;
    setMobileNumber(data.mobileNumber);
    // const appVerifier = window.recaptchaVerifier;
    // auth
    //   .signInWithPhoneNumber(phone_number, appVerifier)
    //   .then((confirmationResult) => {
    //     console.log("otp sent");
    //     console.log("confirmationResult", confirmationResult);
    settoggleOTPComponent(true);
    settoggleSignInComponent(false);
    //     window.confirmationResult = confirmationResult;
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
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
