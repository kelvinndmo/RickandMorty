import axios from "axios";

const options = {
  baseURL: "https://rickandmortyapi.com",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "rickandmorty",
    Accept: "application/json",
  },
};

const client = axios.create(options);

export default client;
