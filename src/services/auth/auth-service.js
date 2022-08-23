import graphqlClient from "@/services/graphql-client.js";

export default {
  registerUser(user) {
    const mutation = `
    mutation ($user: UserInput) {
      registerUser(user: $user) {
        id
        firstname
        lastname
        email
        pictureUrl
        displayName
        userId
        phoneNumber
        enabled
        authorities {
          name
        }
      }
    }`

    const variable = {
      user: user,
    };

    const graphql = {
      query: mutation,
      variables: variable,
    };

    return graphqlClient(graphql);
  },
  findByUserId(userId) {
    const query = `
    query ($userId: String) {
      findByUserId(userId: $userId) {
        id
        firstname
        lastname
        email
        pictureUrl
        displayName
        userId
        phoneNumber
        enabled
        authorities {
          name
        }
      }
    }`

    const variable = {
      userId: userId,
    };

    const graphql = {
      query: query,
      variables: variable,
    };

    return graphqlClient(graphql);
  },
};
