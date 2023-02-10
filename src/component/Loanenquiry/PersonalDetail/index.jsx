import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { headers } from "../../../config/apiConfig";
import { getInitialFieldsData } from "./API";
import { Link } from "react-router-dom";
import { personalDetails } from "../../../redux/Actions/Actions";
import MessageBoat from "../MessageBoat";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customStyles } from "../css/customcss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import personalDetailsValidation from "./validation";

const PersonalDetail = ({ Authentication }) => {
  const [personalDetailField, setPersonalDetailField] = useState({});
  const history = useHistory();
  const ketty_s_message =
    "Perfect ! i need to grab some personal info so we can run a soft credit  check, it won't impect your credit score";
  const state = useSelector((state) => state.licencedetail);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(personalDetailsValidation),
    // defaultValues: {
    // firstNameOnDrivingLicense: personalDetailField?.firstNameOnDrivingLicense,
    // },
  });

  const onSubmit = (data) => {
    dispatch(personalDetails(data));
    // updatePersonalDetailsField(state,Authentication);
    history.push("/leadRequest/user-driving-licence-detail");
  };
  useEffect(() => {
    if (Authentication.isAuthenticated) {
      console.log("Hello");
      getInitialFieldsData(setPersonalDetailField, Authentication);
    }
  }, []);

  useEffect(() => {
    reset({
      prefix: {
        value: personalDetailField?.prefix,
        label: personalDetailField?.prefix,
      },
      firstNameOnDrivingLicense: personalDetailField?.firstNameOnDrivingLicense,
      lastNameOnDrivingLicense: personalDetailField?.lastNameOnDrivingLicense,
      date: personalDetailField?.dateOfBirth?.split("-")[2],
      month: personalDetailField?.dateOfBirth?.split("-")[1],
      year: personalDetailField?.dateOfBirth?.split("-")[0],
    });
  }, [personalDetailField]);
  return (
    <div className="container-xxl form-main  py-5 px-3">
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper">
          <div className="row">
            <Link to="/leadRequest/user-detail">Back</Link>
          </div>
          <MessageBoat msg={ketty_s_message} />
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10 mt-5">
              <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field-area">
                  <div class="mb-4">
                    <label
                      htmlFor="firstNameOnDrivingLicense"
                      class="form-label"
                    >
                      First name Based On driving License
                    </label>
                    <input
                      type="text"
                      name="firstNameOnDrivingLicense"
                      {...register("firstNameOnDrivingLicense")}
                      className="form-control"
                      // value={personalDetailField?.firstNameOnDrivingLicense}
                    />
                    <p className="d-inline errormsg">
                      {errors?.firstNameOnDrivingLicense?.message}
                    </p>
                  </div>
                  <div class="mb-4">
                    <label
                      htmlFor="lastNameOnDrivingLicense"
                      class="form-label"
                    >
                      Last name Based on Driving License
                    </label>
                    <input
                      type="text"
                      name="lastNameOnDrivingLicense"
                      {...register("lastNameOnDrivingLicense")}
                      className="form-control"
                      // value={personalDetailField?.lastNameOnDrivingLicense}
                    />
                    <p className="d-inline errormsg">
                      {errors?.lastNameOnDrivingLicense?.message}
                    </p>
                  </div>

                  <div className="row">
                    <label class="form-label">Date of Birth</label>
                    <div className="col-4">
                      <div class="mb-4">
                        <input
                          type="number"
                          name="date"
                          {...register("date")}
                          className="form-control"
                          placeholder="DD"
                          // value={personalDetailField?.dateOfBirth?.split("-")[2]}
                        />
                        <p className="d-inline errormsg">
                          {errors?.date?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="mb-4">
                        <input
                          type="number"
                          name="month"
                          {...register("month")}
                          className="form-control"
                          placeholder="MM"
                        />
                        <p className="d-inline errormsg">
                          {errors?.month?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="mb-4">
                        <input
                          type="number"
                          name="year"
                          {...register("year")}
                          className="form-control"
                          placeholder="YYYY"
                        />
                        <p className="d-inline errormsg">
                          {errors?.year?.message}
                        </p>
                      </div>
                    </div>
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

export default PersonalDetail;
// DrivingLicenceDetail;
