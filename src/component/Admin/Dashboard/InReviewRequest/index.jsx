import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../../../common/Pagination";
import Table from "../Table";

const InReviewRequest = ({
  Authentication,
  searchTerm,
  setSearchTerm,
  LoanRequestList,
  setLoanRequestList,
  dropdownvisible,
  setDropdownVisible,
  dataUpdated,
}) => {
  const [rowData, setRowData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("2");
  useEffect(() => {
    const data = {
      recordsPerPage: recordsPerPage,
      pageNumber: pageNumber,
      loan_status: "InReview",
    };
    if (Authentication.isUserIs === "Agent") {
      axios
        .post(
          `${process.env.REACT_APP_DOMAIN_NAME}/agent/showMyCategoriesRequest`,
          data,
          {
            headers: { token: `Bearer ${Authentication.token}` },
          }
        )
        .then((data) => {
          if (data.data.success === true) {
            console.log(data.data);
            setRowData(data.data.data);
            // console.log("data.data.data.length", data.data.length);
            // setDataLength(data.data.length);
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      axios
        .post(
          `${process.env.REACT_APP_DOMAIN_NAME}/admin/showCategoriesRequest`,
          data,
          {
            headers: { token: `Bearer ${Authentication.token}` },
          }
        )
        .then((data) => {
          if (data.data.success === true) {
            setRowData(data.data.data);
            setDataLength(data.data.length);
          }
        })
        .catch((e) => console.log(e.message));
    }
  }, [pageNumber, recordsPerPage, dataUpdated]);
  return (
    <div>
      <Table
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        rowData={rowData}
        LoanRequestList={LoanRequestList}
        setLoanRequestList={setLoanRequestList}
        dropdownvisible={dropdownvisible}
        setDropdownVisible={setDropdownVisible}
      />
      <Pagination
        dataLength={dataLength}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </div>
  );
};

export default InReviewRequest;
