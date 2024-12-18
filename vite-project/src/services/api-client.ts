import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ad189985418493482e6d1fcd88ac5ee",
  },
});

export default ApiClient;
export const controller = new AbortController();
