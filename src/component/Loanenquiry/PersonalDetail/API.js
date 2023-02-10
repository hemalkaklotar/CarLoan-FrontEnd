import axios from "axios";
function getInitialFieldsData(setPersonalDetailField, Authentication) {
  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}/licence`, {
      headers: { token: `Bearer ${Authentication.token}` },
    })
    .then((data) => {
      setPersonalDetailField(data.data.Data);
    })
    .catch((e) => console.log(e.message));
}

export { getInitialFieldsData };
