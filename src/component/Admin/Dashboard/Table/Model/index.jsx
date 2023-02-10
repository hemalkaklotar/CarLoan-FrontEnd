import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

const Model = ({show,setShow}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
      {/* <ToastContainer /> */}
      <Modal.Header closeButton>
        <Modal.Title>
          {" "}
          <span className="text-danger">Assign Loan</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5></h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={() => AssignLoan()}>
          Yes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default Model;
