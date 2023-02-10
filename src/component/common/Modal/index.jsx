import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Model = ({
  show,
  setShow,
  singleAgent,
  LoanRequestList,
  Authentication,
}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = (mesaage) => {
    toast.success(mesaage);
  };
  const notifyFailure = (mesaage) => {
    toast.error(mesaage);
  };
  function AssignLoan() {
    console.log("Hello");
    setShow(true);
    const AssignLoanUpdated = {
      loanIdList: LoanRequestList,
      agentid: singleAgent.user_id,
    };
    console.log("AssignLoanUpdated", AssignLoanUpdated);
    axios
      .put(
        `${process.env.REACT_APP_DOMAIN_NAME}/admin/assignLoan`,
        AssignLoanUpdated,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        if (data.data.success) {
          notify(data.data.data);
        } else {
          notifyFailure(data.data.data);
        }
      })
      .catch((e) => console.log(e.message));
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <ToastContainer />
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <span className="text-danger">Assign Loan</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Are You sure to Assign Loan to{" "}
            <span style={{ color: "var(--color-primary)" }}>
              {singleAgent.firstName} {singleAgent.lastName}{" "}
            </span>
            !!
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => AssignLoan()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Model;
