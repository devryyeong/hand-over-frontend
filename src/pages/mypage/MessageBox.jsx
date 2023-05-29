import React, {useState, useEffect} from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { getMessages } from "../../api/api";
import { useRecoilState } from "recoil";
import { LoginState } from "../../atoms/atoms";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 15px 10px;
gap: 30px;
width: 100%;
`
const All = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
width: 100%;
`

const BoxTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 20px 100px;
gap: 10px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const ListBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
isolation: isolate;
width: 100%;
`

const InnerBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
width: 100%;
background: ${COLORS.Navy_5};
border-bottom: 1px solid ${COLORS.Navy_100};
`

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
color: ${COLORS.BLACK};`

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
color:${COLORS.GRAY};`

const ContentBox = styled.div`
  width: 900px;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.BLACK};
  overflow-wrap: break-word;
`;


const Pstyle = styled.div`
width: 100%;
text-align: center;
`

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
  const [userToken, setUserToken] = useRecoilState(LoginState);

  // useEffect(() => {
  //   getLastConversation(userToken, userName)
  //     .then(conversation => {
  //       setMessages([conversation]);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       // 에러 처리
  //     });
  // }, []);

  useEffect(() => {
    getMessages(userToken)
      .then(data => {
        // 메시지 데이터를 처리합니다.
        setMessages([data.result.data.messages]);
      })
      .catch(error => {
        // 에러를 처리합니다.
        console.error(error);
      });
  }, []);

  const msg = messages[0]
  console.log(msg)


  return (
    <Layout>
      <All>
        <BoxTitle>
          쪽지함
        </BoxTitle>

        <ListBox>
          {
            msg ?
            msg.map((item, index) => (
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
            )) :(
							<Pstyle>주고받은 쪽지가 없습니다.</Pstyle>
						)
          }

        </ListBox>
      </All>
    </Layout>
  );
}

export default MessageBox;