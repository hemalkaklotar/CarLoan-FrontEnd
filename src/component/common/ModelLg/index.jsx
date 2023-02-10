import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Table from "../../Admin/Dashboard/Table";
import TableVertical from "../TableVertical";
const ModelLg = ({ show, setShow, singleLoan }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered
    >
      <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          <span style={{ color: "var(--color-primary)" }}>Loan details</span>
        </Modal.Title>
      </Modal.Header>
      {console.log("sdasdsadad", singleLoan)}
      <Modal.Body>
        <TableVertical rowData={singleLoan} />
      </Modal.Body>
    </Modal>
  );
};

export default ModelLg;
