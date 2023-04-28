import styled from "styled-components";

import COLORS from "../../pages/styles/colors";

export const Wrapper = styled.div`
  background-color: ${COLORS.BLUE_15};
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const Profile = styled.img`
  border-radius: 50px;
  border: 1px solid ${COLORS.BLUE_100};
`;

export const Menu = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Id = styled.div`
  padding: 10px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopLeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  background-color: ${COLORS.WHITE};
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const CommentCount = styled.div`
  color: ${COLORS.BLUE_100};
  text-align: right;
  padding: 20px 0px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  border-radius: 40px;
  border: 1px solid ${COLORS.BLUE_100};
  display: flex;
  padding: 10px;
  background-color: ${COLORS.WHITE};

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  color: ${COLORS.BLUE_100};,
`;