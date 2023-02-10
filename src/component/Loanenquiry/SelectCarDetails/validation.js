import * as yup from "yup";

const cardetailsValidation = yup.object().shape({
  companyName: yup
    .object()
    .shape({
      value: yup.string().required("Company name Cant be empty"),
      label: yup.string().required(),
    })
    .required("Company name Cant be empty"),
  modelName: yup
    .object()
    .shape({
      value: yup.string().required("Model name cant be  empty"),
      label: yup.string().required(),
    })
    .required(),
  modelYear: yup
    .object()
    .shape({
      value: yup.string().required("Model year cant be  empty"),
      label: yup.string().required(),
    })
    .required(),
  modelType: yup
    .object()
    .shape({
      value: yup.string().required("Model type cant be  empty"),
      label: yup.string().required(),
    })
    .required(),
});

export default cardetailsValidation;
