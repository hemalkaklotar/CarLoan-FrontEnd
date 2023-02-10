import { setWorkDetail } from "../Constraint/contstraint";

const initialstate = {
  monthlyIncome: 0,
  workDetail: "",
};

const WorkDetailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setWorkDetail:
      return {
        //  ...initialstate,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default WorkDetailReducer;
