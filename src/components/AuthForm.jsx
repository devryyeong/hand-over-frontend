import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";

const AuthForm = ({ type }) => {
  return (
    <>
      <TitleWrapper>
        <TitleText>{type === "signup" ? "회원가입" : "로그인"}</TitleText>
      </TitleWrapper>
      <ComponentWrapper>
        <Label>아이디:</Label>
        <InputBox>
          <Input />
        </InputBox>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>비밀번호:</Label>
        <InputBox>
          <Input />
          <WarnMessage>
            비밀번호는 알파벳, 숫자, 특수문자를 포함하여 8글자 이상이어야 합니다.
          </WarnMessage>
        </InputBox>
      </ComponentWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  padding: 20px;
  border-bottom: 2px solid ${COLORS.Navy_100};
  text-align: center;
`;

const TitleText = styled.div`
  color: ${COLORS.Navy_100};
  font-weight: 700;
  font-size: 20px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${COLORS.Navy_100};
  padding: 30px 10px 30px 0px;
  width: 25%;
  text-align: left;
`;

const ComponentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  width: 80%;
`;

const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: 2px solid ${COLORS.Navy_100};
  border-radius: 10px;
  margin-bottom: 10px;
`;

const WarnMessage = styled.div`
  color: red;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export default AuthForm;
