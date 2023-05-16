import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { useEffect, useState } from "react";
import axios from "axios";

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
align-items: center;
padding: 10px;
gap: 20px;
width: 100%;
`

const MatchingBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
width: 100%;
background: ${COLORS.Navy_5};
border-radius: 10px;
`

const MatchingLayout = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
`

const TitleBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: ${COLORS.WHITE};
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const StateBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 8px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15em;
color: ${COLORS.Navy_100};
`

const FavoriteMatching = () => {
    const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1MDg4OTE4fQ.3sJNScI7PrxyHmc5xEaeWyrN_zTw2x4gcoLlT7U2PahXwMYDsr3oMulYuTPWBajtIg-cmFbVs1goeZOSLZvU2g";
    const [myFavorites, setMyFavorites] = useState([]);
    
    useEffect(() => {
        const favorites = async () => {
          try {
            const response = await axios.get('http://15.164.244.154/api/matches/favorites', {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            setMyFavorites(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        favorites();
      }, []);

      console.log(myFavorites)

      return (
        <Layout>
          <All>
            <BoxTitle>내가 찜한 매칭글</BoxTitle>
            <ListBox>
              {myFavorites.length === 0 ? (
                <p>즐겨찾기에 추가된 매칭글이 없습니다.</p>
              ) : (
                myFavorites.result &&
                myFavorites.result.data &&
                myFavorites.result.data.matches &&
                myFavorites.result.data.matches.map((item, index) => (
                  <MatchingBox key={index}>
                    <MatchingLayout key={index} item={item}>
                      <TitleBox>{item.ticketName}</TitleBox>
                      <StateBox>판매중</StateBox>
                    </MatchingLayout>
                  </MatchingBox>
                ))
              )}
            </ListBox>
          </All>
        </Layout>
      );
}

export default FavoriteMatching;