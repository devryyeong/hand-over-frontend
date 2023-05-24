import React from "react";
import styled from "styled-components";
import COLORS from "../styled/colors";

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
color: ${COLORS.BLACK};`

const MessageBox = () => {

  // //발신함
  // checkSentMessages(userToken)

  // //수신함
  // checkRecieveMessages(userToken)


  return (
    <Layout>
      <All>
        <BoxTitle>
          쪽지함
        </BoxTitle>

        <ListBox>
          <InnerBox>
            <TopBox>
              닉네임 453
              <DateBox>
                2023.04.03
              </DateBox>
            </TopBox>
            <ContentBox>
              넵 알겠습니다.
            </ContentBox>
          </InnerBox>
          <InnerBox>
            <TopBox>
              닉네임 453
              <DateBox>
                2023.04.03
              </DateBox>
            </TopBox>
            <ContentBox>
              넵 알겠습니다.
            </ContentBox>
          </InnerBox>
          <InnerBox>
            <TopBox>
              닉네임 453
              <DateBox>
                2023.04.03
              </DateBox>
            </TopBox>
            <ContentBox>
              넵 알겠습니다.
            </ContentBox>
          </InnerBox>
          <InnerBox>
            <TopBox>
              닉네임 453
              <DateBox>
                2023.04.03
              </DateBox>
            </TopBox>
            <ContentBox>
              넵 알겠습니다.
            </ContentBox>
          </InnerBox>
        </ListBox>
      </All>
    </Layout>
  );
}

export default MessageBox;