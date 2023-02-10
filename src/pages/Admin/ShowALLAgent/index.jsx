import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../../../component/common/Pagination";
import { FiMaximize2 } from "react-icons/fi";
import Model from "./Model";

const ShowALLAgent = ({ Authentication }) => {
  const [show, setShow] = useState(false);
  const [AgentList, setAgentList] = useState([]);
  const [AgentLoanList, setAgentLoanList] = useState([]);

  const [dataLength, setDataLength] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("2");
  useEffect(() => {
    const data = {
      recordsPerPage: recordsPerPage,
      pageNumber: pageNumber,
    };
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/admin/getAllAgent`, data, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        if (data.data.success) {
          setAgentList(data.data.data);
          setDataLength(data.data.length);
        }
      })
      .catch((e) => console.log(e.message));
  }, [pageNumber, recordsPerPage]);
  function getAgentLoanList(agentId) {
    setShow(true);
    axios
      .get(
        `${process.env.REACT_APP_DOMAIN_NAME}/admin/getAgentLoanList/${agentId}`,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        if (data.data.success) {
          setAgentLoanList(data.data.data);
        }
      })
      .catch((e) => console.log(e.message));
  }
  return (
    <>
      <div style={{ height: "70vh", maxHeight: "890px" }}>
        <h3 className="" style={{ color: "var(--color-primary)" }}>
          Agent List
        </h3>
        <table className="table table-striped table-border mt-4">
          <thead
            className="un-scroll top-stop"
            style={{ background: "#FFF", zIndex: "10" }}
          >
            <tr>
              {/* <th style={{ minWidth: "85px" }}>#</th> */}
              <th style={{ minWidth: "85px" }}>First Name</th>
              <th style={{ minWidth: "85px" }}>Last Name</th>
              <th style={{ minWidth: "85px" }}>Mobile Number</th>
              <th style={{ maxWidth: "60px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {AgentList.length < 0 ? (
              <tr className="text-center h3">
                <div className="py-3"> No Agent Added</div>
              </tr>
            ) : (
              AgentList.map((agent, key) => {
                return (
                  <tr>
                    {/* <td>{key + 1}</td> */}
                    <td>{agent.firstName}</td>
                    <td>{agent.lastName}</td>
                    <td>{agent.mobileNumber}</td>
                    <td
                      className="ps-4"
                      style={{ fontWeight: "900", fontSize: "16px" }}
                    >
                      <button
                        className="btn"
                        onClick={() => getAgentLoanList(agent.user_id)}
                      >
                        <FiMaximize2 />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <Model show={show} setShow={setShow} AgentLoanList={AgentLoanList} />
      <Pagination
        dataLength={dataLength}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </>
  );
};

export default ShowALLAgent;
