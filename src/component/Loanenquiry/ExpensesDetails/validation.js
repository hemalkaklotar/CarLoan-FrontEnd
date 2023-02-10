import * as yup from "yup";
const ExpenseValidation = yup.object().shape({
  motorvehicalRunningCost: yup
    .number()
    .required("Motor vehical running cost should be required")
    .min(0)
    .nullable()
    .typeError("Motor vehical running cost must be a number"),
  travellingCost: yup
    .number()
    .integer()
    .min(0)
    .required("Travelling cost should be required")
    .nullable()
    .typeError("Travelling cost must be a number"),

  utilitiesCost: yup
    .number()
    .integer()
    .min(0)
    .required("Utilities cost   should be required")
    .nullable()
    .typeError("Utilities cost must be a number"),

  insurancesCost: yup
    .number()
    .integer()
    .min(0)
    .required("Insurances cost   should be required")
    .nullable()
    .typeError("Insurances cost must be a number"),

  telephoneAndInternetCost: yup
    .number()
    .integer()
    .min(0)
    .required("Telephone and internet cost should be required")
    .nullable()
    .typeError("Telephone and internet cost must be a number"),
  entertainmentCost: yup
    .number()
    .integer()
    .min(0)
    .required("Entertainment cost should be required")
    .nullable()
    .typeError("Entertainment cost must be a number"),
});

export default ExpenseValidation;
