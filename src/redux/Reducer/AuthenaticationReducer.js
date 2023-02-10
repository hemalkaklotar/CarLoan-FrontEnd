import {
  setUserLogging,
  setDirectLogin,
  setUserLogOut,
  setNormalLogin,
} from "../Constraint/contstraint";

const initialstate = {
  isAuthenticated: false,
  isUserIs: null,
  token: null,
  credential: "",
  directLogin: false,
};

const AuthenaticationReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setUserLogging:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        credential: action.payload.credential,
        isUserIs: action.payload.isUserIs || "User",
        isAuthenticated: true,
      };
    case setDirectLogin:
      return {
        ...state,
        directLogin: true,
      };
    case setNormalLogin:
      return {
        ...state,
        directLogin: false,
      };
    case setUserLogOut:
      return {
        ...state,
        token: null,
        credential: "",
        isUserIs: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default AuthenaticationReducer;
