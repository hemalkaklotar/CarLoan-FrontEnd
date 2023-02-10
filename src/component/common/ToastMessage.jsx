import React from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = ({ message, type }) => {
  switch (type) {
    case "success":
      console.log("qqqqqqqqqqqqqqq");
      return toast.success(
        <div>
          <p>{message}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <p>{message}</p>
        </div>
      );
  }
};

export default ToastMessage;
