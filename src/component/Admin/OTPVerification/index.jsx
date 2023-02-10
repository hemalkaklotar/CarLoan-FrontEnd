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
    // window.confirmationResult
    //   .confirm(data.adminotp)
    //   .then((confirmationResult) => {
    //     console.log(confirmationResult);
    //     console.log("confirm verified");
    //   })
    //   .then(() => {
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/admin/login`, {
        mobileNumber: mobieNumber,
        password: data.password,
      })
      .then((confirm) => {
        console.log("confirm", confirm.status);
        dispatch(
          loginDTO({
            token: confirm.data.token,
            isUserIs: confirm.data.role,
          })
        );
      })
      // .then(() => 
      // history.push("/admin")
      // )
      .catch((e) => console.log(e.message));
    //   })
    //   .catch((e) => console.log("In valid "));
    // console.log("mobieNumber", mobieNumber);
  };
  return (
    <form className="h-100 w-100 form" onSubmit={handleSubmit(onOTPSubmit)}>
      <div className="row w-100">
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="form-wrapper">
            <div className="field-area">
              <div class="mb-4">
                <label htmlFor="password" class="form-label">
                  OTP
                </label>
                <input
                  type="number"
                  name="password"
                  className="form-control"
                  {...register("password")}
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
