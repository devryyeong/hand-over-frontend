import React from "react";
import styled from "styled-components";
import COLORS from "../../pages/styles/colors";
import { userToken, outProfile } from "../../api/api";

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 15px 20px;
gap: 10px;
position: relative;
width: 533px;
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
padding: 20px 110px;
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

const OutModal = ({ onClose }) => {

	const handleOut = async (e) => {
		e.preventDefault();
	
		try {
			await outProfile(userToken, onClose);
      
      alert("회원 탈퇴하였습니다.")
			// 회원 탈퇴 성공
		} catch (error) {
			console.error(error);
			// 회원 탈퇴 실패
		}
	};
	

  return (
    <Layout>
      <Box>
        회원 탈퇴하시겠습니까?
      </Box>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "10px" }}>
        <Btn onClick={handleOut}>네</Btn>
        <Btn onClick={onClose}>아니요</Btn>
      </div>
    </Layout>
  );
};

export default OutModal;

