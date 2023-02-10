import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/auth";

function sendOTP(mobileNumber, setOTPPromptView) {
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
  // const appVerifier = window.recaptchaVerifier;
  // auth
  //   .signInWithPhoneNumber(phone_number, appVerifier)
  //   .then((confirmationResult) => {
  //     console.log("otp sent");
  //     console.log("confirmationResult", confirmationResult);
      setOTPPromptView(true);
    //   window.confirmationResult = confirmationResult;
    // })
    // .catch((error) => {
    //   alert(error.message);
    // });
}
export { sendOTP };
