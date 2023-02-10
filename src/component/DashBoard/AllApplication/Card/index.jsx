import React from "react";

const Card = ({ cuurentObj }) => {
  return (
    <div>
      <div
        className="card p-3 my-3"
        style={{
          border: "1px solid #AEAEAE",
          boxShadow: "5px  6px 8px #808080",
          cursor: "pointer",
        }}
      >
        <div className="d-flex border-bottom justify-between py-2 -bottom">
          <div className="col  d-flex  gap-2 ">
            <h6 className="fst-italic  m-0 p-0">Car :</h6>
            <span className="fst-italic  m-0 p-0">
              {cuurentObj?.companyName}
            </span>
          </div>
          <div className="col d-flex gap-2 justify-content-end -danger">
            <h6 className="fst-italic m-0 p-0">Status :</h6>
            <span className="fst-italic m-0 p-0 fw-bold">
              {cuurentObj.loan_status}
            </span>
          </div>
        </div>
        {/* center  */}

        <div className="row pt-3 border-bottom py-3">
          <div className="col-6 col-sm-6  col-md-3">
            <div className="d-flex flex-column align-items-start">
              <div>
                <h6 className="m-0 p-0">Car Name:</h6>
                <span className="text-truncate">{cuurentObj?.companyName}</span>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-end align-items-sm-end align-items-md-center">
              <div>
                <h6 className="m-0 p-0">Modal Name:</h6>
                <span className="text-truncate">{cuurentObj?.modelName}</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6  mt-2 mt-md-0 col-md-3">
            <div className="d-flex flex-column align-items-start  align-items-md-center">
              <div>
                <h6 className="m-0 p-0">Modal Type:</h6>
                <span className="text-truncate">{cuurentObj?.modelType}</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 mt-2 mt-md-0 col-md-3">
            <div className="d-flex flex-column align-items-end align-items-sm-end">
              <div>
                <h6 className="m-0 p-0">Modal Year:</h6>
                <span className="text-truncate">{cuurentObj?.modelYear}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex pt-3 pt-3 justify-between align-item-start">
          <div className="col d-flex flex-xl-row gap-lg-3  flex-column">
            <h6 className="m-0 p-0">Monthly Income:</h6>
            <span className="text-truncate">{cuurentObj?.monthlyIncome}</span>
          </div>
          <div className="col d-flex flex-xl-row justify-content-center align-items-center  gap-lg-3 flex-column">
            <h6 className="m-0 p-0">Purchase Price:</h6>
            <span className="text-truncate">{cuurentObj?.purchasePrice}</span>
          </div>
          <div className="col d-flex flex-xl-row justify-content-end align-items-end  gap-lg-3 flex-column">
            <h6 className="m-0 p-0">term:</h6>
            <span className="text-truncate">{cuurentObj?.term}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
