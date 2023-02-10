import React, { useState } from "react";
import { useEffect } from "react";
import tableResizing from "./tableResizing";
import getAllLoanDetails from "./API";
import axios from "axios";
import Model from "./Model";
import ModelLg from "../../../common/ModelLg";
import { useSelector } from "react-redux";
const Table = ({
  rowData,
  LoanRequestList,
  setLoanRequestList,
  dropdownvisible,
  setDropdownVisible,
}) => {
  const [loanDetailModal, setLoanDetailModal] = useState(false);
  const [showlgModel, setShowLgModel] = useState(false);
  const Authentication = useSelector((state) => state.Auth);
  const [singleLoan, setSingleLoan] = useState({});
  // useEffect(() => {
  //  console.log("LoanRequestListLoanRequestList",LoanRequestList)
  // }, [LoanRequestList]);

  function handleRowClick() {
    setDropdownVisible(!dropdownvisible);
  }
  function handleCheck(loanid) {
    const checkExistance = LoanRequestList.findIndex((id) => loanid === id);
    if (checkExistance === undefined || checkExistance === -1) {
      setLoanRequestList([...LoanRequestList, loanid]);
    } else {
      LoanRequestList.splice(checkExistance, 1);
    }
  }
  function handleClick(id) {
    try {
      axios
        .get(`${process.env.REACT_APP_DOMAIN_NAME}/admin/getSingleLoan/${id}`, {
          headers: { token: `Bearer ${Authentication.token}` },
        })
        .then((data) => {
          setSingleLoan(data.data.data);
        })
        .catch((e) => console.log(e.message));
    } catch (error) {}
    setShowLgModel(true);
  }
  return (
    <div className="custom-table">
      <Model show={loanDetailModal} setShow={setLoanDetailModal} />
      <ModelLg
        show={showlgModel}
        setShow={setShowLgModel}
        singleLoan={singleLoan}
      />

      {console.log("rowData", rowData)}
      <table
        style={{ overflowX: "auto" }}
        className="table table-bordered position-relative resizable"
      >
        <thead
          className="un-scroll top-stop"
          style={{ background: "#FFF", zIndex: "10" }}
        >
          <tr>
            <td className="text-center" colSpan="3"></td>
            <th
              className="text-center"
              style={{ color: "var(--color-secondary)" }}
              colSpan="5"
            >
              Basic User Information
            </th>
            <th
              className="text-center"
              style={{ color: "var(--color-secondary)" }}
              colSpan="4"
            >
              Basic Loan Information
            </th>

            <th
              className="text-center"
              style={{ color: "var(--color-secondary)" }}
              colSpan="4"
            >
              Car Information
            </th>
            <th
              className="text-center"
              style={{ color: "var(--color-secondary)" }}
              colSpan="6"
            >
              Expenses Details
            </th>
            <th
              className="text-center"
              style={{ color: "var(--color-secondary)" }}
              colSpan="5"
            >
              Income Details
            </th>
          </tr>

          <tr>
            {dropdownvisible ? <th></th> : ""}
            <th style={{ minWidth: "85px" }}>Loan Id </th>
            <th style={{ minWidth: "135px" }}>Loan Status </th>
            <th style={{ minWidth: "135px" }}>View Details </th>

            <th style={{ minWidth: "130px" }}>Mobile Number </th>
            <th style={{ minWidth: "130px" }}>First Name</th>
            <th style={{ minWidth: "130px" }}>Last Name</th>
            <th style={{ minWidth: "130px" }}>Email ID</th>
            <th style={{ minWidth: "130px" }}>State</th>

            <th style={{ minWidth: "135px" }}>Purchase Price</th>
            <th style={{ minWidth: "135px" }}>Deposite</th>
            <th style={{ minWidth: "72px" }}>Balloon</th>
            <th style={{ minWidth: "72px" }}>Term</th>

            <th style={{ minWidth: "180px" }}>Model Name</th>
            <th style={{ minWidth: "180px" }}>model Type</th>
            <th style={{ minWidth: "180px" }}>model Year</th>
            <th style={{ minWidth: "180px" }}>Monthly Income</th>

            <th style={{ minWidth: "180px" }}>Entertainment Cost</th>
            <th style={{ minWidth: "180px" }}>Insurances Cost</th>
            <th style={{ minWidth: "225px" }}>Motor Vehical Running Cost</th>
            <th style={{ minWidth: "255px" }}>Telephone And Internet Cost</th>
            <th style={{ minWidth: "180px" }}>Travelling Cost</th>
            <th style={{ minWidth: "180px" }}>Utilities Cost</th>

            <th style={{ minWidth: "180px" }}>Investment Income</th>
            <th style={{ minWidth: "180px" }}>Rental Income </th>
            <th style={{ minWidth: "180px" }}>Salary Sacrifice</th>
            <th style={{ minWidth: "180px" }}>Forign Income</th>
            <th style={{ minWidth: "180px" }}>Centerlink Benifit</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item) => {
            return (
              <tr
                className="position-relative"
                onDoubleClick={() => handleRowClick()}
              >
                {dropdownvisible ? (
                  <td style={{ minWidth: "35px" }}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheck(item?.loan_id)}
                    />
                  </td>
                ) : (
                  ""
                )}

                <th>{item?.loan_id}</th>
                <td>{item?.loan_status}</td>
                <td className="d-flex justify-content-center align-items-start">
                  <span
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "#fff",
                      padding: "3px 12px",
                      fontSize: "12px",
                      borderRadius: "12px",
                      cursor: "Pointer",
                    }}
                    onClick={() => handleClick(item?.loan_id)}
                  >
                    {" "}
                    Loan Details{" "}
                  </span>
                </td>

                <td style={{ minWidth: "130px" }}>
                  {item?.UserDetail?.mobileNumber}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.UserDetail?.firstName}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.UserDetail?.lastName}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.UserDetail?.emailId}
                </td>
                <td style={{ minWidth: "130px" }}>{item?.UserDetail?.state}</td>

                <td style={{ minWidth: "135px" }}>{item?.purchasePrice}</td>
                <td style={{ minWidth: "135px" }}>{item?.deposite}</td>
                <td style={{ minWidth: "72px" }}>{item?.balloon}</td>
                <td style={{ minWidth: "72px" }}>{item?.term}</td>

                <td>{item?.modelName}</td>
                <td style={{ minWidth: "180px" }}>{item?.modelType}</td>
                <td style={{ minWidth: "80px" }}>{item?.modelYear}</td>
                <td style={{ minWidth: "80px" }}>{item?.monthlyIncome}</td>

                <td style={{ minWidth: "130px" }}>
                  {item?.Expense?.entertainmentCost}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.Expense?.insurancesCost}
                </td>
                <td style={{ minWidth: "170px" }}>
                  {item?.Expense?.motorvehicalRunningCost}
                </td>
                <td style={{ minWidth: "180px" }}>
                  {item?.Expense?.telephoneAndInternetCost}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.Expense?.travellingCost}
                </td>
                <td style={{ minWidth: "130px" }}>
                  {item?.Expense?.utilitiesCost}
                </td>

                <td style={{ minWidth: "190px" }}>
                  {item?.Income?.investmentIncome}
                </td>
                <td style={{ minWidth: "190px" }}>
                  {item?.Income?.rentalIncomePerMonth}
                </td>
                <td style={{ minWidth: "190px" }}>
                  {item?.Income?.salarySacrificePerMonth}
                </td>
                <td style={{ minWidth: "190px" }}>
                  {item?.Income?.forignIncomePerMonth}
                </td>
                <td style={{ minWidth: "190px" }}>
                  {item?.Income?.centerlinkBenifit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
