import axios from "axios";
import { setloanId } from "../../../redux/Actions/Actions";

async function generateNewLead(loanEnquiry, Authentication, dispatch) {
  axios
    .post(`${process.env.REACT_APP_DOMAIN_NAME}/requestLoan`, loanEnquiry, {
      headers: { token: `Bearer ${Authentication}` },
    })
    .then((data) => {
      dispatch(setloanId(data.data.data.loan_id));
    })
    .catch((e) => console.log("unsuccess"));
}

export { generateNewLead };
