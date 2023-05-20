import React from "react";
import styled from "styled-components";
import myPageSrc from "../../assets/svg/myPage.svg";
import COLORS from "../../pages/styles/colors.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const All = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 100px 10px 10px;
gap: 10px;
width: 100%;
`

const InnerBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 0px 20px;
gap: 10px;
width: 100%;
border-bottom: 2px solid ${COLORS.Navy_100};
`

const TCommentBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 7px 8px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const Comment = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.5em;
color: ${COLORS.Navy_100};
`

const CommentBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: ${(props) => props.padding};
gap: 10px;
padding: 10px;
width: 95%;
isolation: isolate;
`

const Profile = styled.img`
width: 40px;
height: 40px;
`

const TxtId = styled.div`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const CommentTxt = styled.div`
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const CinnerBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px 0px 5px 10px;
gap: 10px;
width: 100%;
border-bottom: 1px solid ${COLORS.Navy_100};`

const DeleteBox = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px;
gap: 10px;
position: absolute;
left: 937px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 5px;
`

const DeleteTxt = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.Navy_100};
`

const MatchComment = () => {
    const params = useParams();
    const matchId = params.id;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const comments = await getCommentsByMatchId(matchId, 0, userToken);
                setComments(comments.result.data.comments);
            } catch (error) {
                console.error("댓글 목록 불러오기 실패:", error);
            }
        };

        fetchComments();
    }, [matchId]);


    return (

        <All>
            <InnerBox>
                <TCommentBox>
                    <Comment>댓글</Comment>
                </TCommentBox>
            </InnerBox>
            <CommentForm />
            {comments.map((comment, index) => (
                <CommentBox key={index}>
                    <Profile alt="profile" src={myPageSrc} />
                    <CinnerBox>
                        <TxtId>{comment.writer}</TxtId>
                        <CommentTxt>{comment.content}</CommentTxt>
                        {/* <DeleteBox onClick={() => deleteComment(comment.id)}>
                            <DeleteTxt>삭제</DeleteTxt>
                        </DeleteBox> */}
                    </CinnerBox>
                </CommentBox>
            ))}
        </All>
    )
}

export default MatchComment;