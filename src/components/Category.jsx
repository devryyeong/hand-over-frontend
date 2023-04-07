import React from "react";
import styled from "styled-components";
import COLORS from "../pages/styles/colors";
import { useState } from "react";
import { Link } from "react-router-dom";

const All = styled.div`
position: relative;
width: 1000px;
height: 89px;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 30px 10px 20px 15px;
gap: 30px;
`

const CategoryBox = styled.div.attrs({ type: "button" })`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 18px;
gap: 10px;
cursor: pointer;
background: ${(props) => props.background || `${COLORS.WHITE}`};
border: 1px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
width: 91px;
height: 39px;
`

const BoxTxT = styled.span`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
word-spacing:0.8em;
color: ${(props) => props.color || `${COLORS.BLUE_100}`};
`

const BtnLink = styled(Link)`
text-decoration-line: none;
`

export default function Category() {
    //카테고리 버튼
    const [selectedButton, setSelectedButton] = useState(
        parseInt(localStorage.getItem('selectedButton')) || null
    );

    const categoryTxt = [
        {
            id: 1,
            txt: "전 체",
            to: 'all'
        },
        {
            id: 2,
            txt: "숙 소",
            to: 'hotel'
        },
        {
            id: 3,
            txt: "캠 핑",
            to: 'camping'
        },
        {
            id: 4,
            txt: "공 연",
            to: 'show'
        },
        {
            id: 5,
            txt: "기 타",
            to: 'etc'
        }
    ]

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
      };
    

    return (
        <div>
          <All>
            <Allin>
              {categoryTxt.map((item) => (
                <BtnLink key={item.id} to={item.to}>
                  <CategoryBox
                    key={item.id}
                    onClick={() => handleButtonClick(item.id)}
                    className={selectedButton === item.id ? 'active' : ''}
                    background={selectedButton === item.id ? `${COLORS.BLUE_100}` : `${COLORS.WHITE}`}
                  >
                    <BoxTxT color={selectedButton === item.id ? `${COLORS.WHITE}` : `${COLORS.BLUE_100}`}>{item.txt}</BoxTxT>
                  </CategoryBox>
                </BtnLink>
    
              ))}
            </Allin>
          </All>
        </div>
    
    
      )
}