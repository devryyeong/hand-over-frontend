import React from "react";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import handsSrc from "../assets/svg/hands.svg";

const IntroLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 60px 10px;
gap: 10px;
`

const IntroBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 35px 0px 20px;
gap: 10px;
width: 100%;
background: ${COLORS.Navy_100};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;`

const BoardTxt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 20px;
gap: 10px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 35px;
display: flex;
align-items: flex-end;
color: ${COLORS.WHITE};`


const MatchingBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;`

const MatchingDiv = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px 20px;
gap: 10px;
border: none;
background: ${COLORS.WHITE};
border-radius: 10px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: flex-end;
color: ${COLORS.Navy_100};
`

const MiddleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 14px 20px;
`;

const DetailTxt = styled.div`
  position: relative;
  height: 113.59px;
  /* width: 360px; */
  left: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: ${COLORS.WHITE};
  z-index: 2;
  white-space: nowrap;
`;

const DetailInTxt = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-style: normal;
  height: 113.59px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  white-space: nowrap;
  color: ${COLORS.WHITE};
  z-index: 2;
`;

const HandSrc = styled.img`
z-index: 1;
position: relative;
left: 30px;
`

const Introduction = () => {
	return (
		<div>
			<IntroLayout>
				<IntroBox>
					<BoardTxt>거동이 불편하신 노인, 장시간 외출로 케어가 필요한 반려동물, 아이들 하원 도우미 등 케어 서비스를 필요로 하는 사용자들과 케어시터들을 매칭해드리는 서비스입니다.</BoardTxt>
					<MiddleBox>
						<DetailTxt alignItems="flexStart">
							사랑하는 가족을 돌봐줄 케어시터를 찾고 계신가요? <br />
							예산과 선호사항에 맞는 매칭글을 올려보세요!
						</DetailTxt>
						<HandSrc alt="hands" src={handsSrc} />
						<DetailInTxt alignItems="flexEnd">
							여유 시간에 돈을 벌면서 누군가에게 도움을 주고 싶으신가요? <br />
							HandOver를 통해 빠르고 쉬운 케어 서비스를 제공해보세요!
						</DetailInTxt>
					</MiddleBox>
					<MatchingBox>
						<MatchingDiv>
							매칭글 작성하기
						</MatchingDiv>

					</MatchingBox>
				</IntroBox>
			</IntroLayout>
		</div>
	)
}

export default Introduction;