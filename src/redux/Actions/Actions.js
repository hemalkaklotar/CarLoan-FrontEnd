import {
  setUserLogging,
  setLoanDetail,
  setOnlyLoanId,
  setPersonalDetail,
  setLicenceDetails,
  setWorkDetail,
  setCarDetail,
  clearCarDetail,
  PAGEBACK,
  PAGENEXT,
  setDirectLogin,
  setNormalLogin,
  setUserLogOut,
  
} from "../Constraint/contstraint";

export const loginDTO = (value) => {
  return {
    type: setUserLogging,
    payload: value,
  };
};
export const LogOutUser = (value) => {
  return {
    type: setUserLogOut,
    payload: value,
  };
};

export const setUserDirectLogin = (value) => {
  return {
    type: setDirectLogin,
    payload: value,
  };
};
export const setUserNormalLogin = (value) => {
  return {
    type: setNormalLogin,
    payload: value,
  };
};
export const loanDetail = (value) => {
  return {
    type: setLoanDetail,
    payload: value,
  };
};

export const setloanId = (value) => {
  return {
    type: setOnlyLoanId,
    payload: value,
  };
};
export const workDetail = (value) => {
  return {
    type: setWorkDetail,
    payload: value,
  };
};
export const licenceDetails = (value) => {
  return {
    type: setLicenceDetails,
    payload: value,
  };
};
export const personalDetails = (value) => {
  return {
    type: setPersonalDetail,
    payload: value,
  };
};
export const cardetails = (value) => {
  return {
    type: setCarDetail,
    payload: value,
  };
};
export const clearCarDetails = (value) => {
  return {
    type: clearCarDetail,
    payload: value,
  };
};

export const backpage = (value) => {
  return {
    type: PAGEBACK,
    payload: value,
  };
};
export const nextpage = (value) => {
  return {
    type: PAGENEXT,
    payload: value,
  };
};
// export const addNewTodo = (value) => {
//   return {
//     type: ADDTODO,
//     payload: value,
//   };
// };
// export const removeTodo = (id) => {
//   return {
//     type: REMOVETODO,
//     payload: id,
//   };
// };
