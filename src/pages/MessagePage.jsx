import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "./styles/colors";
import sendMessageSrc from "../assets/svg/sendMessage.svg";
import SendModal from "../components/modal/SendModal";
import { getMessages, getMatchById } from "../api/api";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../atoms/atoms";

const MessagePage = () => {
  const { id } = useParams();
  const matchingId = id;
  const [openModal, setOpenModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [getM, setGetM] = useState([]);
  const [userToken, setUserToken] = useRecoilState(LoginState);

  useEffect(() => {
		const fetchMatch = async () => {
			try {
				const matchData = await getMatchById(matchingId);
				setGetM(matchData.result.data);
			} catch (error) {
			}
		};

		fetchMatch();
	}, [matchingId]);

  console.log(getM);


  useEffect(() => {
    getMessages(userToken)
      .then(data => {
        // 메시지 데이터를 처리합니다.
        setMessages(data.result.data.messages);
      })
      .catch(error => {
        // 에러를 처리합니다.
        console.error(error);
      });
  }, []);
  console.log(messages)

  const filteredData = messages.filter((item) => item.receiverUsername === getM.sellerNickname);

  console.log(filteredData);



  return (
    <ListBox>
      <PostBox>
        글 제목: {`${getM.matchName}`}
        <SendMessageIcon src={sendMessageSrc} onClick={() => setOpenModal(!openModal)} />
      </PostBox>
      {
        filteredData.length >0 ?
          filteredData.map((item, index) => (
            <InnerBox key={index}>
              <TopBox>
                {item.receiverUsername}
                <DateBox>
                  {item.createAt}
                </DateBox>
              </TopBox>
              <ContentBox>
                {item.content}
              </ContentBox>
            </InnerBox>
          )) : (
            <Pstyle>주고받은 쪽지가 없습니다.</Pstyle>
          )
      }
      {
        openModal &&
        <ModalWrapper>
          <SendModal sellerNickname={getM.sellerNickname} onClose={() => setOpenModal(false)} />
        </ModalWrapper>

      }
    </ListBox>

  );
};

const Pstyle = styled.div`
width: 100%;
padding-top: 50px;
text-align: center;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
	background-color: ${COLORS.WHITE};
`

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  width: 100%;
`;

const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 30px;
  width: 100%;
  background: ${COLORS.Navy_5};
  border-bottom: 1px solid ${COLORS.Navy_100};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.Navy_100};
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  background: ${COLORS.WHITE};
  border-bottom: 1px solid ${COLORS.Navy_100};
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px 5px 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.BLACK};
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.GRAY};
`;

const ContentBox = styled.div`
  width: 1000px;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.BLACK};
  overflow-wrap: break-word;
`;


const SendMessageIcon = styled.img.attrs({ alt: "로고" })``;

export default MessagePage;
