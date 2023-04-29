import React from "react";
import styled from "styled-components";
import HeartSrc from "../assets/svg/heart.svg";
import MoreSrc from "../assets/svg/more.svg";
import HeartSelectedSrc from "../assets/svg/heartSelected.svg";
import categoryDummy from "../../dummy/categorydummy";

const All = styled.div`
position: relative;
width: 1000px;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 40px;
`

const List = styled.div`
cursor: pointer;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 10px 20px 5px;
gap: 10px;
`

const ListTicket = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 15px;
gap: 30px;

`

const ListBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
height: 36px;
`

const ListTxt = styled.div`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #1C65F3;
`

const TicketBox = styled.div`
width: 100%;
text-decoration: none;
`

const BoxinTop = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 10px;

`

const BoxinMid = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px 0px 0px;
gap: 50px;
`

const BoxBtm = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px 0px 0px;
gap: 83px;
`

const TicketNameBox = styled.div`
height: 39px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
border-radius: 10px;
`

const SitBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px;
gap: 10px;

`

const SellBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 13px 10px 14px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
border-radius: 10px;

`

const HeartBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
gap: 10px;
width: 38px;
height: 38px;
background: #FFFFFF;
border: 1px solid #C9C9C9;
border-radius: 10px;
`

const TxtTicketName = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: flex-end;
text-align: center;
letter-spacing: 0.05em;
color: #222222;
`

const TxtSell = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #1C65F3;
`

const BoxMidL = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;
`

const BoxMidR = styled.div`
height: 35px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
border-radius: 10px;
`

const LocationDateBox = styled.div`
height: 35px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border-radius: 10px;
`

const TxtLocationDate = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15em;
color: #222222;
`

const TxtPrice = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #222222;
`

const BoxTicketDetail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 70%;
height: 70px;
background: #FFFFFF;
border-radius: 10px;
height: 70px;
`

const TxtDetail = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #222222;
`

const BoxMore = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
`

const ListTicketBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 20px;
background: rgba(28, 101, 243, 0.05);
border-radius: 10px;
width: 100%;
height: 205px;
`

const BoxBuy = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
background: #FFFFFF;
border: 2px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const TxtBuy = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #1C65F3;
`

const TxtNone = styled.div`
margin-top: 50px;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
`

export default function AllPage(){
    return(
        <div>
            <All>
                <Allin>
                    <List>
                        <ListBox>
                            <ListTxt type="button">
                                날짜순
                            </ListTxt>
                            <ListTxt>|</ListTxt>
                            <ListTxt type="button">
                                가격낮은순
                            </ListTxt>
                            <ListTxt>|</ListTxt>
                            <ListTxt type="button">
                                가격높은순
                            </ListTxt>
                        </ListBox>
                    </List>

                    <ListTicket>
                        <>
                            {/* {categoryList.slice(0, numVisibleItems).map((item, index) => ( */}
                            {categoryDummy.map((item, index) => (
                                <TicketBox key={index}>
                                    <ListTicketBox key={item.seller_ID}>
                                        <BoxinTop>
                                            <TicketNameBox>
                                                <TxtTicketName>{item.ticket_name}</TxtTicketName>
                                            </TicketNameBox>
                                            <SitBox>
                                                <SellBox type="button">
                                                    <TxtSell>{item.ticket_state}</TxtSell>
                                                </SellBox>
                                                <HeartBox>
                                                    <img src={HeartSrc} alt="favorite" />
                                                </HeartBox>
                                            </SitBox>
                                        </BoxinTop>

                                        <BoxinMid>
                                            <BoxMidL>
                                                <LocationDateBox>
                                                    <TxtLocationDate>{item.ticket_place}</TxtLocationDate>
                                                </LocationDateBox>
                                                <LocationDateBox>
                                                    <TxtLocationDate>{item.ticket_date}</TxtLocationDate>
                                                </LocationDateBox>
                                            </BoxMidL>
                                            <BoxMidR>
                                                <TxtPrice>{item.ticket_price}원</TxtPrice>
                                            </BoxMidR>
                                        </BoxinMid>

                                        <BoxBtm>
                                            <BoxTicketDetail>
                                                <TxtDetail>{item.ticket_detail}</TxtDetail>
                                            </BoxTicketDetail>

                                            <BoxBuy>
                                                <TxtBuy>구 매 하 기</TxtBuy>
                                            </BoxBuy>
                                        </BoxBtm>
                                    </ListTicketBox>
                                </TicketBox>
                            ))}
                        </>



                        <BoxMore type="button">
                            <img src={MoreSrc} />
                        </BoxMore>
                    </ListTicket>
                </Allin>
            </All>
        </div>
    )
}