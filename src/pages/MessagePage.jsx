import React from "react";
import styled from "styled-components";
import COLORS from "./styles/colors";
import sendMessageSrc from "../assets/svg/sendMessage.svg";
import { useRecoilValue } from 'recoil';
import { matchAtom } from '../atoms/atoms';

const MessagePage = () => {
  const match = useRecoilValue(matchAtom);

  console.log(match)

  return (
    <ListBox>
      <PostBox>
        글 제목: {`${match.matchName}`}
        <SendMessageIcon src={sendMessageSrc} />
      </PostBox>
      {/* <InnerBox>
        <TopBox>
          {`${match.sellerNickname}`}
          <DateBox>sentAt</DateBox>
        </TopBox>
        <ContentBox>content</ContentBox>
      </InnerBox> */}
    </ListBox>
  );
};

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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.BLACK};
`;

const SendMessageIcon = styled.img.attrs({ alt: "로고" })``;

export default MessagePage;
