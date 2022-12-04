import axios from "./index";

const base = "users";

class AuthApi {
  static Login = (data) => axios.post(`${base}/login`, data);

  static Register = (data) => axios.post(`${base}/register`, data);

  static Logout = (data) => axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } });
}

export default AuthApi;
