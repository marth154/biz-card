import axios from "axios";

export default class ClientAPI {
  static urlApi;
  static route;
  constructor(route) {
    this.urlApi = process.env.REACT_APP_API_URL;
    this.route = route;
  }
  async get() {
    return await axios.get(`${this.urlApi}${this.route}`).then((res) => {
      return res;
    });
  }

  async post(body) {
    return await axios.post(`${this.urlApi}${this.route}`, body).then((res) => {
      return res;
    });
  }

  async put(body) {
    return await axios.put(`${this.urlApi}${this.route}`, body).then((res) => {
      return res;
    });
  }

  async delete() {
    return await axios.delete(`${this.urlApi}${this.route}`).then((res) => {
      return res;
    });
  }
}
