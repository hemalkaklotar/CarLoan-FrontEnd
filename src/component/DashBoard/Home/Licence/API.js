import axios from "axios";
async function getLicenceDetails(Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/licence`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        console.log("data.data", data.data);
        resolve(data.data);
      })
      .catch((e) => e.message);
  });
}
export { getLicenceDetails };
