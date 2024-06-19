const ROOT_URL = "https://ya-praktikum.tech/api/v2";

export class RootService {
  constructor(endpointUrl) {
    this.rootUrl = ROOT_URL;
    this.baseUrl = ROOT_URL + endpointUrl;
  }

  fetch = async (method = "GET", config = {}) => {
    try {
      const { options = {}, headers = {}, endpoint = "" } = config;
      const response = await fetch(this.baseUrl + endpoint, {
        method,
        mode: "cors",
        withCredentials: true,
        credentials: "include",
        ...options,
        headers: {
          "Content-Type": "application/json",

          ...headers,
        },
      });

      if (!response.ok) throw Error("root service fetch error");

      return response;

      // const data = await response.json();
    } catch (error) {
      throw Error(error);
    }
  };

  postRequest = (endpoint, data) =>
    this.fetch("POST", {
      options: {
        body: JSON.stringify(data),
      },
      endpoint,
    });
}
