import axios from "axios";

const graphqlClient = (query) => {
    let token = localStorage.getItem("token");
    return axios({
        url: `http://localhost:8080/graphql`,
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
