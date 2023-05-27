import axios from "axios";
const baseURL = "http://15.164.244.154/api";

//로그인 API
export const signUp = async (userInfo) => {
  // return axios.get(`${baseURL}/matches`, {
  //   headers: {
  //     Authorization: `Bearer ${userToken}`,
  //   },
  // });

  const result = await axios.post(`${baseURL}/auth/login`, userInfo);
};

export const login = async (username, password) => {
  const result = await axios.post(`${baseURL}/auth/join`,
    `{"username":"${username}", "password":"${password}"}`,{
      headers: {
        "Content-Type": "application/json",
        "Logined-User": 999
      },
  });

  return result.data;
};

export const reissue = (accessToken, refreshToken) => {
  //
};

export const emailConfirm = (email) => {
  const result = axios.post(`${baseURL}/auth/join/email/emailConfirm`, email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.data;
};

export const emailCheck = (code) => {
  //
};