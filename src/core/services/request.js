import { Axios } from "axios";
import hostConfigs from "configs";
import { Hosts } from "core/services/constants";

const constructMainHostUrl = (controller, method) =>
  `${hostConfigs.MAIN_HOST}/${controller}/${method}`;

const constructUrl = (host) => {
  switch (host) {
    case Hosts.MAIN_HOST:
      return constructMainHostUrl;
    default:
      break;
  }
};

export const request = async (
  host,
  reqMethod,
  controller,
  method,
  query,
  data,
  headers
) => {
  const response = await Axios({
    url: constructUrl(host)(controller, method),
    method: reqMethod,
    headers: {
      ...headers,
      "Content-Type": "application/json-patch+json",
      Accept: "text/plain",
      charset: "UTF-8",
    },
    data,
  });
  return response;
};
