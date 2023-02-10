import axios from "axios";

function getYearsList(setRealeaseYearList, e) {
  const { value } = e;
  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}/carYearList/${value}`)
    .then((data) => {
      const modalReleaseYear = data.data.Data.map((value) => {
        return {
          value: value.modelYear,
          label: value.modelYear,
        };
      });
      setRealeaseYearList(modalReleaseYear);
    });
}

function getTheModelNameList(setModalList, e) {
  const { value } = e;
  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}/carModelList/${value}`)
    .then((data) => {
      const mdlList = data.data.Data.map((value) => {
        return {
          value: value.modelName,
          label: value.modelName,
        };
      });
      setModalList(mdlList);
    });
}
function getModalTypeList(setModalTypeList, e) {
  const { value } = e;
  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}/CarModelTypeList/${value}`)
    .then((data) => {
      const modalTypeList = data.data.Data.map((value) => {
        return {
          value: value.modelType,
          label: value.modelType,
          carId: value.car_id,
        };
      });
      setModalTypeList(modalTypeList);
    });
}
export { getYearsList, getTheModelNameList, getModalTypeList };
