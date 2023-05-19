import React from 'react';
import styled from "styled-components";
import COLORS from "./styles/colors";
import Matches from "../components/Matches";
import Button from "../components/Button";

const MatchingPosting = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TitleWrapper>
        <TitleText>매칭글 작성하기</TitleText>
      </TitleWrapper>
      <FormWrapper>
        <Matches />
        <ButtonWrapper>
          <Button onClick={handleSubmit}>매칭글 올리기</Button>
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

export default MatchingPosting;