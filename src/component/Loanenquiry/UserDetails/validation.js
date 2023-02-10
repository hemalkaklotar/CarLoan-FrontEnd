import * as yup from "yup";
const userDetailValidation = yup.object().shape({
  prefix: yup
    .object()
    .shape({
      label: yup.string().required("prefix is required"),
      value: yup.string().required("prefix is required").nullable(),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("status is required"),
  firstName: yup.string().required("firstname Should be required").nullable(),
  lastName: yup
    .string()
    .required("Last name on driving license should be required")
    .nullable(),
  email: yup.string().required().email("Enter valid Email").nullable(),
  state: yup
    .object()
    .shape({
      label: yup.string().required("state is required"),
      value: yup.string().required("state is required").nullable(),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("status is required"),
});

export default userDetailValidation;
