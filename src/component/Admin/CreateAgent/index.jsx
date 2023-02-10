import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newAgent from "./validation";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import createNewAgent from "./API";
const CreateAgent = ({ Authentication }) => {
  const [showpasword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(newAgent) });
  const notify = (mesaage) => {
    toast(mesaage);
  };
  const onSubmit = (data) => {
    createNewAgent(data, Authentication).then((data) => {
      notify(data.message);
    });
  };
  return (
    <>
      <div className="form-wrapper">
        <ToastContainer />
        <h1 style={{ color: "var(--color-primary)" }} className="mb-4">
          Create New Agent
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              {...register("firstName")}
            />
            <p className="d-inline errormsg">{errors?.firstName?.message}</p>
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              {...register("lastName")}
            />
            <p className="d-inline errormsg">{errors?.lastName?.message}</p>
          </div>
          <div className="form-group mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Mobile number"
              {...register("mobileNumber")}
            />
            <p className="d-inline errormsg">{errors?.mobileNumber?.message}</p>
          </div>
          {/* <div className="form-group  position-relative">
            <input
              type={`${!showpasword ? "password" : "text"}`}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="create Password"
              {...register("password")}
            />
            <span
              style={{
                position: "absolute",
                top: "14%",
                right: "25px",
                color: "var(--color-primary)",
              }}
              onClick={() => setShowPassword(!showpasword)}
            >
              {showpasword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
            <p className="d-inline errormsg">{errors?.password?.message}</p>
          </div> */}
          <div className="btn-area d-flex justify-content-end mt-5">
            <input type="submit" value="Next" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAgent;
