import React from "react";
import styled from "styled-components";
import COLORS from "../../pages/styles/colors";
import letterSrc from "../../assets/svg/letter.svg";
import reportSrc from "../../assets/svg/report.svg"

const ModalLayout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
position: absolute;
left: 834px;
top: 93px;
`

const ModalBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 0px 0px 0px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
`

const LetterBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 10px 15px;
gap: 8px;
border-bottom: 1px solid ${COLORS.Navy_100};
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

const ReportBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px 10px 15px;
gap: 8px;
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
const Modal = () => {
  return(
    <div>
      <ModalLayout>
        <ModalBox>
          <LetterBox>
            쪽지하기
            <img alt="쪽지하기" src={letterSrc}/>
          </LetterBox>
          <ReportBox>
            신고하기
            <img alt="신고하기" src={reportSrc}/>
          </ReportBox>
        </ModalBox>
      </ModalLayout>
    </div>
  )
}

export default Modal;