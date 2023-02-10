import React from "react";
import ketty from "../../images/ketty.png";
import "./css/messageboat.css";
const MessageBoat = ({ msg, msg1 }) => {
  return (
    <div className="row">
      <div className="col-2">
        <div className="img-chat-boat flex-shrink-0">
          <img src={ketty} alt="" />
        </div>
      </div>
      <div className="col-10">
        <div className="msg-box-wrapper">
          <p className="ketty-name">Ketty</p>
          <p className="help-suggetion-text">{msg}</p>
          <p className="help-suggetion-text fw-bold">{msg1}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageBoat;
