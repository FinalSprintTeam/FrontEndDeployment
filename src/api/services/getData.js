import { API_ENDPOINT } from "../connection/server";

const getData = async (api) => {
  const res = await fetch(API_ENDPOINT + api);
  const data = await res.json();

  return data;
};

export { getData };
