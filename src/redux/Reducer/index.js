import { combineReducers } from "redux";
import LoanDetailReducer from "./LoanDetailReducer";
import AuthenaticationReducer from "./AuthenaticationReducer";
import WorkDetailReducer from "./WorkDetailReducer";
import CarDetailReducer from "./CarDetailReducer";
import LicenceInfoReducer from "./LicenceInfoReducer";

import pageMovement from "./pageMoveReducer";

const reducer = combineReducers({
  cardetail: CarDetailReducer,
  Auth: AuthenaticationReducer,
  loanDetail: LoanDetailReducer,
  workdetail: WorkDetailReducer,
  licencedetail: LicenceInfoReducer,
  pageMovement: pageMovement,
});

export default reducer;
