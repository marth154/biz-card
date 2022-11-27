import axios from "axios";

export default class ClientAPI {
  static urlApi;
  static route;
  constructor(route) {
    this.urlApi = process.env.REACT_APP_API_URL;
    this.route = route;
  }
  async get(headers) {
    return await axios
      .get(`${this.urlApi}${this.route}`, {
        headers,
      })
      .then((res) => {
        return res;
      });
  }

  async post(body, headers) {
    return await axios
      .post(`${this.urlApi}${this.route}`, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  }

  async put(body, headers) {
    return await axios
      .put(`${this.urlApi}${this.route}`, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  }

  async delete(headers) {
    return await axios
      .delete(`${this.urlApi}${this.route}`, {
        headers,
      })
      .then((res) => {
        return res;
      });
  }
}
