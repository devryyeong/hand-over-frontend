import React from "react";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";

const Button = ({ disabled, onClick, children}) => {
  return (
    <Btn onClick={onClick} disabled={disabled}>
      <Text>children</Text>
    </Btn>
  );
};

const Btn = styled.button`
  width: 166px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${COLORS.Navy_100};
  padding: 15px 20px;
  background-color: ${COLORS.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 18px;
  color: ${COLORS.Navy_100};
  font-weight: 700;
`;

export default Button;
