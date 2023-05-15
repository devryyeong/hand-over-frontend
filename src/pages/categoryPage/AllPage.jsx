import React from "react";
import styled from "styled-components";
import heartSrc from "/src/assets/svg/heart.svg";
import moreSrc from "/src/assets/svg/more.svg";
import heartSelectedSrc from "/src/assets/svg/heartSelected.svg";
import COLORS from "../styles/colors";
import { useState, useEffect } from "react";
import axios from "axios";

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
color: ${COLORS.Navy_100};
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
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 8px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
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
height: 39px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 11px 8px 12px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
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
background: ${COLORS.WHITE};
border: ${(props) => props.border};
border-radius: 10px;
`

const TxtTicketName = styled.div`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${COLORS.Navy_100};
`

const TxtSell = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
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
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
`

const LocationDateBox = styled.div`
height: 35px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: ${COLORS.WHITE};;
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
color: ${COLORS.BLACK};;
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
color: ${COLORS.BLACK};;
`

const BoxTicketDetail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 70%;
height: 70px;
background: ${COLORS.WHITE};
border-radius: 10px;
height: 70px;
`

const TxtDetail = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};
`

const BoxMore = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 30px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
width: 76px;
height: 38px;
`

const ListTicketBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
background-color: ${COLORS.Navy_5};
border-radius: 10px;
width: 100%;
`

const BoxBuy = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 124px;
height: 39px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.Navy_100};
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
color: ${COLORS.Navy_100};
`

const TxtNone = styled.div`
margin-top: 50px;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const AllPage = () => {
	const [sortBy, setSortBy] = useState("date");
	// 현재 보여지고 있는 아이템의 개수
	const [numVisibleItems, setNumVisibleItems] = useState(5);
	const [matches, setMatches] = useState([]);
	const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1MDI4MzgyfQ.JIRyKJsGrs81WL6ZeHZriLnAs6LGMomY0FoeTTKBVDg1XPxaRk9-25LwTlhzghxNUk1JFD_KpBphsIq-H9mV5Q";

	useEffect(() => {
		axios.get('http://15.164.244.154/api/matches', {
			headers: {
				'Authorization': `Bearer ${userToken}`
			}
		})
					.then(res => {
							setMatches(res.data);
					})
					.catch(err => {
							console.error(err);
					});
	}, []);


	const categoryList =
			matches.result && matches.result.data && matches.result.data.matches
					? sortBy === "lowPrice"
							? [...matches.result.data.matches].sort((a, b) => a.price - b.price)
							: sortBy === "highPrice"
									? [...matches.result.data.matches].sort((a, b) => b.price - a.price)
									: [...matches.result.data.matches].sort((a, b) => new Date(a.date) - new Date(b.date))
					: [];

	console.log(matches.result)


	const handleClick = (sortType) => {
			setSortBy(sortType);
	};

	const handleMoreButtonClick = () => {
			setNumVisibleItems(numVisibleItems + 5);
			// 5개씩 더 보여줌
	};



	return (
			<div>
					<All>
							<Allin>
									<List>
											<ListBox>
													<ListTxt type="button" onClick={() => handleClick("date")}>
															날짜순
													</ListTxt>
													<ListTxt>|</ListTxt>
													<ListTxt type="button" onClick={() => handleClick("lowPrice")}>
															가격낮은순
													</ListTxt>
													<ListTxt>|</ListTxt>
													<ListTxt type="button" onClick={() => handleClick('highPrice')}>
															가격높은순
													</ListTxt>
											</ListBox>
									</List>

									<ListTicket>
											{categoryList.length === 0 && (
													<TxtNone>일치하는 티켓이 없습니다.</TxtNone>
											)}
											<>
													{categoryList.slice(0, numVisibleItems).map((item, index) => (
															<TicketBox key={index}
																	onClick={() => handleTicketClick(item.id)}
															>
																	<ListTicketBox key={item.seller_ID}>
																			<BoxinTop>
																					<TicketNameBox>
																							<TxtTicketName>{item.category}</TxtTicketName>
																					</TicketNameBox>
																					<SitBox>
																							<SellBox>
																									<TxtSell>판매중</TxtSell>
																							</SellBox>
																							<HeartBox>
																									<img style={{ width: "24px", height: "20px" }} src={heartSrc} />
																							</HeartBox>


																					</SitBox>
																			</BoxinTop>
																			<BoxMidL>
																					<LocationDateBox>
																							<TxtLocationDate>{item.ticketName}</TxtLocationDate>
																					</LocationDateBox>
																			</BoxMidL>
																			<BoxinMid>
																					<BoxMidL>
																							<LocationDateBox>
																									<TxtLocationDate>{item.address}</TxtLocationDate>
																							</LocationDateBox>
																							<LocationDateBox>
																									<TxtLocationDate>{item.startDate} ~ {item.endDate}</TxtLocationDate>
																							</LocationDateBox>
																					</BoxMidL>
																					<BoxMidR>
																							<TxtPrice>{item.price}원</TxtPrice>
																					</BoxMidR>
																			</BoxinMid>

																			<BoxBtm>
																					<BoxTicketDetail>
																							<TxtDetail>{item.detailsContent}</TxtDetail>
																					</BoxTicketDetail>

																					<BoxBuy>
																							<TxtBuy>매 칭 하 기</TxtBuy>
																					</BoxBuy>
																			</BoxBtm>
																	</ListTicketBox>
															</TicketBox>
													))}
											</>

											<BoxMore type="button" onClick={handleMoreButtonClick}>
													<img src={moreSrc} />
											</BoxMore>
									</ListTicket>
							</Allin>
					</All>
			</div>
	)
}

export default AllPage;