import {
  setLicenceDetails,
  setPersonalDetail,
} from "../Constraint/contstraint";

const initialstate = {
  firstNameOnDrivingLicense: "",
  lastNameOnDrivingLicense: "",
  dateOfBirth: "",

  licenceNumber: "",
  expieryDate: "",
  licenseType: "",
  issue_state: "",
};

const LicenceInfoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case setPersonalDetail:
      return {
        ...state,
        firstNameOnDrivingLicense: action.payload?.firstNameOnDrivingLicense,
        lastNameOnDrivingLicense: action.payload?.lastNameOnDrivingLicense,
        dateOfBirth: `${action.payload?.year}-${action.payload?.month}-${action.payload?.date}`,
      };
    case setLicenceDetails:
      return {
        ...state,
        licenceNumber: action.payload?.licenceNumber,
        expieryDate: `${action.payload?.year}-${action.payload?.month}-${action.payload?.date}`,
        licenseType: action.payload?.licenceType.value,
        issue_state: action.payload?.issueState.value,
      };
    default:
      return state;
  }
};

export default LicenceInfoReducer;
