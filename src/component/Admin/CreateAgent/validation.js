import * as yup from "yup";
const newAgent = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name should be required")
    .nullable()
    .typeError("First Name Should be required"),
  lastName: yup
    .string()
    .required("Last Name should be required")
    .nullable()
    .typeError("Last Name Should be required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Mobile number Should have exactly 10 numbers")
    .max(10, "Mobile number Should have exactly 10 numbers"),
});

export default newAgent;
