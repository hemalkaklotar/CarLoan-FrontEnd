import React, { useEffect, useState } from "react";
import Loading from "../../../common/Loading";
import Pagination from "../../../common/Pagination";
import Card from "../Card";
import { getMyAllInReviewLoanRequeast } from "./API";

const InReview = ({ Authentication }) => {
  const [Loader, setLoader] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(2);
  const [dataLength, setDataLength] = useState(0);
  const [requestedLoanList, setRequestedLoanList] = useState([]);
  useEffect(() => {
    setLoader(true);
    getMyAllInReviewLoanRequeast(Authentication).then((data) => {
      if (data.success) {
        setRequestedLoanList(data.data);
        setRequestedLoanList(data.data);
        setDataLength(data.length);
        setLoader(false);
      }
    });
  }, [pageNumber, recordsPerPage]);
  return (
    <>
      <div className="position-relative">
        {Loader ? (
          <Loading />
        ) : (
          <>
            <div>
              {requestedLoanList.map((cuurentList) => {
                return <Card cuurentObj={cuurentList} />;
              })}
            </div>
            <Pagination
              setPageNumber={setPageNumber}
              setRecordsPerPage={setRecordsPerPage}
              pageNumber={pageNumber}
              recordsPerPage={recordsPerPage}
              dataLength={dataLength}
            />
          </>
        )}
      </div>
    </>
  );
};

export default InReview;
