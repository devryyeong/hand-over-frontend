import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import COLORS from "../styles/colors";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";

const AGREE_COMPONENT = ["이용약관 동의 >", "개인정보 취급 방침 동의 >"];

const SignUpPage = () => {

  const onClickChecked = () => {
    setIsChecked(!isChecked);
    console.log(`@: ${!isChecked}`);
  };

  return (
    <Wrapper>
      <AuthForm type="signup" />
      <ComponentWrapper>
        <Label>비밀번호 확인:</Label>
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

      <AgreeBackground>
        {AGREE_COMPONENT.map((item) => {
          return (
            <AgreeWrapper>
              <AgreeCheckbox />
              <AgreeLabel>{item}</AgreeLabel>
            </AgreeWrapper>
          );
        })}
      </AgreeBackground>
      <ButtonWrapper>
        <Button>회원가입</Button>
        <TextLink>로그인하기</TextLink>
      </ButtonWrapper>
      {/* </form> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 100px 200px;
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
  padding: 5px 0px;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`;

const WarnMessage = styled.div`
  color: red;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

const AgreeBackground = styled.div`
  background-color: ${COLORS.Navy_5};
  padding: 30px;
  border-radius: 10px;
`;

const AgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0px;
`;

const AgreeCheckbox = styled.input.attrs({ type: "radio" })`
  margin-right: 5px;
`;

const AgreeLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

const TextLink = styled.a.attrs({ href: "/login" })`
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  color: ${COLORS.Navy_100};
  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpPage;
