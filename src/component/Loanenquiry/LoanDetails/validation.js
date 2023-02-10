import * as yup from "yup";

const loandetailsValidation = yup.object().shape({
  purchasePrice: yup
    .number()
    .min(0)
    .max(10000000)
    .required()
    .typeError("you must specify a purchase price"),
  deposit: yup
    .number()
    .min(0)
    .max(10000000)
    .required()
    .typeError("you must specify a deposit price"),
  term: yup
    .object()
    .shape({
      value: yup.string().required("Tern Value cant be Empty"),
      lable: yup.string(),
    })
    .required(),
  balloon: yup
    .number()
    .min(0)
    .max(100)
    .required()
    .typeError("you must specify a balloon percentage"),
});

export default loandetailsValidation;
