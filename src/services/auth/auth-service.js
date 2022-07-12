import graphqlClient from "@/services/graphql-client.js";
import apiClient from "@/services/axios/axios-client.js";

export default {
  registerUser(user) {
    const mutation = `
        mutation ($user: User) {
            registerUser(user: $user) {
                firstname
                lastname
                phoneNumber
                password
                name
                userId
                username
                enabled
            }
        }`;

    const variable = {
      user: user,
    };

    const graphql = {
      query: mutation,
      variables: variable,
    };

    return graphqlClient(graphql);
  },
  async login(data) {
    const res = await apiClient.post('/auth', data);
    localStorage.setItem('token', res.data.token);
  },
};
