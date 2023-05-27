import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import COLORS from "../styles/colors";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  return (
    <Wrapper>
      <AuthForm type="login" />
      <ButtonWrapper>
        <Button>로그인</Button>
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
