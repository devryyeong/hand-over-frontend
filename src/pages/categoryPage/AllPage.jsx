import styled from "styled-components";
import heartSrc from "../../assets/svg/heart.svg";
import moreSrc from "../../assets/svg/more.svg";
import heartSelectedSrc from "../../assets/svg/heartSelected.svg";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import COLORS from "../styles/colors";
import { getMatches } from '../../api/api';
import { getFavoriteMatches } from "../../api/api";
import { toggleFavoriteMatch } from "../../api/api";
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../atoms/atoms';
import { useRecoilState } from "recoil";
import { LoginState } from "../../atoms/atoms";


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
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 9px;
gap: 10px;
background: ${COLORS.WHITE};
border: ${(props) => props.border};
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
color: ${(props) => props.color};
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
padding-bottom: 50px;
color: ${COLORS.BLACK};
`

const AllPage = () => {
	const [sortBy, setSortBy] = useState("date");
	const [numVisibleItems, setNumVisibleItems] = useState(5);
	const [favorites, setFavorites] = useState([]);
	const [matches, setMatches] = useState([]);
	const searchResult = useRecoilValue(searchResultState);
  const navigate = useNavigate();
  const [userToken, setUserToken] = useRecoilState(LoginState);


	//데이터 API
	useEffect(() => {
		getMatches(userToken)
			.then(res => {
				setMatches(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);


	// 기존 즐겨찾기 목록
	useEffect(() => {
		const favorites = async () => {
			try {
				const response = await getFavoriteMatches(userToken);
				setFavorites(response.data.result.data.matches.map((item) => item.id));
			} catch (error) {
				console.error(error);
			}
		};

		favorites();
	}, []);


	// 하트 버튼 클릭 시 호출되는 함수
	const handleFavoriteClick = (matchingId) => {
		if (favorites.includes(matchingId)) {
			// 이미 즐겨찾기에 추가된 티켓일 경우
			toggleFavoriteMatch(userToken, matchingId)
				.then(() => {
					const newFavorites = favorites.filter((id) => id !== matchingId);
					setFavorites(newFavorites);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			// 즐겨찾기에 추가되지 않은 티켓일 경우
			toggleFavoriteMatch(userToken, matchingId)
				.then(() => {
					const newFavorites = [...favorites, matchingId];
					setFavorites(newFavorites);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	};


	//날짜순, 가격순 나열
	let categoryList = [];
	if (searchResult?.result?.data?.matches) {
		categoryList = [...searchResult.result.data.matches];
	} else if (matches?.result?.data?.matches) {
		categoryList = [...matches.result.data.matches];
	}

	categoryList.sort((a, b) => {
		if (sortBy === "lowPrice") {
			return a.price - b.price;
		} else if (sortBy === "highPrice") {
			return b.price - a.price;
		} else {
			return new Date(a.startDate) - new Date(b.startDate);
		}
	});


	const handleClick = (sortType) => {
		setSortBy(sortType);
	};


	//more 버튼
	const handleMoreButtonClick = () => {
		setNumVisibleItems(numVisibleItems + 5);
	};


	const handleMatchClick = (id) => {
		navigate(`/matches/${id}`);
	}


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
						{searchResult && searchResult.result && searchResult.result.data && searchResult.result.data.matches.length === 0 && (
							<TxtNone>일치하는 티켓이 없습니다.</TxtNone>
						)}

						<>
							{categoryList.slice(0, numVisibleItems).map((item, index) => (
								<TicketBox key={index}
									onClick={() => handleMatchClick(item.id)}
								>
									<ListTicketBox key={item.seller_ID}>
										<BoxinTop>
											<TicketNameBox>
												<TxtTicketName>{item.category}</TxtTicketName>
											</TicketNameBox>
											<SitBox>
												<SellBox border={item.matched === false ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.GRAY}`}>
													<TxtSell color={item.matched === false ? `${COLORS.Navy_100}` : `${COLORS.GRAY}`}>
														{item.matched === false ? "매칭중" : "매칭완료"}
													</TxtSell>
												</SellBox>
												<HeartBox onClick={(event) => {
													event.stopPropagation(); // 이벤트 버블링 방지
													handleFavoriteClick(item.id);
												}} border={favorites.includes(item.id) ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.GRAY}`}>
													<img style={{ width: "24px", height: "20px" }} src={favorites.includes(item.id) ? heartSelectedSrc : heartSrc} />
												</HeartBox>


											</SitBox>
										</BoxinTop>
										<BoxMidL>
											<LocationDateBox>
												<TxtLocationDate>{item.matchName}</TxtLocationDate>
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

