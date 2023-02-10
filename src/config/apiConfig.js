// const mytoken = localStorage.getItem("token");
function headers(mytoken) {
  return {
    header:{

      headers: { token: `Bearer ${mytoken}` },
    }
  };
}
// const header = {
//   headers: { token: `Bearer ${mytoken}` },
// };
export { headers };

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// const HeaderToken = () => {
//   useEffect(() => {
//     const mytoken = localStorage.getItem("token");
//   }, []);
//   // const mytoken = useSelector((checkAuth) => checkAuth.Auth);

//   return <div>{console.log("HeaderTokenHeaderToken", mytoken)}</div>;
// };

// export default HeaderToken;
