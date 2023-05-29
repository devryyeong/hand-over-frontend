import React from "react";
import styled from "styled-components";
import COLORS from "../../pages/styles/colors";
import penSrc from "../../assets/svg/pen.svg";

const ModalLayout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
position: absolute;
left: 834px;
top: 93px;
z-index: 10;
cursor: pointer;
width: 160px !important;
`

const ModalBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 8px;
background: ${COLORS.WHITE};
border-width: 1px 1px 1px 1px;
border-style: solid;
border-color: ${COLORS.Navy_100};
border-radius: 10px 10px 10px 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
color: ${COLORS.Navy_100};
`

const BModalBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 8px;
background: ${COLORS.WHITE};
border-width: 1px;
border-style: solid;
border-color: ${COLORS.Navy_100};
border-radius: 0px 0px 10px 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
color: ${COLORS.Navy_100};
`



const MyModal = () => {

  return (
      <ModalLayout>
        <ModalBox>
          수정하기
          <img alt="수정하기" src={penSrc} />
        </ModalBox>
      </ModalLayout>
  );
};

export default MyModal;
