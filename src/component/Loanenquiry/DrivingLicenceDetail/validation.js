import * as yup from "yup";
const currentYear = new Date().getFullYear();
const drivingLicenceValidation = yup.object().shape({
  licenceType: yup
    .object()
    .shape({
      label: yup.string().required("Licence type is required"),
      value: yup.string().required("Licence type is required").nullable(),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("Licence type is required"),
  licenceNumber: yup
    .number()
    .integer()
    .required("Licence Number  should be required").nullable(),
  date: yup
    .number()
    .min(1)
    .max(31)
    .required()
    .typeError("Date cant be more than 31"),
  month: yup
    .number()
    .min(1)
    .max(12)
    .required()
    .typeError("Month cant be more than 12"),
  year: yup
    .number()
    .min(currentYear)
    .max(2099)
    .typeError("Year cannot be less than  cuurent Year"),
  issueState: yup
    .object()
    .shape({
      label: yup.string().required("Issue State is required"),
      value: yup.string().required("Issue State is required").nullable(),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("Licence type is required"),
});

export default drivingLicenceValidation;
