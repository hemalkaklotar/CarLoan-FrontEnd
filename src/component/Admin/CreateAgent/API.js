import axios from "axios";

function createNewAgent(data, Authentication) {
  console.log("asf", { ...data, role: "Agent" });
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_DOMAIN_NAME}/admin/createAgent`,
        { ...data, role: "Agent" },
        {
          headers: { token: `Bearer ${Authentication.token}` },
        }
      )
      .then((data) => {
        resolve(data.data);
      })
      .catch((e) => console.log(e.message));
  });
}
export default createNewAgent;
