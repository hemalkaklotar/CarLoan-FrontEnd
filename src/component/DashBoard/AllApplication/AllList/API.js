import axios from "axios";

function getMyAllLoanRequeast(recordsPerPage, pageNumber, Authentication) {
  const data = { recordsPerPage: recordsPerPage, pageNumber: pageNumber };
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_DOMAIN_NAME}/getMyAllLoanRequest`, data, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => resolve(data.data))
      .catch((e) => console.log(e.message));
  });
}
export { getMyAllLoanRequeast };
