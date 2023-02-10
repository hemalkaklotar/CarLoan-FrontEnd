import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OTPVerification from "../../../component/Admin/OTPVerification";
import SignIN from "../../../component/Admin/SignIN";

const AuthPage = () => {
  const [toggleSignInComponent, settoggleSignInComponent] = useState(true);
  const [toggleOTPComponent, settoggleOTPComponent] = useState(false);
  const [mobieNumber, setMobileNumber] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  return (
    <div className="h-100vh d-flex justify-content-center align-items-center border container-xxl py-5 h-100">
      {toggleSignInComponent && (
        <SignIN
          settoggleOTPComponent={settoggleOTPComponent}
          settoggleSignInComponent={settoggleSignInComponent}
          setMobileNumber={setMobileNumber}
        />
      )}
      {toggleOTPComponent && (
        <OTPVerification
          settoggleOTPComponent={settoggleOTPComponent}
          mobieNumber={mobieNumber}
        />
      )}
    </div>
  );
};

export default AuthPage;
