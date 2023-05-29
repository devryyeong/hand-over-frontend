import { useState, useEffect } from "react";
import styled from "styled-components";
import myPageSrc from "../../assets/svg/myPage.svg";
import COLORS from "../../pages/styles/colors.js";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import { getCommentsByMatchId, updateCommentById, deleteCommentById } from "../../api/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../../atoms/atoms";
// import { deleteCommentById } from "../../api/api";
import { usernameState } from "../../atoms/atoms";

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
align-items: center;
padding: 10px 6px 10px 12px;
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
gap: 5px;
padding: 10px;
width: 100%;
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
min-height: 20px;
align-items: center;
text-align: left;
color: ${COLORS.BLACK};
width: 90%;
border-bottom: 1px solid ${COLORS.Navy_100};
`

const CinnerBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px 0px 5px 10px;
width: 100%;
gap: 5px;
`

const DeleteBox = styled.button`
display: flex;
flex-direction: row;
padding: 5px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 5px;
`

const DeleteTxt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.Navy_100};
`;


const ControllBox = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
gap: 5px;
position: absolute;
right: -10px;
width: 120px;
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

const SelectBox = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
width: 100%;
max-height: 30px !important;
`

const MatchComment = () => {
  const params = useParams();
  const matchId = params.id;
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState("");
  const [userToken, setUserToken] = useRecoilState(LoginState);
  const [userName, setUserName] = useRecoilState(usernameState);

  useEffect(() => {
    setUserName(userName);
    console.log(userName)
  }, [userName]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSaveComment(editingCommentId);
		}
	};

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const comments = await getCommentsByMatchId(matchId, 0, userToken);
        setComments(comments.result.data.comments);
        console.log(comments.result.data)
			} catch (error) {
				console.error("댓글 목록 불러오기 실패:", error);
			}
		};

		fetchComments();
	}, [matchId]);

	const deleteComment = async (commentId) => {
		try {
			await deleteCommentById(commentId, userToken);
			const updatedComments = comments.filter((comment) => comment.id !== commentId);
			setComments(updatedComments);
		} catch (error) {
			console.error("댓글 삭제 실패:", error);
		}
	};

	const handleEditComment = (commentId, commentContent) => {
		setEditingCommentId(commentId);
		setEditedCommentContent(commentContent);
	};

	const handleSaveComment = async (commentId) => {
		if (editedCommentContent.trim() === "") return;

		try {
			await updateCommentById(commentId, editedCommentContent, userToken);
			const updatedComments = comments.map((comment) =>
				comment.id === commentId ? { ...comment, content: editedCommentContent } : comment
			);
			setComments(updatedComments);
			setEditingCommentId(null);
			setEditedCommentContent("");
			window.location.reload();
		} catch (error) {
			console.error("댓글 수정 실패:", error);
		}
	};

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
            {editingCommentId === comment.id ? (
              <>
                <SelectBox>
                  <Commentinput
                    value={editedCommentContent}
                    onChange={(e) => setEditedCommentContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <div>
                    <DeleteBox>
                      <DeleteTxt onClick={() => handleSaveComment(comment.id)}>저장</DeleteTxt>
                    </DeleteBox>
                  </div>
                </SelectBox>
              </>
            ) : (
              <>
                <CommentTxt>{comment.content}</CommentTxt>
                <div>{comment.writer}</div>
                {comment.writer === userName && (
                  <ControllBox>
                    <DeleteBox>
                      <DeleteTxt onClick={() => handleEditComment(comment.id, comment.content)}>
                        수정
                      </DeleteTxt>
                    </DeleteBox>
                    <DeleteBox onClick={() => deleteComment(comment.id)}>
                      <DeleteTxt>삭제</DeleteTxt>
                    </DeleteBox>
                  </ControllBox>
                )}
              </>
            )}
          </CinnerBox>
        </CommentBox>
      ))}
    </All>
  );
};

export default MatchComment;
