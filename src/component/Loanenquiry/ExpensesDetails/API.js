import axios from "axios";
async function createNewExpensesDetails(expensesDetails, Authentication) {
  
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_DOMAIN_NAME}/expensesDetail`,
        expensesDetails,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => resolve(data.data))
      .catch((e) => console.log(e.message));
  });
}
async function updateNewExpensesDetails(expensesDetails, Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${process.env.REACT_APP_DOMAIN_NAME}/expensesDetail/${expensesDetails.loan_id}`,
        expensesDetails,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        resolve(data.data);
        // console.log("xx", data.data);
        // return data.data.success;
      })
      .catch((e) => console.log(e.message));
  });
}

export { createNewExpensesDetails, updateNewExpensesDetails };
