import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import COLORS from "../pages/styles/colors";

const All = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 30px 10px 20px 15px;
gap: 30px;
width: 1000px;
`

const CategoryBox = styled.div.attrs({ type: "button" })`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 17px 10px 20px;
gap: 10px;
background: ${COLORS.WHITE};
border: ${(props)=>props.border || `1px solid ${COLORS.Navy_100}`};
border-radius: 40px;
`

const BoxTxT = styled.span`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${(props) => props.color || `${COLORS.GRAY}`};
`

const BtnLink = styled(Link)`
text-decoration-line: none;
`

const Category = () => {
  const categoryTxt = [
    {
      id: 1,
      txt: "전 체",
      to: ''
    },
    {
      id: 2,
      txt: "노인돌봄",
      to: 'elderly'
    },
    {
      id: 3,
      txt: "아이돌봄",
      to: 'kids'
    },
    {
      id: 4,
      txt: "반려동물",
      to: 'pet'
    },
    {
      id: 5,
      txt: "기 타",
      to: 'etc'
    }
  ];
  
    //카테고리 버튼 기본값 설정
    const [selectedButton, setSelectedButton] = useState(
        parseInt(localStorage.getItem('selectedButton')) || 1
    );

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    
        localStorage.setItem('selectedButton', buttonId);
        filterResults(searchTerm);
    
        // URL 변경
        const queryParam = queryString.stringify({ q: searchTerm });
        navigate(`/?${queryParam}`, { replace: true });
    
      };
      
    
      useEffect(() => {
        const buttonId = categoryTxt.findIndex((item) => item.to === location.pathname.substring(1));
        setSelectedButton(buttonId + 1);
      }, [location.pathname, categoryTxt]);

    return (
        <div>
          <All>
              {categoryTxt.map((item) => (
                <BtnLink className="btn" key={item.id} to={item.to}>
                  <CategoryBox
                    key={item.id}
                    onClick={() => handleButtonClick(item.id)}
                    className={selectedButton === item.id ? 'active' : ''}
                    border={selectedButton === item.id ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.WHITE}`}
                  >
                    <BoxTxT color={selectedButton === item.id ? `${COLORS.Navy_100}` : `${COLORS.GRAY}`}>
                      {item.txt}
                    </BoxTxT>
                  </CategoryBox>
                </BtnLink>
              ))}
          </All>
        </div>
      );
    }

    export default Category;