import React from "react";
const Pagination = ({
  setPageNumber,
  pageNumber,
  setRecordsPerPage,
  recordsPerPage,
  dataLength,
}) => {
  const pages = Number(Math.ceil(dataLength / recordsPerPage));
  // console.log(typeof pages, dataLength, recordsPerPage);
  return (
    <div className="w-100 d-flex justify-content-between align-items-end">
      <div>
        {[...Array(pages + 1).keys()].slice(1).map((page) => {
          return (
            <button
              style={{ backgroundColor: "var(--color-light-500)" }}
              className={`${
                page == pageNumber ? "bg-1 text-white" : "text-muted"
              } btn mx-1`}
              onClick={() => {
                setPageNumber(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div className="d-flex gap-2 flex-column justify-content-center align-items-end">
        <label htmlFor="">Numbers Of Record</label>
        <select
          onChange={(e) => {
            setRecordsPerPage(e.target.value);
            setPageNumber(1);
          }}
        >
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
