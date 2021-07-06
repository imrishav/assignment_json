import axios from "axios";

const { REACT_APP_API_URL } = process.env;

/**
 * This function will use the appropriate http method and then return the response from the url with provided params.
 * @param {string} method
 * @param {string} url
 * @param {string} params
 * @returns {Promise<any>}
 */
const apiRequestDef = async (method, url, params) => {
  if (method === "get") {
    let request = await axios.get(url);
    return request;
  }
};

/**
 * Will return the data from the jsonPlaceHolder url.
 * @param {string} url
 * @param {string} params
 * @returns {Promise<any>}
 */
export const get = async (url, params) =>
  await apiRequestDef("get", `${REACT_APP_API_URL}/${url}`, params);
