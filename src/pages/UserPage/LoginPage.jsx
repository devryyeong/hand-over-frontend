import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import COLORS from "../styles/colors";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";
import { useUserFormInput } from "../../hooks/useUserFormInput";
import { login } from "../../api/auth";
import { LoginState, isLoginSelector, usernameState } from "../../atoms/atoms";

const initialUserFormState = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useUserFormInput(initialUserFormState);
  const setAccessToken = useSetRecoilState(LoginState);
  const setUsername = useSetRecoilState(usernameState);
  const isLogin = useRecoilValue(isLoginSelector);

  useEffect(() => {
    if (isLogin) {
      return;
    } else {
      navigate("/login");
    }
  }, []);

  const onLoginSubmit = () => {
    login(loginInfo)
      .then(res => {
        setAccessToken(res.data.accessToken);
        setUsername(res.data.username);
        alert("로그인되었습니다.")
        navigate("/");
      });
  };
  
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn("");
    window.location.href = "/";
  };
    
  return (
    <Wrapper>
      <AuthForm type="login" userInfo={loginInfo} setUserInfo={setLoginInfo} />
      <ButtonWrapper>
        <Button onClick={onLoginSubmit}>로그인</Button>
      </ButtonWrapper>
      <SubTextWrapper>
        <SubText>아직 회원이 아니신가요?</SubText>
        <TextLink>회원가입 하러가기</TextLink>
      </SubTextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 100px 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SubTextWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const SubText = styled.div`
  color: ${COLORS.GRAY};
  margin-right: 20px;
`;

const TextLink = styled.a.attrs({ href: "/signup" })`
  color: ${COLORS.Navy_100};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;
