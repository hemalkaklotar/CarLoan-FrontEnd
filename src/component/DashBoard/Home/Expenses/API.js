import axios from "axios";
async function getLatestExpensesDetails(loan_id, Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_DOMAIN_NAME}/latestExpenseList/${loan_id}`,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => resolve(data.data))
      .catch((e) => console.log(e.message));
  });
}
export { getLatestExpensesDetails };
