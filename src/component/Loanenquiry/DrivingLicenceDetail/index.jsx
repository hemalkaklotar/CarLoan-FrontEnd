import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backpage, licenceDetails } from "../../../redux/Actions/Actions";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import drivingLicenceValidation from "./validation";
import MessageBoat from "../MessageBoat";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { customStyles } from "../css/customcss";
import {
  updatePersonalDetailsField,
  AutoFillDrivingLicenceFeild,
  getInitialFieldsData,
} from "./API";
import { useHistory } from "react-router-dom";

const DrivingLicenceDetail = ({ Authentication }) => {
  const history = useHistory();
  const [drivingLicenceDetailField, setDrivingLicenceDetailField] = useState(
    {}
  );

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
    defaultValues: {
      licenceType: { value: "", label: "" },
    },
    resolver: yupResolver(drivingLicenceValidation),
  });
  const notify = (mesaage) => {
    console.log("Hello");
    toast.success(mesaage);
  };
  const notifyError = (mesaage) => {
    console.log("Hello1");
    toast.error(mesaage);
  };
  function handleBack() {
    dispatch(backpage());
  }
  const onSubmit = (data) => {
    // dispatch(licenceDetails(data));
    updatePersonalDetailsField(state, data, Authentication).then((data) => {
      if (data.success === true) {
        console.log(data);
        notify(data.message);
        history.push("/leadRequest/income-details");
      } else {
        console.log(data);
        notifyError(data.message);
      }
    });
    // history.push("/leadRequest/income-details");
  };
  let dataFromGetAPI = [
    {
      value: "A",
      label: "A",
    },
    {
      value: "B",
      label: "B",
    },
    {
      value: "C",
      label: "C",
    },
  ];
  useEffect(() => {
    getInitialFieldsData(setDrivingLicenceDetailField, Authentication);
  }, []);
  useEffect(() => {
    // AutoFillDrivingLicenceFeild(reset);
    reset({
      licenceNumber: drivingLicenceDetailField?.licenceNumber,
      date: drivingLicenceDetailField?.expieryDate?.split("-")[2],
      month: drivingLicenceDetailField?.expieryDate?.split("-")[1],
      year: drivingLicenceDetailField?.expieryDate?.split("-")[0],
      licenceType: {
        value: drivingLicenceDetailField?.licenseType,
        label: drivingLicenceDetailField?.licenseType,
      },
      issueState: {
        value: drivingLicenceDetailField?.issue_state,
        label: drivingLicenceDetailField?.issue_state,
      },
    });
  }, [drivingLicenceDetailField]);
  return (
    <div className="container-xxl form-main  py-5 px-3">
      <ToastContainer />
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper">
          <div className="row">
            <Link
              to="/leadRequest/user-personal-detail"
              onClick={(e) => handleBack()}
            >
              Back
            </Link>
          </div>
          <MessageBoat msg={ketty_s_message} />
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10 mt-5">
              <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field-area">
                  <div class="mb-4">
                    <label htmlFor="licenceNumber" class="form-label">
                      Licence Number
                    </label>
                    <input
                      type="number"
                      name="licenceNumber"
                      {...register("licenceNumber")}
                      className="form-control"
                    />
                    <p className="d-inline errormsg">
                      {errors?.licenceNumber?.message}
                    </p>
                  </div>
                  <div className="row">
                    <label class="form-label">Expiry</label>
                    <div className="col-4">
                      <div class="mb-4">
                        <input
                          type="number"
                          name="date"
                          {...register("date")}
                          className="form-control"
                          placeholder="DD"
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
                          placeholder="MMM"
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
                  <div class="mb-4 selct-box">
                    <label htmlFor="licenceType" class="form-label">
                      Licence type
                    </label>
                    <Controller
                      control={control}
                      name="licenceType"
                      {...register("licenceType")}
                      rules={{ required: true }}
                      render={({ field: { onChange, ref, value } }) => (
                        <Select
                          onChange={onChange}
                          inputRef={ref}
                          styles={customStyles}
                          options={dataFromGetAPI}
                          value={value}
                        />
                      )}
                    />
                    <p className="d-inline errormsg">
                      {errors?.licenceType?.value?.message}
                    </p>
                  </div>
                  <div class="mb-4 selct-box">
                    <label htmlFor="issueState" class="form-label">
                      Issue State
                    </label>
                    <Controller
                      control={control}
                      name="issueState"
                      {...register("issueState")}
                      rules={{ required: true }}
                      render={({ field: { onChange, ref, value } }) => (
                        <Select
                          onChange={onChange}
                          inputRef={ref}
                          styles={customStyles}
                          options={dataFromGetAPI}
                          value={value}
                        />
                      )}
                    />
                    <p className="d-inline errormsg">
                      {errors?.issueState?.value?.message}
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

export default DrivingLicenceDetail;
