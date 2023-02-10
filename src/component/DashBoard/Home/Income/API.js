import axios from "axios";
async function getLatestIncmoneDetails(loan_id, Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/latestIncomeList/${loan_id}`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        console.log("Income ", data);
        resolve(data.data);
      })
      .catch((e) => console.log(e.message));
  });
}
export { getLatestIncmoneDetails };
