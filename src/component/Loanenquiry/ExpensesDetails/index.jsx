import React from "react";
import { backpage, nextpage } from "../../../redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBoat from "../MessageBoat";
import { useForm, Controller } from "react-hook-form";
import { createNewExpensesDetails, updateNewExpensesDetails } from "./API";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ToastMessage from "../../common/ToastMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import ExpenseValidation from "./validation";

const Expenses = ({ Authentication }) => {
  const [insertExpenses, setInsertExpenses] = useState(false);
  const [expensesListData, setExpensesListData] = useState({
    motorvehicalRunningCost: 0,
    travellingCost: 0,
    utilitiesCost: 0,
    insurancesCost: 0,
    telephoneAndInternetCost: 0,
    entertainmentCost: 0,
  });
  const history = useHistory();
  const state = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ExpenseValidation),
  });
  const moreDetail = watch("haveAdditionalExpenses");
  const ketty_s_message = "Do you know what car you want?";
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(backpage());
  }
  const onSubmit = (data) => {
    console.log("Hello", data);
    let expensesDetails = {
      motorvehicalRunningCost: data?.motorvehicalRunningCost,
      travellingCost: data?.travellingCost,
      utilitiesCost: data?.utilitiesCost,
      insurancesCost: data?.insurancesCost,
      telephoneAndInternetCost: data?.telephoneAndInternetCost,
      entertainmentCost: data?.entertainmentCost,
      loan_id: state?.loanDetail?.loan_id,
    };
    if (insertExpenses) {
      createNewExpensesDetails(expensesDetails, Authentication).then((data) => {
        console.log("PEomise return", data);
        if (data.success) {
          // <ToastMessage message="Update Successfully" type="success" />;
          history.push("/dashboard");
        }
      });
    } else {
      console.log("i will ready to update");
      updateNewExpensesDetails(expensesDetails, Authentication).then((data) => {
        if (data.success) {
          // <ToastMessage message="Update Successfully" type="success" />;
          history.push("/dashboard");
        }
      });
    }
  };
  useEffect(() => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_DOMAIN_NAME}/latestExpenseList/${state?.loanDetail?.loan_id}`,
          {
            headers: { token: `Bearer ${Authentication.token}` },
          }
        )
        .then((data) => {
          if (data.data.success === true && data.data.data === null) {
            setInsertExpenses(true);
          } else {
            setExpensesListData(data.data.data);
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
    console.log(expensesListData);
    reset({
      // motorvehicalRunningCost: { value: userDetail.prefix, label: userDetail.prefix },
      motorvehicalRunningCost: expensesListData?.motorvehicalRunningCost,
      travellingCost: expensesListData?.travellingCost,
      utilitiesCost: expensesListData?.utilitiesCost,
      insurancesCost: expensesListData?.insurancesCost,
      telephoneAndInternetCost: expensesListData?.telephoneAndInternetCost,
      entertainmentCost: expensesListData?.entertainmentCost,
    });
  }, [expensesListData]);
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper">
            <div className="row">
              <Link to="/leadRequest/income-details">Back</Link>
            </div>

            <MessageBoat msg={ketty_s_message} />
            <div className="row">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10 mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="h-100 form">
                  <div className="field-area">
                    <div class="mb-4">
                      <label
                        htmlFor="motorvehicalRunningCost"
                        class="form-label"
                      >
                        Motor vehical running cost
                      </label>
                      <input
                        type="number"
                        name="motorvehicalRunningCost"
                        {...register("motorvehicalRunningCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.motorvehicalRunningCost?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="travellingCost" class="form-label">
                        Travelling cost
                      </label>
                      <input
                        type="number"
                        name="travellingCost"
                        {...register("travellingCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.travellingCost?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="utilitiesCost" class="form-label">
                        Utilities cost
                      </label>
                      <input
                        type="number"
                        name="utilitiesCost"
                        {...register("utilitiesCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.utilitiesCost?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="insurancesCost" class="form-label">
                        Insurances cost
                      </label>
                      <input
                        type="number"
                        name="insurancesCost"
                        {...register("insurancesCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.insurancesCost?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label
                        htmlFor="telephoneAndInternetCost"
                        class="form-label"
                      >
                        Telephone and internet cost
                      </label>
                      <input
                        type="number"
                        name="telephoneAndInternetCost"
                        {...register("telephoneAndInternetCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.telephoneAndInternetCost?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="entertainmentCost" class="form-label">
                        Entertainment cost
                      </label>
                      <input
                        type="number"
                        name="entertainmentCost"
                        {...register("entertainmentCost")}
                        className="form-control"
                      />
                      <p className="d-inline errormsg">
                        {errors?.entertainmentCost?.message}
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
    </>
  );

  {
    /* hello */
  }
  {
    /* <Link onClick={(e) => handleNext()}>Next</Link> */
  }
  {
    /* <Link  onClick={(e) => handleBack()}>
        Back
      </Link>
      <Link  onClick={(e) => handleNext()}>
        Next
      </Link>

      {console.log(pageNumber)} */
  }
};

export default Expenses;
