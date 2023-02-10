import React, { useEffect, useState } from "react";
import { getMyAllLoanRequeast } from "./API";
import Pagination from "../../../common/Pagination";
import Card from "../Card";
import Loading from "../../../common/Loading";
const AllList = ({ Authentication }) => {
  const [Loader, setLoader] = useState(false);
  const [requestedLoanList, setRequestedLoanList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(2);
  const [dataLength, setDataLength] = useState(0);
  useEffect(() => {
    setLoader(true);
    getMyAllLoanRequeast(recordsPerPage, pageNumber, Authentication).then(
      (data) => {
        if (data.success) {
          setRequestedLoanList(data.data);
          setDataLength(data.length);
          setLoader(false);
        }
      }
    );
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
export default AllList;
