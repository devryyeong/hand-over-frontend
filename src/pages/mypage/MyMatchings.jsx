import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{ getMyMatchingsPosts, toggleMatchStatus } from "../../api/api";
import { useRecoilState } from "recoil";
import { LoginState } from "../../atoms/atoms";

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
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
width: 100%;
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
cursor: pointer;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 8px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: ${(props) => props.border};
border-radius: 10px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15em;
color: ${(props) => props.color || `${COLORS.Navy_100}`};
`

const MyMatchings = () => {
	const [matchingPosts, setMatchingPosts] = useState([]);
  const navigate = useNavigate();
  const [userToken, setUserToken] = useRecoilState(LoginState);

	// 내가 쓴 매칭글
	useEffect(() => {
		const fetchMatchingPosts = async () => {
			try {
				const page = 0;
				const posts = await getMyMatchingsPosts(page, userToken);
				setMatchingPosts(posts.result.data.matches);
			} catch (error) {
				console.error('매칭글 조회 실패:', error);
			}
		};

		fetchMatchingPosts();
	}, []);


	// 매칭 상태변경
  const handleToggleMatchStatus = async (id) => {
    try {
      const updatedStatus = await toggleMatchStatus(id, userToken);

      const updatedMatchingPosts = matchingPosts.map((post) => {
        if (post.id === id) {
          return { ...post, matchStatus: updatedStatus };
        }
        return post;
      });

      setMatchingPosts(updatedMatchingPosts);
			window.location.reload();
    } catch (error) {
      console.error('매칭글 상태 변경 실패:', error);
    }
  };

	const handleMatchingClick = (id) => {
		navigate(`/matches/${id}`);
	}

	return (
		<Layout>
			<All>
				<BoxTitle>내가 쓴 매칭글</BoxTitle>

				<ListBox>
					{matchingPosts.length === 0 && <p>내가 쓴 매칭글이 없습니다.</p>}
					{matchingPosts.map((item, index) => (
						<MatchingBox key={index} onClick={() => handleMatchingClick(item.id)}>
							<MatchingLayout key={index} item={item}>
								<TitleBox>{item.title}</TitleBox>
								<div onClick={(e) => {
                      e.stopPropagation();
                      handleToggleMatchStatus(item.id);
                    }}>
									<StateBox
										border={item.matched === false ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.GRAY}`}
										color={item.matched === false ? `${COLORS.Navy_100}` : `${COLORS.GRAY}`}
									>
										{item.matched === false ? '매칭중' : '매칭완료'}
									</StateBox>
								</div>
							</MatchingLayout>
						</MatchingBox>
					))}
				</ListBox>
			</All>
		</Layout>
	);
};

export default MyMatchings;
