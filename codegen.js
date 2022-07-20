module.exports = {
  schema: [
    {
      ["https://rickandmortyapi.com/graphql"]: {},
    },
  ],
  overwrite: true,
  documents: "**/*.graphql",
  generates: {
    "generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        avoidOptionals: true,
        typesPrefix: "Gql",
        fetcher: "../lib/fetcher#codegenFetcher",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
