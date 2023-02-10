import * as yup from "yup";

const loginvalidation = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Mobile number Must containes digits")
    .min(10, "Mobile number Should have exactly 10 numbers")
    .max(10, "Mobile number Should have exactly 10 numbers"),
});

export default loginvalidation;
