import axios from "axios";
async function getPersonalDetails(Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/userDetail`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        console.log("HELLO");
        resolve(data.data);
        //   console.log("personal information", data);
      })
      .catch((e) => console.log(e.message));
  });
}
export { getPersonalDetails };
