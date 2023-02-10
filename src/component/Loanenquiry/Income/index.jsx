import React, { useEffect, useState } from "react";
import { backpage, nextpage } from "../../../redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import MessageBoat from "../MessageBoat";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import incomeValidation from "./validation";

import { createNewIncomeDetails, updateNewIncomeDetails } from "./API";
const Income = ({ Authentication }) => {
  const history = useHistory();
  const [insertIncome, setInsertIncome] = useState(false);
  const [incomeListData, setIncomeListData] = useState({
    rentalIncomePerMonth: 0,
    investmentIncome: 0,
    salarySacrificePerMonth: 0,
    centerlinkBenifit: 0,
    forignIncomePerMonth: 0,
  });

  const state = useSelector((state) => state);
  const isdirectLogin = useSelector((state) => state.Auth.directLogin);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(incomeValidation),
  });
  const moreDetail = watch("hasAdditionalIncome");
  const ketty_s_message = "Do you know what car you want?";
  const dispatch = useDispatch();

  function handleNext() {}
  const onSubmit = (data) => {
    console.log(data);
    let incomeDetails = {
      hasAdditionalIncome: data?.hasAdditionalIncome,
      rentalIncomePerMonth: data?.rentalIncomePerMonth,
      investmentIncome: data?.investmentIncome,
      salarySacrificePerMonth: data?.salarySacrificePerMonth,
      centerlinkBenifit: data?.centerlinkBenifit,
      forignIncomePerMonth: data?.forignIncomePerMonth,
      loan_id: state?.loanDetail?.loan_id,
    };
    if (insertIncome) {
      createNewIncomeDetails(incomeDetails, Authentication).then((data) => {
        if (data.success) {
          // <ToastMessage message="Update Successfully" type="success" />;
          if (isdirectLogin) {
            history.push("/dashboard");
          } else {
            history.push("/leadRequest/expenses-details");
          }
        }
      });
    } else {
      updateNewIncomeDetails(incomeDetails, Authentication).then((data) => {
        if (data.success) {
          if (isdirectLogin) {
            history.push("/dashboard");
          }
          // <ToastMessage message="Update Successfully" type="success" />;
          history.push("/leadRequest/expenses-details");
        }
      });
    }
  };
  useEffect(() => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_DOMAIN_NAME}/latestIncomeList/${state?.loanDetail?.loan_id}`,
          {
            headers: { token: `Bearer ${Authentication.token}` },
          }
        )
        .then((data) => {
          if (data.data.success === true && data.data.data === null) {
            setInsertIncome(true);
          } else {
            setIncomeListData(data.data.data);
          }
          // if (data.data.Data.) {
          //   console.log("Hello");
          // }
        })
        .catch((e) => console.log(e.message));
    } catch (e) {
      return e.response.data;
    }
  }, []);
  useEffect(() => {
    console.log("I will reset");
    // console.log(expensesListData);
    reset({
      // motorvehicalRunningCost: { value: userDetail.prefix, label: userDetail.prefix },
      hasAdditionalIncome: incomeListData?.hasAdditionalIncome,
      rentalIncomePerMonth: incomeListData?.rentalIncomePerMonth,
      investmentIncome: incomeListData?.investmentIncome,
      salarySacrificePerMonth: incomeListData?.salarySacrificePerMonth,
      centerlinkBenifit: incomeListData?.centerlinkBenifit,
      forignIncomePerMonth: incomeListData?.forignIncomePerMonth,
    });
  }, [incomeListData]);
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper">
            <div className="row">
              <Link to="/leadRequest/user-driving-licence-detail">Back</Link>
            </div>

            <MessageBoat msg={ketty_s_message} />
            <div className="row">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10 mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="h-100 form">
                  <div className="field-area">
                    <div class="mb-4">
                      <label htmlFor="purchasePrice" class="form-label">
                        <span className="fw-bold">
                          Do You Have Additional income
                        </span>
                      </label>

                      <div class="selecotr-item">
                        <label class="selector-item_label">
                          <input
                            type="radio"
                            value="Yes"
                            name="hasAdditionalIncome"
                            {...register("hasAdditionalIncome")}
                            class="selector-item_radio"
                          />
                          Yes
                        </label>
                      </div>
                      <div class="selecotr-item">
                        <label class="selector-item_label">
                          <input
                            type="radio"
                            value="No"
                            name="hasAdditionalIncome"
                            {...register("hasAdditionalIncome")}
                            class="selector-item_radio"
                          />
                          No
                        </label>
                      </div>
                      <p className="d-inline errormsg">
                        {errors?.hasAdditionalIncome?.message}
                      </p>
                      {moreDetail === "Yes" && (
                        <>
                          <div class="mb-4">
                            <label
                              htmlFor="rentalIncomePerMonth"
                              class="form-label"
                            >
                              Rental income per Month (after tax)
                            </label>
                            <input
                              type="number"
                              name="rentalIncomePerMonth"
                              {...register("rentalIncomePerMonth")}
                              className="form-control"
                            />
                            <p className="d-inline errormsg">
                              {errors?.rentalIncomePerMonth?.message}
                            </p>
                          </div>
                          <div class="mb-4">
                            <label
                              htmlFor="investmentIncome"
                              class="form-label"
                            >
                              Investment income per Month (after tax)
                            </label>
                            <input
                              type="number"
                              name="investmentIncome"
                              {...register("investmentIncome")}
                              className="form-control"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              htmlFor="salarySacrificePerMonth"
                              class="form-label"
                            >
                              Salary sacrifies per month (after tax)
                            </label>
                            <input
                              type="number"
                              name="salarySacrificePerMonth"
                              {...register("salarySacrificePerMonth")}
                              className="form-control"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              htmlFor="centerlinkBenifit"
                              class="form-label"
                            >
                              Centerlink benifit per month (after tax)
                            </label>
                            <input
                              type="number"
                              name="centerlinkBenifit"
                              {...register("centerlinkBenifit")}
                              className="form-control"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              htmlFor="forignIncomePerMonth"
                              class="form-label"
                            >
                              Foreign income per month (after tax)
                            </label>
                            <input
                              type="number"
                              name="forignIncomePerMonth"
                              {...register("forignIncomePerMonth")}
                              className="form-control"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="btn-area d-flex justify-content-end ">
                    <input
                      type="submit"
                      value="Next"
                      onClick={(e) => handleNext()}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
