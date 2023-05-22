import React, { useState, useRef } from "react";
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
overflow: auto;
`

const Profile = styled.img`
width: 50px;
height: 50px;
`

const CommentFormBox = styled.form`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
width: 100%;
overflow: auto;
`

const Commentinput = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;
width: 820px;
border: none;
border-bottom: 1px solid ${COLORS.Navy_100};
font-family: 'Roboto', sans-serif;
resize: none;
overflow: auto;

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
height: 25px;
`

const Sendingimg = styled.img`
width: 30px;
height: 30px;
`


function CommentForm() {
	const params = useParams();
	const matchingId = params.id;
	const [text, setText] = useState("");
	const inputRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = async () => {
		if (text.trim() === '') return; // 빈 문자열인 경우 제출하지 않음

		try {
			await postComment(matchingId, text, userToken);
			setText("");
			window.location.reload();
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
					onKeyDown={handleKeyDown}
					ref={inputRef}
				/>
				<SendingBox type="submit">
					<Sendingimg alt="sending" src={sendingSrc} onClick={handleSubmit} />
				</SendingBox>
			</CommentFormBox>
		</CommentAll>
	);
}

export default CommentForm;
