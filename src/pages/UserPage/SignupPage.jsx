import { useState } from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import Button from "../../components/Button"

const SignUpPage = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>회원가입</TitleText>
      </TitleWrapper>

      <ComponentWrapper>
        <Label>아이디:</Label>
        <InputBox>
          <Input />
        </InputBox>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>닉네임:</Label>
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
      <ComponentWrapper>
        <Label>비밀번호 확인:</Label>
        <InputBox>
          <Input />
        </InputBox>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>이메일:</Label>
        <InputBox>
          <Input />
        </InputBox>
        <AuthButton>인증</AuthButton>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>인증번호:</Label>
        <InputBox>
          <Input />
        </InputBox>
      </ComponentWrapper>
      <ButtonWrapper>
        <Button>회원가입</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px 200px;
`;

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
  padding: 10px;
  width: 100%;
  border: 2px solid ${COLORS.Navy_100};
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const AuthButton = styled.button`
  margin-left: 5px;
  border: 2px solid ${COLORS.Navy_100};
  border-radius: 10px;
  background: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.Navy_100};
  width: 50px;
  padding: 7px 0px;
`;

const WarnMessage = styled.div`
  color: red;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export default SignUpPage;
