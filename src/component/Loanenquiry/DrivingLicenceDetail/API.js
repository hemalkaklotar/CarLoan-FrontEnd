import axios from "axios";
function updatePersonalDetailsField(state, data, Authentication) {
  let licenceDetails = {
    ...state,
    expieryDate: `${data.year}-${data.month}-${data.date}`,
    issue_state: data.issueState.value,
    licenceNumber: data.licenceNumber,
    licenseType: data?.licenceType?.value,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_DOMAIN_NAME}/licenceDetail/update`,
        licenceDetails,
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => resolve(data.data))
      .catch((e) => e.message);
  });
}

function getInitialFieldsData(setDrivingLicenceDetailField, Authentication) {
  axios
    .get(`${process.env.REACT_APP_DOMAIN_NAME}/licence`, {
      headers: { token: `Bearer ${Authentication.token}` },
    })
    .then((data) => {
      setDrivingLicenceDetailField(data.data.Data);
    })
    .catch((e) => console.log(e.message));
}

export { updatePersonalDetailsField, getInitialFieldsData };
