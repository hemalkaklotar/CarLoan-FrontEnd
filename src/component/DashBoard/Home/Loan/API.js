import axios from "axios";
async function getmyLatestLoan(setLoanList, Authentication) {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_DOMAIN_NAME}/getMyLastestRequest`,
      {
        headers: { token: `Bearer ${Authentication.token}` },
      }
    );
    return res.data;
  } catch (e) {
    return e.response.data;
  }
}

export { getmyLatestLoan };
