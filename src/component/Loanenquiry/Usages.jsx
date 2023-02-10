import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backpage, nextpage } from "../../redux/Actions/Actions";
import MessageBoat from "./MessageBoat";

const Usages = () => {
  const dispatch = useDispatch();
  const ketty_s_message = "What will be the primary use of the vehicle?";

  function handleBack() {
    dispatch(backpage());
  }
  function handleNext() {
    dispatch(nextpage());
  }
  return (
    <>
      <Link to="/leadRequest">Back</Link>
      <MessageBoat msg={ketty_s_message} />
      <div className="row">
        <div className="col-0 col-sm-2"></div>
        <div className="col-12 col-sm-10 mt-5">
          <form className="h-100 form">
            <div className="field-area">
              <div class="mb-4">
                <label htmlFor="" class="form-label">
                  <span className="fw-bold h6">Usage</span>
                </label>

                <div class="selecotr-item">
                  <label class="selector-item_label">
                    <input
                      type="radio"
                      value="personal use"
                      name="usage"
                      class="selector-item_radio"
                    />
                    Personal use
                  </label>
                </div>
                <div class="selecotr-item">
                  <label class="selector-item_label">
                    <input
                      type="radio"
                      value="Business use"
                      name="usage"
                      class="selector-item_radio"
                    />
                    Business use
                  </label>
                </div>
              </div>
            </div>
            <div className="btn-area d-flex justify-content-end ">
              <Link onClick={(e) => handleNext()}>Next</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Usages;
