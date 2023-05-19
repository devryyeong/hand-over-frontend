import { useState } from "react";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import DatePick from "../components/DatePicker";

const CATEGORY = ["노인돌봄", "아이돌봄", "반려동물", "기타"]

const Matches = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  
  
  return (
    <>
        <Background>
          <TitleText>카테고리를 선택해주세요</TitleText>
          <InputWrapper>
            {CATEGORY.map((text, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => handleButtonClick(text)}
                  active={text === activeButton}
                  inactive={activeButton !== "" && text !== activeButton}
                >
                  {text}
                </Button>
              );
            })}
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>제목을 입력해주세요</TitleText>
          <InputWrapper>
            <Input type="text" placeholder="ex) 아이 하원 도우미 찾아요." />
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>장소를 입력해주세요</TitleText>
          <InputWrapper>
            <Input type="text" placeholder="ex) 경기도 oo시 oo읍 oo아파트 101동 101호" />
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>해당 시간이나 기간을 입력해주세요</TitleText>
          <InputWrapper>
            <DatePick />
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>내용을 입력해주세요</TitleText>
          <InputWrapper>
            <ContentsInput placeholder="ex) 화성 중앙병원 모시고 가실 수 있는 분 구합니다." />
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>가격을 제시해주세요</TitleText>
          <InputWrapper>
            <Input type="number" />
          </InputWrapper>
        </Background>

        <Background>
          <TitleText>고려사항이나 주의사항을 입력해주세요</TitleText>
          <InputWrapper>
            <Input type="text" placeholder="ex) 자차가 있으신 분이면 좋겠어요." />
          </InputWrapper>
        </Background>
    </>
  );
};

const Background = styled.div`
  background-color: ${COLORS.Navy_15};
  border-radius: 10px;
  padding: 10px;
  margin: 15px 0px;
`;

const TitleText = styled.div`
  color: ${COLORS.Navy_100};
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  background-color: ${COLORS.WHITE};
  padding: 10px 20px;
  display: inline-block;
`;

const InputWrapper = styled.div`
  background: none;
  padding: 20px 0px 10px 0px;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  border: 1px solid ${COLORS.Navy_100};
  padding: 10px;
  width: 500px;
  outline: none;
`;

const ContentsInput = styled.textarea`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  border: 1px solid ${COLORS.Navy_100};
  padding: 10px;
  width: 500px;
  outline: none;
  ::placeholder {
    font-family: "Roboto";
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${COLORS.WHITE};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) =>
    props.active ? `${COLORS.Navy_100}` : props.inactive ? `${COLORS.GRAY}` : `${COLORS.Navy_100}`};
  border: ${(props) => (props.active ? `1px solid ${COLORS.Navy_100}` : "none")};
  border-radius: 40px;
  cursor: pointer;
`;

export default Matches;
