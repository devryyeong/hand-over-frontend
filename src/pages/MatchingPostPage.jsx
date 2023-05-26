import { useState, useReducer } from "react";
import styled from "styled-components";
import COLORS from "./styles/colors";
import Matches from "../components/Matches";
import Button from "../components/Button";
import { postMatches } from '../api/api';
import { userToken } from "../api/api";

const initialFormState = {
  category: "",
  matchName: "",
  address: "",
  startDate: "",
  endDate: "",
  detailsContent: "",
  price: 0,
  precaution: "",
};

const ACTION_TYPES = {
  handleInput: "handleInput",
  setCategory: "setCategory",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.handleInput:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ACTION_TYPES.setCategory:
      return {
        ...state,
        category: action.value,
      };
    default:
      return state;
  }
};

const MatchingPostPage = () => {
  const [activeButton, setActiveButton] = useState("");
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  const onTextChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION_TYPES.handleInput,
      field: name,
      value: value,
    });
  };

  const onButtonChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION_TYPES.setCategory,
      field: name,
      value: value,
    });
  };
  

  // TODO: 더미데이터 삭제
  const postInfo = {
    category: "기타",
    matchName: "match-namee",
    address: "address",
    startDate: "2023-05-09T07:35",
    endDate: "2023-05-19T07:35",
    detailsContent: "detail-content",
    price: 10,
    precaution: "주의",
  };

  const handleSubmit = () => {
    postMatches(userToken, postInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <TitleWrapper>
        <TitleText>매칭글 작성하기</TitleText>
      </TitleWrapper>
      <FormWrapper>
        <Matches
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          formState={formState}
          dispatch={dispatch}
          handleButtonClick={handleButtonClick}
          onTextChange={onTextChange}
          onButtonChange={onButtonChange}
        />
        <ButtonWrapper>
          <Button onClick={handleSubmit}>매칭글 올리기</Button>
          <Button onClick={() => console.log(formState)}>TEMP</Button>
        </ButtonWrapper>
      </FormWrapper>
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

const FormWrapper = styled.div`
  padding: 15px 0px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

export default MatchingPostPage;