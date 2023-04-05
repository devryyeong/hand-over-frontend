//header
import React from "react";
import styled from "styled-components";
import logoSrc from "../assets/logo-icon.svg";
import { Link } from "react-router-dom";
import searchSrc from "../assets/svg/search.svg";
import myPageSrc from "../assets/svg/myPage.svg";
import sellTicketSrc from "../assets/svg/sellTicket.svg";
import COLORS from "../pages/styles/colors";

const All = styled.div`
position: relative;
width: 1000px;
height: 90px;
margin: 0px auto;
`

const Allin = styled(All)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 15px;
border-bottom: 1px solid ${COLORS.BLUE_30};
`

const Logo = styled.img.attrs({ alt: "로고" })`
width: 124.85px;
height: 44.42px;
`

const LogoLink = styled(Link)`
text-decoration-line: none;
`

const SearchBox = styled.div`
width: 420px;
height: 50px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px 10px 15px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.BLUE_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const MypageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 7.5px 15px;
gap: 10px;
width: 120px;
height: 52px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.BLUE_100};
border-radius: 40px;
`
const SearchBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
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
width: 350px;
height: 30px;
border: none;
outline: none;
`

const SellTicket = styled.img.attrs({ alt: "sellTicketPage" })`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px 2px;
gap: 10px;
width: 39px;
height: 37px;
`

const Mypage = styled.img.attrs({ alt: "MyPage" })`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px;
gap: 10px;
width: 39px;
height: 37px;
`

export default function Header() {

    //렌더링
    return (
        <div>
            <All>
                <Allin>
                    <LogoLink to="/">
                        <Logo src={logoSrc} />
                    </LogoLink>

                    <SearchBox>
                        <Searchinput />
                        <SearchBtn>
                            <Searchimg src={searchSrc} />
                        </SearchBtn>
                    </SearchBox>

                    <MypageBox>
                        <div>
                            <SellTicket src={sellTicketSrc} />
                        </div>
                        <div>
                            <Mypage src={myPageSrc} />
                        </div>
                    </MypageBox>
                </Allin>
            </All>
        </div>
    )
}