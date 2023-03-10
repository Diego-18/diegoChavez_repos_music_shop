import axios from "axios";

const api = process.env.BACKEND_URL || "https://music-shop-q6a2.onrender.com";

export default {
  login(data) {
    return axios.post(api + "/auth/login", data).then((res) => res.data);
  },
};
