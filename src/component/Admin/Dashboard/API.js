import axios from "axios";

function fetchAllAgent(Authentication) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_NAME}/admin/getAllAgent`, {
        headers: { token: `Bearer ${Authentication.token}` },
      })
      .then((data) => {
        console.log("data for afdssgsbnddg  sdg", data.data.data);
        resolve(data.data.data);
      })
      .catch((e) => console.log(e.message));
  });
}
export { fetchAllAgent };
