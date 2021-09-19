import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.github.com",
  headers: { accept: "application/vnd.github.v3+json" },
});
