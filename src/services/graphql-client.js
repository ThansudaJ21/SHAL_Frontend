import axios from "axios";

const graphqlClient = (query) => {
  let token = localStorage.getItem("token");
  return axios({
    url: `${process.env.VUE_APP_BACKEND_URL}/graphql`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: query,
  });
};

export default graphqlClient;
