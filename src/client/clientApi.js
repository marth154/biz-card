import axios from "axios";
import getLocaleStorage from "../utils/function/getLocalStorage";

export default class ClientAPI {
  static urlApi;
  static route;
  static user;
  constructor(route) {
    this.urlApi = process.env.REACT_APP_API_URL;
    this.route = route;
    this.user = getLocaleStorage().user;
  }
  async get() {
    return await axios
      .get(`${this.urlApi}${this.route}`, {
        headers: { id: this.user?.id },
      })
      .then((res) => {
        return res;
      });
  }

  async post(body) {
    return await axios
      .post(`${this.urlApi}${this.route}`, body, {
        headers: { id: this.user?.id },
      })
      .then((res) => {
        return res;
      });
  }

  async put(body) {
    return await axios
      .put(`${this.urlApi}${this.route}`, body, {
        headers: { id: this.user?.id },
      })
      .then((res) => {
        return res;
      });
  }

  async delete() {
    return await axios
      .delete(`${this.urlApi}${this.route}`, {
        headers: { id: this.user?.id },
      })
      .then((res) => {
        return res;
      });
  }
}
