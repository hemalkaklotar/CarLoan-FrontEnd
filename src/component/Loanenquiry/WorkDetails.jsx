import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { backpage, nextpage, workDetail } from "../../redux/Actions/Actions";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "./css/customcss.js";
import MessageBoat from "./MessageBoat";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const WorkDetails = () => {
  const personalDetailsValidation = yup.object().shape({
    monthlyIncome: yup
      .number()
      .integer()
      .min(0)
      .required("number should be required")
      .typeError("Monthly income cant be empty"),
    workDetail: yup
      .object()
      .shape({
        value: yup.string().required("Work details cant be Empty"),
        label: yup.string().required(),
      })
      .required(),
  });
  const state = useSelector((state) => state.workdetail);
  const auth = useSelector((state) => state.Auth);

  const history = useHistory();
  const [workDetailField, setWorkDetailField] = useState({});
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
  });

  const ketty_s_message = "Please tell us What car you want ?";
  const dispatch = useDispatch();
  //   function handleNext() {
  //     dispatch(nextpage());
  //   }
  const onSubmit = (data) => {
    const workdetails = {
      monthlyIncome: data.monthlyIncome,
      workDetail: data.workDetail.label,
    };
    Promise.resolve(dispatch(workDetail(workdetails))).then(() => {
      if (auth.isAuthenticated === true && auth.token.length > 0) {
        history.push("/leadRequest/resume-my-journey");
      } else {
        history.push("/leadRequest/log-in");
      }
    });
  };
  let employeementStatus = [
    { value: "Employee", label: "i am an employee" },
    { value: "unEmployee", label: "i am an unemployed" },
    { value: "Business Owner", label: "i am a business owner/ i have an ABN" },
  ];
  useEffect(() => {
    setWorkDetailField(state);
    reset({
      workDetail: {
        value: workDetailField?.workDetail,
        label: workDetailField?.workDetail,
      },
      monthlyIncome: workDetailField.monthlyIncome,
    });
  }, [workDetailField]);
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper">
            <div className="row">
              <Link to="/leadRequest/choose-car">Back</Link>
            </div>
            <MessageBoat msg={ketty_s_message} />
            <div className="row">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10 mt-5">
                <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field-area">
                    <div className="mb-4 selct-box">
                      <label htmlFor="workDetail" className="form-label">
                        status
                      </label>
                      <Controller
                        control={control}
                        name="workDetail"
                        {...register("workDetail")}
                        rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={onChange}
                            inputRef={ref}
                            styles={customStyles}
                            options={employeementStatus}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors.workDetail?.value?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="monthlyIncome" class="form-label">
                        Monthaly income (after tax)
                      </label>
                      <input
                        type="number"
                        name="monthlyIncome"
                        className="form-control"
                        {...register("monthlyIncome")}
                        onWheel={(e) => e.target.blur()}
                      />
                      <p className="d-inline errormsg">
                        {errors?.monthlyIncome?.message}
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

export default WorkDetails;
