import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../styles/colors";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";
import { useUserFormInput } from "../../hooks/useUserFormInput";
import { signUp, emailConfirm, emailCheck } from "../../api/auth";

const AGREE_COMPONENT = ["이용약관 동의 >", "개인정보 취급 방침 동의 >"];

const initialUserFormState = {
  username: "",
  password: "",
  email: "",
  nickname: "",
  emailAuthKey: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useUserFormInput(initialUserFormState);
  const [emailCode, setEmailCode] = useState("");

  const onSignUpSubmit = () => {
    console.log(userInfo);
    signUp(userInfo)
      .then(res => {
        console.log(res)
        alert("회원가입이 완료되었습니다");
        navigate("/login");
      })
    .error(err => console.log(err))
  };

  // 이메일 인증 코드 발송
  const onEmailConfirm = () => {
    emailConfirm(userInfo.email)
      .then(res => {
        setEmailCode(res);
        alert("이메일을 확인해주세요");
      })
  };

  // 이메일 인증 번호 확인
  const onEmailCodeConfirm = () => {
    console.log(emailCode)
    emailCheck(emailCode)
      .then((res) => {
        console.log(res);
        alert("인증번호가 일치합니다");
      })
      .error((err) => console.log(err));
  }

  return (
    <FormWrapper>
      <AuthForm type="signup" userInfo={userInfo} setUserInfo={setUserInfo} />
      <ComponentWrapper>
        <Label>비밀번호 확인:</Label>
        <InputBox>
          <Input type="password" serInfo={userInfo} setUserInfo={setUserInfo} />
        </InputBox>
      </ComponentWrapper>

      <ComponentWrapper>
        <Label>닉네임:</Label>
        <InputBox>
          <Input name="nickname" value={userInfo.nickname} onChange={setUserInfo} />
        </InputBox>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>이메일:</Label>
        <InputBox>
          <Input type="email" name="email" value={userInfo.email} onChange={setUserInfo} />
        </InputBox>
        <AuthButton onClick={onEmailConfirm}>인증</AuthButton>
      </ComponentWrapper>
      <ComponentWrapper>
        <Label>인증번호:</Label>
        <InputBox>
          <Input name="emailAuthKey" value={userInfo.emailAuthKey} onChange={setUserInfo} />
        </InputBox>
        <AuthButton onClick={onEmailCodeConfirm}>확인</AuthButton>
      </ComponentWrapper>

      <AgreeBackground>
        {AGREE_COMPONENT.map((item) => {
          return (
            <AgreeWrapper key={item}>
              <AgreeCheckbox />
              <AgreeLabel>{item}</AgreeLabel>
            </AgreeWrapper>
          );
        })}
      </AgreeBackground>
      <ButtonWrapper>
        <Button onClick={onSignUpSubmit}>회원가입</Button>
        <TextLink>로그인하기</TextLink>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
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
