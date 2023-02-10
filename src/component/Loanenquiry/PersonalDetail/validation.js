import * as yup from "yup";
const currentYear = new Date().getFullYear();
const personalDetailsValidation = yup.object().shape({
  firstNameOnDrivingLicense: yup
    .string()
    .required("First name on driving license should be required"),
  lastNameOnDrivingLicense: yup
    .string()
    .required("Last name on driving license should be required"),
  date: yup
    .number()
    .min(1)
    .max(31)
    .required()
    .typeError("date cant be more than 31"),
  month: yup
    .number()
    .min(1)
    .max(12)
    .required()
    .typeError("month cant be more than 12"),
  year: yup
    .number()
    .min(1901)
    .max(currentYear - 21),
});

export default personalDetailsValidation;
