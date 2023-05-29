import axios from "axios";
const baseURL = "http://15.164.244.154/api";

const TOKEN_KEYS = { ACCESS: "accessToken", REFRESH: "refreshToken" };

const getAccessToken = () => localStorage.getItem(TOKEN_KEYS.ACCESS) ?? "";

//로그인 API
export const login = async (loginInfo) => {
  const result = await axios.post(
    `${baseURL}/auth/login`, loginInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data.result;
};

//회원가입 API
export const signUp = async (signUpInfo) => {
  return await axios.post(`${baseURL}/auth/join`, signUpInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // return result?.data;
};

//토큰 재발급 API
export const reissue = (accessToken, refreshToken) => {
  //
};

//이메일 인증번호 발급 API
export const emailConfirm = async (email) => {
  const result = await axios.post(
    `${baseURL}/auth/join/email/mailConfirm`,
    null,
    { params: { email } },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data.result;
};

//이메일 인증번호 일치 확인 API
export const emailCheck = async (code) => {
  const result = await axios.post(
    `${baseURL}/auth/join/email/check`,
    null,
    { params: { code } },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `*/*`,
        "Access-Control-Allow-Credentials": "true",
      },
    },
  );
    return result.data.result;
};