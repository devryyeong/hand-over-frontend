//header
import React from "react";
import styled from "styled-components";
import logoSrc from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import searchSrc from "../assets/svg/search.svg";
import myPageSrc from "../assets/svg/myPage.svg";
import alarmSrc from "../assets/svg/alarm.svg";
import COLORS from "../pages/styles/colors";

const All = styled.div`
position: relative;
/* width: 1000px; */
height: 90px;
margin: 0px auto;
`

const Allin = styled(All)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 15px;
isolation: isolate;
`

const Logo = styled.img.attrs({ alt: "로고" })`
`

const LogoLink = styled(Link)`
text-decoration-line: none;
`

const SearchBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px 20px 0px 0px;
width: 420px;
height: 50px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const MypageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 7.5px 5px;
gap: 10px;
background: ${COLORS.WHITE};
`
const SearchBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0;
gap: 10px;
width: 25px;
height: 25px;
border: none;
background-color: ${COLORS.WHITE};
`
const Searchimg = styled.img.attrs({ alt: "검색 버튼" })`
width: 25px;
height: 25px;
`

const Searchinput = styled.input`
background: none;
width: 350px;
margin-left: 10px;
height: 30px;
border: none;
outline: none;
`


export const Header = ()=> {
    
    //카테고리버튼 리셋
    const resetSelectedButton = () => {
        localStorage.setItem("selectedButton", null);
        setSelectedButton(null);
    };

    return (
        <div>
            <All>
                <Allin>
                    <LogoLink to="/" onClick={resetSelectedButton}>
                        <Logo src={logoSrc} />
                    </LogoLink>

                    <SearchBox>
                        <Searchinput/>
                        <SearchBtn>
                            <Searchimg src={searchSrc} />
                        </SearchBtn>
                    </SearchBox>

                    <MypageBox>
                        <div>
                            <img src={alarmSrc} alt="alarm"/>
                        </div>
                        <div>
                            <img src={myPageSrc} alt="mypage"/>
                        </div>
                    </MypageBox>
                </Allin>
            </All>
        </div>
    )
}