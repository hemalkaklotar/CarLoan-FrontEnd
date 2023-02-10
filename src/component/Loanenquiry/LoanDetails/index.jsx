import React from "react";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MessageBoat from "../MessageBoat";
import { nextpage, loanDetail } from "../../../redux/Actions/Actions";
import { tearmoptions } from "./API";
import { customStyles } from "../css/customcss.js";
import FormWrapper from "../FormWrapper";
import { useEffect } from "react";
import { useState } from "react";
import loandetailsValidation from "./validation";

const LoanDetails = () => {
  const history = useHistory();
  const state = useSelector((state) => state.loanDetail);
  const dispatch = useDispatch();
  const [loandetailField, setLoanDetailField] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(loandetailsValidation),
  });
  const onSubmit = (data) => {
    // navigate("loanDetails", { replace: true });
    dispatch(loanDetail(data));
    history.push("/leadRequest/choose-car");
  };
  useEffect(() => {
    setLoanDetailField(state);
    reset({
      purchasePrice: loandetailField.purchasePrice,
      deposit: loandetailField.deposite,
      balloon: loandetailField.balloon,
      term: {
        value: loandetailField?.term,
        label: loandetailField?.term,
      },
    });
  }, [loandetailField]);
  const ketty_s_message =
    "Hi I’m Kate. I'm here to help you find the best car loan options";
  const ketty_s_message2 = " Let's get started!";
  return (
    <>
      <div className="container-xxl form-main  py-5 px-3">
        <div className="d-flex justify-content-between  align-items-start">
          <div className="form-wrapper">
            <MessageBoat msg={ketty_s_message} msg1={ketty_s_message2} />
            {/* below line put blank space for aligning the data */}
            <div className="row">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10 mt-5">
                <form className="h-100 form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field-area">
                    <div class="mb-4">
                      <label htmlFor="purchasePrice" class="form-label">
                        Approximate purchase price
                      </label>
                      <input
                        type="number"
                        name="purchasePrice"
                        className="form-control"
                        {...register("purchasePrice")}
                        onWheel={(e) => e.target.blur()}
                      />
                      <p className="d-inline errormsg">
                        {errors?.purchasePrice?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="deposit" class="form-label">
                        Deposit
                      </label>
                      <input
                        type="number"
                        name="deposit"
                        {...register("deposit")}
                        className="form-control"
                        onWheel={(e) => e.target.blur()}
                      />
                      <p className="d-inline errormsg">
                        {errors?.deposit?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="term" class="form-label">
                        Term
                      </label>
                      <Controller
                        control={control}
                        name="term"
                        {...register("term")}
                        rules={{ required: true }}
                        render={({ field: { onChange, ref, value } }) => (
                          <Select
                            onChange={onChange}
                            inputRef={ref}
                            styles={customStyles}
                            options={tearmoptions}
                            value={value}
                          />
                        )}
                      />
                      <p className="d-inline errormsg">
                        {errors?.term?.value?.message}
                      </p>
                    </div>
                    <div class="mb-4">
                      <label htmlFor="balloon" class="form-label">
                        Balloon
                      </label>
                      <input
                        type="number"
                        name="balloon"
                        className="form-control"
                        {...register("balloon")}
                        onWheel={(e) => e.target.blur()}
                      />
                      <p className="d-inline errormsg">
                        {errors?.balloon?.message}
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

export default LoanDetails;
