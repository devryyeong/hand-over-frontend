import React from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../atoms/atoms";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import handsSrc from "../assets/svg/hands.svg";
import babySrc from "../assets/svg/baby.svg";
import petSrc from "../assets/svg/pet.svg";

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
align-items: center;
padding: 35px 0px 20px;
gap: 15px;
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
gap: 10px;
width: 180px;`

const MatchingDiv = styled.a`
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
text-decoration: none;
`

const MBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 10px;
width: 100%;
`

const MiddleBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 20px;
gap: 40px;
isolation: isolate;
width: 100%;
`;

const MidBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 10px;
gap: 30px;
`

const DetailTxt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: flex-end;
color: ${COLORS.WHITE};
`;

const DetailInTxt = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  white-space: nowrap;
  color: ${COLORS.WHITE};
  z-index: 2;
`;

const HandSrc = styled.img`
width: 183px;
height: 113.59px;
`

const PetSrc = styled.img`
width: 100px;
height: 100px;
`

const BabySrc = styled.img`
width: 100px;
height: 100px;
`

const PetL = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 100px;
height: 330px;
`

const Introduction = () => {
  const [userToken, setUserToken] = useRecoilState(LoginState);

  return (
    <div>
      <IntroLayout>
        <IntroBox>
          <BoardTxt>
            거동이 불편하신 노인, 장시간 외출로 케어가 필요한 반려동물, 아이들 하원 도우미 등<br />{" "}
            케어 서비스를 필요로 하는 사용자들과 케어시터들을 매칭해드리는 서비스입니다.
          </BoardTxt>
          <MiddleBox>
            <MBox>
              <PetL>
                <PetSrc alt="pet" src={petSrc} />
              </PetL>
              <MidBox>
                <DetailTxt>
                  예상보다 긴 외출에 혼자남은 반려동물의 식사가 걱정된다면?<br />
                  부모님의 병원을 모셔다 줄 여력이 되지 않는다면?<br />
                  출근을 앞두고 급하게 아이의 준비물을 학교에 가져다줘야한다면?<br />
                  예산과 선호사항에 맞는 매칭글을 HandOver를 통해 올려보세요!
                </DetailTxt>
                <HandSrc alt="hands" src={handsSrc} />
                <DetailInTxt>
                  여유 시간에 돈을 벌면서 누군가에게 도움을 주고 싶으신가요? <br />
                  HandOver를 통해 빠르고 쉬운 케어 서비스를 제공해보세요!
                </DetailInTxt>
              </MidBox>
              <div style={{width: "100px"}}>
              <BabySrc alt="baby" src={babySrc} />
              </div>
            </MBox>
          </MiddleBox>
          <MatchingBox>
            {typeof userToken === "string" ? (
              <MatchingDiv href="/matches">매칭글 작성하기</MatchingDiv>
            ) : (
              <MatchingDiv href="/login">로그인하고 매칭글 작성하기</MatchingDiv>
            )}
          </MatchingBox>
        </IntroBox>
      </IntroLayout>
    </div>
  );
}

export default Introduction;