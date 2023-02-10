import React from "react";
import { backpage, nextpage } from "../../redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBoat from "./MessageBoat";
import { useForm,Controller } from "react-hook-form";

const Cardetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const moreDetail = watch("haveCarInMind");
  const ketty_s_message = "Do you know what car you want?";
  const dispatch = useDispatch();
  const pageNumber = useSelector((page) => page.pageMovement);
  function handleBack() {
    dispatch(backpage());
  }
  function handleNext() {}
  const onSubmit = (data) => {
    // dispatch(nextpage());
  };
  return (
    <>
      <MessageBoat msg={ketty_s_message} />
      <div className="row">
        <div className="col-0 col-sm-2"></div>
        <div className="col-12 col-sm-10 mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="h-100 form">
            <div className="field-area">
              <div class="mb-4">
                <label htmlFor="purchasePrice" class="form-label">
                  <span className="fw-bold">Have a car in mind?</span>
                </label>

                <div class="selecotr-item">
                  <label class="selector-item_label">
                    <input
                      type="radio"
                      value="yes"
                      name="haveCarInMind"
                      {...register("haveCarInMind")}
                      class="selector-item_radio"
                    />
                    Yes
                  </label>
                </div>
                <div class="selecotr-item">
                  <label class="selector-item_label">
                    <input
                      type="radio"
                      value="no"
                      name="haveCarInMind"
                      {...register("haveCarInMind")}
                      class="selector-item_radio"
                    />
                    still deciding
                  </label>
                </div>
                {moreDetail === "no" && (
                  <div class="mb-4">
                    <label htmlFor="term" class="form-label">
                      How quickly do you want to purchase?
                    </label>
                    <select
                      className="form-select ms-2 select-option form-select-lg mb-3"
                      name="term"
                      {...register("whenYouWantToPurchase", { required: true })}
                    >
                      <option value="1">ASAP</option>
                      <option value="2">Within 1 month</option>
                      <option value="3">No hurry</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
            <div className="btn-area d-flex justify-content-end ">
              <input type="submit" value="Next" onClick={(e) => handleNext()} />
            </div>
          </form>
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

export default Cardetails;
