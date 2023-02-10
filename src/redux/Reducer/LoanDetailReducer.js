import { setLoanDetail, setOnlyLoanId } from "../Constraint/contstraint";

const initialstate = {
  purchasePrice: "",
  deposite: "",
  term: "",
  balloon: "",
  loan_id: null,
};

const LoanDetailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setLoanDetail:
      return {
        ...state,
        purchasePrice: action.payload.purchasePrice,
        deposite: action.payload.deposit,
        term: action.payload.term.value,
        balloon: action.payload.balloon,
      };
    case setOnlyLoanId:
      return {
        ...state,
        loan_id: action.payload,
      };

    default:
      return state;
  }
};

export default LoanDetailReducer;
