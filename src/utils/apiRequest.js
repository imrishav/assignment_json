import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const apiRequestDef = async (method, url, params) => {
  if (method === "get") {
    let request = await axios.get(url);
    return request;
  }
};

export const get = async (url, params) =>
  await apiRequestDef("get", `${REACT_APP_API_URL}/${url}`, params);
