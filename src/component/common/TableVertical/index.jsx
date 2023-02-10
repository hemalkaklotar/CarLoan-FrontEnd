import React from "react";

const TableVertical = ({ rowData }) => {
  return (
    <div>
      <div>
        <h5
          style={{ color: "var(--color-primary)" }}
          className="py-3 border-bottom text-center"
        >
          Basic User Information
        </h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Name</th>
              <th>State</th>
              <th>Mobile Number</th>
              <th>Monthly Income</th>
            </tr>
            <tr className="">
              <td>{rowData?.UserDetail?.firstName}</td>
              <td>{rowData?.UserDetail?.lastName}</td>
              <td>{rowData?.UserDetail?.emailId}</td>
              <td>{rowData?.UserDetail?.state}</td>
              <td>{rowData?.UserDetail?.mobileNumber}</td>

              <td>{rowData?.monthlyIncome}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h5
          style={{ color: "var(--color-primary)" }}
          className="py-3 border-bottom text-center"
        >
          Basic Loan Information
        </h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Purchase Price</th>
              <th>Deposite</th>
              <th>Balloon</th>
              <th>Term</th>
            </tr>
            <tr>
              <td>{rowData?.purchasePrice}</td>
              <td>{rowData?.deposite}</td>
              <td>{rowData?.balloon}</td>
              <td>{rowData?.term}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h5
          style={{ color: "var(--color-primary)" }}
          className="py-3 border-bottom text-center"
        >
          Basic Car Information
        </h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Model Name</th>
              <th>Model Type</th>
              <th>Model Year</th>
            </tr>
            <tr>
              <td>{rowData?.modelName}</td>
              <td>{rowData?.modelType}</td>
              <td>{rowData?.modelYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h5
          style={{ color: "var(--color-primary)" }}
          className="py-3 border-bottom text-center"
        >
          Expenses Details
        </h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Entertainment Cost</th>
              <th>Insurances Cost</th>
              <th>Motor Vehical Running Cost</th>
              <th>Telephone And Internet Cost</th>
              <th>Travelling Cost</th>
              <th>Utilities Cost</th>
            </tr>
            <tr>
              <td>{rowData?.Expense?.entertainmentCost}</td>
              <td>{rowData?.Expense?.insurancesCost}</td>
              <td>{rowData?.Expense?.motorvehicalRunningCost}</td>
              <td>{rowData?.Expense?.telephoneAndInternetCost}</td>
              <td>{rowData?.Expense?.travellingCost}</td>
              <td>{rowData?.Expense?.utilitiesCost}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h5
          style={{ color: "var(--color-primary)" }}
          className="py-3 border-bottom text-center"
        >
          Income Details
        </h5>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Investment Investment</th>
              <th>Rental Investment</th>
              <th>Salary Investment</th>
              <th>Forign Investment</th>
              <th>Centerlink Investment</th>
            </tr>
            <tr>
              <td>{rowData?.Income?.investmentIncome}</td>
              <td>{rowData?.Income?.rentalIncomePerMonth}</td>
              <td>{rowData?.Income?.salarySacrificePerMonth}</td>
              <td>{rowData?.Income?.forignIncomePerMonth}</td>
              <td>{rowData?.Income?.centerlinkBenifit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableVertical;
