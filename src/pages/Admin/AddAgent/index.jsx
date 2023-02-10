import React from "react";
import CreateAgent from "../../../component/Admin/CreateAgent";
import { useSelector, useDispatch } from "react-redux";
const AddAgent = () => {
  const Authentication = useSelector((state) => state.Auth);
  return (
    <div className="container">
      <div className="mt-5 pt-5 col-7 mx-auto">
        <CreateAgent Authentication={Authentication} />
      </div>
    </div>
  );
};

export default AddAgent;
