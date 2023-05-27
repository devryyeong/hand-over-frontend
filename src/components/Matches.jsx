import { useState } from "react";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const CATEGORY = ["노인돌봄", "아이돌봄", "반려동물", "기타"]

const Matches = ({
  activeButton,
  formState,
  dispatch,
  handleButtonClick,
  onTextChange,
  onButtonChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dateToString = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0") +
      "T" +
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
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
                name="category"
                value={text}
                onClick={() => {
                  handleButtonClick(text);
                  onButtonChange(text);
                }}
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
          <Input
            type="text"
            placeholder="ex) 아이 하원 도우미 찾아요."
            name="matchName"
            value={formState.matchName}
            onChange={onTextChange}
          />
        </InputWrapper>
      </Background>

      <Background>
        <TitleText>장소를 입력해주세요</TitleText>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex) 경기도 oo시 oo읍 oo아파트 101동 101호"
            name="address"
            value={formState.address}
            onChange={onTextChange}
          />
        </InputWrapper>
      </Background>

      <Background>
        <TitleText>해당 시간이나 기간을 입력해주세요</TitleText>
        <InputWrapper>
          <DatePickerWrapper>
            <StyledDatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                onStartDateChange(dateToString(date));
              }}
              value={formState.startDate}
              selectStart
              startDate={startDate}
              endDate={endDate}
              locale={ko}
              dateFormat="Pp"
              showTimeSelect
              timeFormat="p"
              timeIntervals={1}
            />
            <Text>~</Text>
            <StyledDatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                onEndDateChange(dateToString(date));
              }}
              value={formState.endDate}
              selectEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
              dateFormat="Pp"
              showTimeSelect
              timeFormat="p"
              timeIntervals={1}
            />
          </DatePickerWrapper>
        </InputWrapper>
      </Background>

      <Background>
        <TitleText>내용을 입력해주세요</TitleText>
        <InputWrapper>
          <ContentsInput
            placeholder="ex) 화성 중앙병원 모시고 가실 수 있는 분 구합니다."
            name="detailsContent"
            value={formState.detailsContent}
            onChange={onTextChange}
          />
        </InputWrapper>
      </Background>

      <Background>
        <TitleText>가격을 제시해주세요</TitleText>
        <InputWrapper>
          <Input type="number" name="price" value={formState.price} onChange={onTextChange} />
        </InputWrapper>
      </Background>

      <Background>
        <TitleText>고려사항이나 주의사항을 입력해주세요</TitleText>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex) 자차가 있으신 분이면 좋겠어요."
            name="precaution"
            value={formState.precaution}
            onChange={onTextChange}
          />
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
  margin-right: 30px;
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

const StyledDatePicker = styled(DatePicker)`
  width: 200px;
  padding: 10px;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  border: 1px solid ${COLORS.Navy_100};
  outline: none;
  cursor: pointer;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  color: ${COLORS.Navy_100};
  margin: 0px 10px;
`;

export default Matches;
