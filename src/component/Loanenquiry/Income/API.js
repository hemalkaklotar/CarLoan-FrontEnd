import axios from "axios";
async function createNewIncomeDetails(incomeDetails, Authentication) {
  console.log("Income Detail", incomeDetails);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_DOMAIN_NAME}/incomeDetail`,
        incomeDetails,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => resolve(data.data))
      .catch((e) => console.log("e.message"));
  });
}
async function updateNewIncomeDetails(incomeDetails, Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${process.env.REACT_APP_DOMAIN_NAME}/incomeDetail/${incomeDetails.loan_id}`,
        incomeDetails,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        resolve(data.data);
      })
      .catch((e) => console.log(e.message));
  });
}
export { createNewIncomeDetails, updateNewIncomeDetails };
