import graphqlClient from "./axios-graphql";

export const codegenFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
): (() => Promise<TData>) => {
  return async () => {
    try {
      const { data } = await graphqlClient(query, variables);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };
};
