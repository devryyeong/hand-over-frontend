import React from "react";
import styled from "styled-components";
import MatchDetail from "../../components/detail/MatchDetail";
import MatchComment from "../../components/detail/MatchComment";

const All = styled.div`
position: relative;
width: 100%;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 40px;
`

const DetailPage = () => {
  return (
    <div>
        <All>
            <Allin>
                <MatchDetail />
                <MatchComment />
            </Allin>
        </All>

    </div>
)
}

export default DetailPage;