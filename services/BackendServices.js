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
    // console.log(data);
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
};
