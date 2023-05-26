import React, { useState } from "react";
import styled from "styled-components";
import myPageSrc from "../../assets/svg/myPage.svg";
import COLORS from "../../pages/styles/colors.js";
import sendingSrc from "../../assets/svg/sending.svg";
import { useParams } from "react-router-dom";
import { userToken } from "../../api/api";
import { postComment } from "../../api/api";

const CommentAll = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 10px 20px;
gap: 10px;
width: 100%;
`

const Profile = styled.img`
width: 50px;
height: 50px;
`

const CommentFormBox = styled.form`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
width: 100%;
height: 80px;
`

const Commentinput = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 820px;
height: 50px;
border: none;
border-bottom: 1px solid ${COLORS.Navy_100};

&:focus{
  outline: none;
    border-bottom: 2px solid ${COLORS.Navy_100};
}
`

const SendingBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 10px;
width: 30px;
height: 45px;
`

const Sendingimg = styled.img`
width: 30px;
height: 30px;
`


function CommentForm() {
    const params = useParams();
    const matchingId = params.id;
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await postComment(matchingId, text, userToken);
            setText(""); // 댓글 작성 후에 입력값 초기화
            window.location.reload(); // 페이지 새로고침
        } catch (error) {
            console.error("댓글 작성 실패:", error);
        }
    };


    return (
        <CommentAll>
            <Profile alt="profile" src={myPageSrc} />
            <CommentFormBox onSubmit={handleSubmit}>
                <Commentinput
                    type="text"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <SendingBox type="submit">
                    <Sendingimg alt="sending" src={sendingSrc} onClick={handleSubmit} />
                </SendingBox>
            </CommentFormBox>
        </CommentAll>
    );
}

export default CommentForm;
