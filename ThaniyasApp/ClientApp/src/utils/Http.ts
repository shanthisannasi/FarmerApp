import axios, { AxiosInstance } from "axios";

let API_URL = "";
let Local_URL = "";
if (process.env.REACT_APP_API_URL) {

  API_URL = process.env.REACT_APP_API_URL;
}
if (process.env.REACT_APP_Local_URL) {

  Local_URL = process.env.REACT_APP_Local_URL;
}

export class Http {
  public static axios(): AxiosInstance {
    return axios.create({
      baseURL: API_URL
    });
  }
}

export class HttpLocal {
  public static axios(): AxiosInstance {
    return axios.create({
      baseURL: Local_URL
    });
  }
}
