import axios from "axios";

function getMyAllInProgressLoanRequeast(Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/getMyAllInProgressLoanRequest`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => resolve(data.data))
      .catch((e) => console.log(e.message));
  });
}
export { getMyAllInProgressLoanRequeast };
