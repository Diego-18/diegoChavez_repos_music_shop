import axios from "axios";

const api = process.env.BACKEND_URL || "https://music-shop-q6a2.onrender.com";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export default {
  login(data) {
    return axios.post(api + "/auth/login", data).then((res) => res.data);
  },

  createUser(data) {
    return axios.post(api + "/auth/register", data).then((res) => res.data);
  },

  createInstrument(data) {
    return axios
      .post(api + "/instruments", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => res.data);
  },

  getInstruments() {
    return axios
      .get(api + "/instruments", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => res.data);
  },

  deleteInstrument(id) {
    return axios
      .delete(api + "/instruments/" + id, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => res.data);
  },

  updateInstrument(data) {
    console.log(data);
    return axios
      .put(api + "/instruments/" + data._id, data, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => res.data);
  },
};
