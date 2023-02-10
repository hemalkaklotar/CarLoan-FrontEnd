import * as yup from "yup";
const incomeValidation = yup.object().shape({
  hasAdditionalIncome: yup
    .string()
    .required("Choose One Option for Additional income")
    .nullable()
    .typeError("Rental income per month must be a number"),
  rentalIncomePerMonth: yup
    .number()
    .min(0)
    .required("Rental income per month   should be required")
    .nullable()
    .typeError("Rental income per month must be a number"),
  investmentIncome: yup
    .number()
    .integer()
    .required("Investment income   should be required")
    .nullable()
    .typeError("Investment income must be a number"),

  salarySacrificePerMonth: yup
    .number()
    .integer()
    .required("Salary sacrifice   should be required")
    .nullable()
    .typeError("Salary sacrifice must be a number"),

  centerlinkBenifit: yup
    .number()
    .integer()
    .required("Centerlink Benifit   should be required")
    .nullable()
    .typeError("centerlink Benifit must be a number"),

  forignIncomePerMonth: yup
    .number()
    .integer()
    .required("Forign Income should be required")
    .nullable()
    .typeError("Forign Income must be a number"),
});

export default incomeValidation;
