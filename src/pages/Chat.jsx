import React from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import COLORS from "./styles/colors";
import sendIconSrc from "../assets/svg/sendIcon.svg";
import defaultProfileSrc from "../assets/svg/defaultProfile.svg";

const Chat = () => {
  return (
    <div>
      {/* <div>제목, 시간, 장소</div> */}
      <Wrapper>
        <Background>
          <MessageWrapper>
            <TimeText>오전 8:22</TimeText>
            <Message>이게맞나</Message>
            <ProfileImg src={defaultProfileSrc} />
          </MessageWrapper>
          <InputWrapper>
            <InputBox>
              <Input />
            </InputBox>
            <SendButton>
              <img src={sendIconSrc} alt="쪽지 전송" />
            </SendButton>
          </InputWrapper>
        </Background>
        <ButtonWrapper>
          <Button />
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};
const MessageWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const TimeText = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

const Message = styled.div`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  padding: 20px;
  margin-right: 15px;
`;
const ProfileImg = styled.img`
  border: 2px solid ${COLORS.BLUE_100};
  border-radius: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Background = styled.div`
  background-color: ${COLORS.BLUE_15};
  width: 100%;
  height: 100vh;
  margin: 0px 27px 0px 27px;
  border-radius: 10px;
  position: relative;
`;

const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 70px;
  bottom: 20px;
  width: 100%;
  padding: 10px;
`;

const InputBox = styled.div`
  padding: 10px;
  width: 100%;
  border: 2px solid ${COLORS.BLUE_100};
  border-radius: 40px;
  background-color: ${COLORS.WHITE};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  background-color: ${COLORS.WHITE};
  border: 2px solid;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 30px;
`;

export default Chat;