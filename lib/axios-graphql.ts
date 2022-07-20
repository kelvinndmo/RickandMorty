import client from "./axios-client";
const graphqlClient = (query: any, variables?: any) => {
  return client({
    url: `/graphql`,
    method: "POST",
    data: {
      query,
      variables,
    },
  }).then(({ data }) => data);
};

export default graphqlClient;
