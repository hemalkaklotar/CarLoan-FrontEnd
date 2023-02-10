import { PAGENEXT, PAGEBACK } from "../Constraint/contstraint";

const initialstate = {
  pageStep: 0,
};

const pageMovement = (state = initialstate, action) => {
  switch (action.type) {
    case PAGENEXT:
      return {
        pageStep: state.pageStep + 1,
      };
    case PAGEBACK:
      return {
        pageStep: state.pageStep - 1,
      };
    // case Decrement:
    //   return {
    //     ...state,
    //     count: state.count - action.payload,
    //   };
    default:
      return state;
  }
};

export default pageMovement;
