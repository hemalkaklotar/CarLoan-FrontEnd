import React from "react";

const Card = ({ card, index }) => {
  return (
    <div className={`card bg-${index + 1} py-4 my-4 text-white`}>
      <div className="card-body d-flex justify-content-between gap-3">
        <div className="col-md-3">
          <div className="circle">{card.icon}</div>
        </div>
        <div className="col-md-9">
          <div className="flex-1">
            <h5 className="fw-bold">{card.cardTitle}</h5>
            <span className="fw-bold fs-5 text-light text-center">
              {" "}
              34,545{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
