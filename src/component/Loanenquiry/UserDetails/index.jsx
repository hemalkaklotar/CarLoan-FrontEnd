import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backpage, nextpage } from "../../../redux/Actions/Actions";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import MessageBoat from "../MessageBoat";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customStyles } from "../css/customcss";
import { PrefixOption, stateListOption, getUserDetails } from "./API";
import { useEffect } from "react";
import axios from "axios";
import { headers } from "../../../config/apiConfig";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import userDetailValidation from "./validation";

const UserDetails = ({ Authentication }) => {
  const history = useHistory();
  const [userDetail, setUserDetails] = useState({});
  const [updateUserDetail, setUpdateUserDetail] = useState(false);
  const ketty_s_message = "Perfect ! you have been verified";
  const ketty_s_message2 =
    "Simply fill in your detail while we  prepare your best matches";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: { value: userDetail.state, label: userDetail.state },
    },
    resolver: yupResolver(userDetailValidation),
  });
  const notify = (mesaage) => {
    toast.error(mesaage);
  };
  const onSubmit = (data) => {
    const { state, prefix } = data;
    const updateField = {
      firstName: data.firstName,
      lastName: data.lastName,
      state: state.value,
      prefix: prefix.value,
      emailId: data.email,
    };
    axios
      .put(
        `${process.env.REACT_APP_DOMAIN_NAME}/userDetail/update`,
        updateField,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        if (!data.data.success && data.data.data === "Email ID already Exist") {
          notify(data.data.data);
        } else if (data.data.success) {
          history.push("/leadRequest/user-personal-detail");
        }
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/userDetail`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        setUserDetails(data.data.Data);
      })
      .catch((e) => console.log(e.message));
  }, [updateUserDetail]);

  useEffect(() => {
    reset({
      prefix: { value: userDetail.prefix, label: userDetail.prefix },
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.emailId,
      state: { value: userDetail.state, label: userDetail.state },
    });
  }, [userDetail]);
  return (
    <div className="container-xxl form-main  py-5 px-3">
        <ToastContainer />
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper">
          <div className="row">
            {/* <Link to="/leadRequest/log-in">Back</Link> */}
          </div>
          <MessageBoat msg={ketty_s_message} msg1={ketty_s_message2} />
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10 mt-5">
              <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field-area">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="mb-4 selct-box">
                        <label htmlFor="prefix" className="form-label">
                          Prefix
                        </label>
                        <Controller
                          control={control}
                          name="prefix"
                          {...register("prefix")}
                          // rules={{ required: true }}
                          render={({ field: { onChange, ref, value } }) => (
                            <Select
                              onChange={(e) => {
                                onChange(e);
                              }}
                              inputRef={ref}
                              options={PrefixOption}
                              styles={customStyles}
                              value={value}
                            />
                          )}
                        />
                        {errors?.prefix?.value.message}
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div class="mb-4">
                        <label htmlFor="firstName" class="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          {...register("firstName")}
                          className="form-control"
                        />
                        <p className="d-inline errormsg">
                          {errors?.firstName?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label htmlFor="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      {...register("lastName")}
                      className="form-control"
                    />
                    <p className="d-inline errormsg">
                      {errors?.lastName?.message}
                    </p>
                  </div>
                  <div class="mb-4">
                    <label htmlFor="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      className="form-control"
                    />
                    <p className="d-inline errormsg">
                      {errors?.email?.message}
                    </p>
                  </div>

                  <div class="mb-4 selct-box">
                    <label htmlFor="state" class="form-label">
                      State
                    </label>
                    <Controller
                      control={control}
                      name="state"
                      {...register("state")}
                      // rules={{ required: true }}
                      render={({ field: { onChange, ref, value } }) => (
                        <Select
                          onChange={onChange}
                          inputRef={ref}
                          options={stateListOption}
                          styles={customStyles}
                          value={value}
                        />
                      )}
                    />
                    <p className="d-inline errormsg">
                      {errors?.state?.value.message}
                    </p>
                  </div>
                </div>
                <div className="btn-area d-flex justify-content-end ">
                  <input type="submit" value="Next" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
