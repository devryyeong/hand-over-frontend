import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";

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
border-bottom: 1px solid ${COLORS.Navy_100};
`

const CenterBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px 0px 5px 10px;
gap: 10px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

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
color: ${COLORS.BLACK};`

const Noticed = () => {


  return (
    <Layout>
      <All>
        <BoxTitle>
          알림함
        </BoxTitle>

        <ListBox>
          <InnerBox>
            <CenterBox>
              oo님의 매칭글에 댓글이 달렸어요.
              <DateBox>
                2023.03.03
              </DateBox>
            </CenterBox>
          </InnerBox>
          <InnerBox>
            <CenterBox>
              oo님의 매칭글에 댓글이 달렸어요.
              <DateBox>
                2023.03.03
              </DateBox>
            </CenterBox>
          </InnerBox>
          <InnerBox>
            <CenterBox>
              oo님의 매칭글에 댓글이 달렸어요.
              <DateBox>
                2023.03.03
              </DateBox>
            </CenterBox>
          </InnerBox>
        </ListBox>
      </All>
    </Layout>
  );
}

export default Noticed;