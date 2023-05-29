import React from "react";
import styled from "styled-components";
import COLORS from "../../pages/styles/colors";
import { useState } from "react";
import { userToken } from "../../api/api";
import axios from 'axios';


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
padding: 10px 180px;
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

const SendModal = ({ onClose, writer }) => {
  const [content, setContent] = useState("");
  // const receiverUsername = writer; 
  const receiverUsername= "kimsb7219"
  const title = "string";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const handleSubmit = async () => {
    if (content.trim() === "") return; // 빈 문자열인 경우 제출하지 않음

    try {
      await sendMsg(receiverUsername, content);
      setContent("");
      onClose();
    } catch (error) {
      console.error("쪽지 작성 실패:", error);
    }
  };

  const sendMsg = async (receiverUsername, content) => {
    const newComment = {
      title: title,
      content: content,
      receiverUsername: receiverUsername,
    };

    console.log(newComment, userToken)

    try {
      const response = await axios.post(
        "http://15.164.244.154/api/messages",
        newComment,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  return (
    <Layout>
      <Box>
        쪽지보내기
      </Box>
      <InnerBox
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 작성해주세요."
        onKeyDown={handleKeyDown}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Btn onClick={handleSubmit}>전송</Btn>
        <Btn onClick={onClose}>취소</Btn>
      </div>
    </Layout>
  );
};

export default SendModal;

