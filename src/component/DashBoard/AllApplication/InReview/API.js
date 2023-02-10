import axios from "axios";

function getMyAllInReviewLoanRequeast(Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/getMyAllInReviewLoanRequest`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => resolve(data.data))
      .catch((e) => console.log(e.message));
  });
}
export { getMyAllInReviewLoanRequeast };
