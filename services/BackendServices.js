import axios from "axios";

const api = process.env.BACKEND_URL || "http://localhost:3002";

export default {
  login(data) {
    return axios.post(api + "/auth/login", data).then((res) => res.data);
  },
};
