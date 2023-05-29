import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSrc from '../assets/svg/logo.svg';
import searchSrc from '../assets/svg/search.svg';
import myPageSrc from '../assets/svg/myPage.svg';
import { handleSearch } from '../api/api';
import COLORS from "../pages/styles/colors";
import alarmSrc from "../assets/svg/alarm.svg";
import { useRecoilState } from 'recoil';
import { searchResultState, LoginState } from "../atoms/atoms";
import { useHover } from "../hooks/useHover";

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

const SearchBox = styled.form`
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
`;

const LoginButton = styled.a`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${COLORS.Navy_100};
cursor: pointer;
border: 1px solid ${COLORS.Navy_100};
border-radius: 40px;
padding: 10px;
text-decoration: none;
`;

const LogoutButton = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${COLORS.Navy_100};
cursor: pointer;
padding: 0px 10px;
`


const Header = () => {
	const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);
  const [userToken, setUserToken] = useRecoilState(LoginState);
  const [ref, hover] = useHover();
	const navigate = useNavigate();

	const handleSearchControl = async (e) => {
		e.preventDefault();
		try {
			const response = await handleSearch(searchTerm, userToken);
			setSearchResult(response);

			const params = new URLSearchParams();
			params.set('q', searchTerm);
			
			const newUrl = `/?${params.toString()}`;
			navigate(newUrl, { replace: true });
		} catch (error) {
			console.error(error);
		}
	};

	//카테고리버튼 리셋
	const resetSelectedButton = () => {
		localStorage.setItem('selectedButton', null);
		setSelectedButton(null);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("recoil-persist");
    window.location.replace("/");
  };

	return (
    <div>
      <All>
        <Allin>
          <LogoLink to="/" onClick={resetSelectedButton}>
            <Logo src={logoSrc} />
          </LogoLink>

          <SearchBox onSubmit={handleSearchControl}>
            <Searchinput
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchBtn type="submit" onSubmit={handleSearchControl}>
              <Searchimg src={searchSrc} />
            </SearchBtn>
          </SearchBox>

          {typeof userToken === "string" ? (
            <MypageBox ref={ref}>
              <Link to="/messages">
                <SellTicket src={alarmSrc} />
              </Link>
              <Link to="/favoritematching">
                <Mypage src={myPageSrc} />
              </Link>
              <LogoutButton onClick={handleLogout}>LOG OUT</LogoutButton>
            </MypageBox>
          ) : (
            <LoginButton href="/login">LOG IN</LoginButton>
          )}
        </Allin>
      </All>
    </div>
  );
};

export default Header;