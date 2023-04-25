import React from "react";
import styled from "styled-components";
import HeartSrc from "../assets/svg/heart.svg";
import MoreSrc from "../assets/svg/more.svg";
import HeartSelectedSrc from "../assets/svg/heartSelected.svg";
import categoryDummy from "../dummy/categorydummy";

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
                            {categoryDummy.slice(0, numVisibleItems).map((item, index) => (
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