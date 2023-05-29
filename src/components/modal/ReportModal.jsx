import React from "react";
import styled from "styled-components";
import COLORS from "../../pages/styles/colors";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { userToken, reportId } from "../../api/api";
import { useRecoilState } from "recoil";
import { LoginState } from "../../atoms/atoms";

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 15px 20px;
gap: 10px;
position: relative;
width: 533px;
height: 332px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 140px;
width: 100%;
border-bottom: 1px solid ${COLORS.GRAY};
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${COLORS.Navy_100};
`

const InnerBox = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 100%;
font-family: 'Roboto';
resize: none;
background: ${COLORS.Navy_5};
border-radius: 10px;
height: 200px;
`

const Btn = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 20px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 30px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const ReportModal = ({ onClose }) => {
	const params = useParams();
	const reportedMatchId = params.id;
  const [content, setContent] = useState("");
  const [userToken, setUserToken] = useRecoilState(LoginState);


	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleButtonClick();
		}
	};

	// 신고처리
	const handleButtonClick = () => {
		reportId(reportedMatchId, content, userToken, onClose);
	};

	return (
		<Layout>
			<Box>
				신고하시겠습니까?
			</Box>
			<InnerBox
				type="text"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="신고사유를 작성해주세요."
				onKeyDown={handleKeyDown}
			/>
			<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
				<Btn onClick={handleButtonClick}>확인</Btn>
				<Btn onClick={onClose}>취소</Btn>
			</div>
		</Layout>
	);
};

export default ReportModal;

