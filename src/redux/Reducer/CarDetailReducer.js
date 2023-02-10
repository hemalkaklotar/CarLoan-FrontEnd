import { setCarDetail, clearCarDetail } from "../Constraint/contstraint";

const initialstate = {
  companyName: "",
  modelName: "",
  modelType: "",
  modelYear: "",
  car_id: 0,
};

const CarDetailReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setCarDetail:
      return {
        // ...initialstate,
        ...action.payload,
        // count: state.count + action.payload,
      };
    case clearCarDetail:
      console.log("I will Clear Whole State");
      // case Decrement:
      return {
        ...state,
        modelName: "",
        modelType: "",
        modelYear: "",
        car_id: 0,
      };
    default:
      return state;
  }
};

export default CarDetailReducer;
