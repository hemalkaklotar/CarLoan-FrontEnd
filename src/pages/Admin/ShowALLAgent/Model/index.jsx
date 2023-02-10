import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Table from "../../../../component/Admin/Dashboard/Table";
const Model = ({ show, setShow, AgentLoanList }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          <span style={{ color: "var(--color-primary)" }}>Assign Loan</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table rowData={AgentLoanList} />
      </Modal.Body>
    </Modal>
  );
};

export default Model;
