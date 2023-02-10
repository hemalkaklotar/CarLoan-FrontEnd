import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import MessageBoat from "../MessageBoat";
import AsyncSelect from "react-select/async";
import { customStyles } from "../css/customcss.js";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { backpage, nextpage, cardetails } from "../../../redux/Actions/Actions";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import cardetailsValidation from "./validation";

import { getYearsList, getTheModelNameList, getModalTypeList } from "./API";
const SelectCarDetail = () => {
  const history = useHistory();
  const state = useSelector((state) => state.cardetail);
  const auth = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      companyName: { value: state.companyName, label: state.companyName },
      modelName: { value: "", label: "" },
      modelYear: { value: "", label: "" },
      modelType: { value: "", label: "" },
    },
    resolver: yupResolver(cardetailsValidation),
  });
  const [selectCarDetail, setSelectCarDetail] = useState({});
  const [companyList, setCompanyList] = useState([]);
  const [modalList, setModalList] = useState([]);
  const [realeaseYearList, setRealeaseYearList] = useState([]);
  const [modalTypeList, setModalTypeList] = useState([]);
  const ketty_s_message = "Please tell us What car you want ?";

  const onSubmit = (data) => {
    let formdata = {
      companyName: data.companyName.value,
      modelName: data.modelName.value,
      // modelName: data.modelName.value,
      modelType: data.modelType.value,
      modelYear: data.modelYear.value,
      car_id: modalTypeList[0]?.carId,
    };
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/getCarID`, formdata)
      .then((data) => {
        console.log(data.data.Data.car_id);
        console.log((formdata.car_id = data.data.Data.car_id));
        return {
          ...formdata,
          car_id: data.data.Data.car_id,
          // formdata.car_id = data.data.Data.car_id;
        };
      })
      .then(() => {
        console.log("formdata", formdata);
        dispatch(cardetails(formdata));
      })
      .catch((e) => console.log(e.message));
    history.push("/leadRequest/WorkDetails");
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/carCompanyList`)
      .then((data) => {
        const cmpList = data.data.Data.map((value) => {
          return {
            value: value.companyName,
            label: value.companyName,
          };
        });
        setCompanyList(cmpList);
      });
  }, [modalList]);
  useEffect(() => {
    setSelectCarDetail(state);
    reset({
      companyName: {
        value: selectCarDetail?.companyName,
        label: selectCarDetail?.companyName,
      },
      modelName: {
        value: selectCarDetail?.modelName,
        label: selectCarDetail?.modelName,
      },
      modelYear: {
        value: selectCarDetail?.modelYear,
        label: selectCarDetail?.modelYear,
      },
      modelType: {
        value: selectCarDetail?.modelType,
        label: selectCarDetail?.modelType,
      },
    });
  }, [selectCarDetail]);
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper">
            <div className="row">
              <Link to="/leadRequest">Back</Link>
            </div>
            <MessageBoat msg={ketty_s_message} />
            {/* below line put blank space for aligning the data */}
            <div className="row">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10 mt-5">
                <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field-area">
                    <div className="mb-4 selct-box">
                      <label htmlFor="companyName" className="form-label">
                        Make
                      </label>
                      <Controller
                        control={control}
                        name="companyName"
                        {...register("companyName")}
                        // rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={(e) => {
                              getTheModelNameList(setModalList, e);
                              onChange(e);
                            }}
                            inputRef={ref}
                            options={companyList}
                            styles={customStyles}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors.companyName?.value?.message}
                      </p>
                    </div>
                    <div className="mb-4 selct-box">
                      <label htmlFor="modelName" className="form-label">
                        Model
                      </label>
                      <Controller
                        control={control}
                        name="modelName"
                        {...register("modelName")}
                        // rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={(e) => {
                              getYearsList(setRealeaseYearList, e);
                              onChange(e);
                            }}
                            inputRef={ref}
                            styles={customStyles}
                            options={modalList}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors.modelName?.value?.message}
                      </p>
                    </div>
                    <div className="mb-4 selct-box">
                      <label htmlFor="modelYear" className="form-label">
                        year
                      </label>
                      <Controller
                        control={control}
                        name="modelYear"
                        {...register("modelYear")}
                        // rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={(e) => {
                              getModalTypeList(setModalTypeList, e);
                              onChange(e);
                            }}
                            inputRef={ref}
                            styles={customStyles}
                            options={realeaseYearList}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors.modelYear?.value?.message}
                      </p>
                    </div>
                    <div className="mb-4 selct-box">
                      <label htmlFor="modelType" className="form-label">
                        Model Type
                      </label>
                      <Controller
                        control={control}
                        name="modelType"
                        {...register("modelType")}
                        // rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={onChange}
                            inputRef={ref}
                            styles={customStyles}
                            options={modalTypeList}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors.modelType?.value?.message}
                      </p>
                    </div>
                  </div>
                  <div className="btn-area d-flex justify-content-end ">
                    <input type="submit" value="Next" />
                  </div>
                </form>
              </div>
              {/* <Link onClick={(e) => handleNext()}>Next</Link>  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCarDetail;
