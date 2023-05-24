import React, { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { useState } from "react";
import { userToken } from "../../api/api";

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
padding: 20px 0px;
gap: 15px;
`

const InnerBox = styled.div`
width: 614px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;`

const Txt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const InputBox = styled.input`
width: 430px;
height: 44px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
padding-left: 5px;

&:focus{
  outline: none;
  border: 2px solid ${COLORS.Navy_100};
}`

const BtnLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 100%;
`

const Btn = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px 8px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 30px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};`

const CheckPasswordBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const ErrorTxt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 0px 10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #FF0000;
`

const EditProfile = () => {
	const [password, setPassword] = useState("");
	const [nickname, setNickname] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};



	return (
		<Layout>
			<All>
				<BoxTitle>
					프로필 수정하기
				</BoxTitle>

				<ListBox>
					<form onSubmit={handleSubmit}>
						<InnerBox>
							<Txt>
								닉네임 :
							</Txt>
							<InputBox type="text"
								id="nickname"
								value={nickname}
								onChange={(e) => setNickname(e.target.value)} />
						</InnerBox>
						<InnerBox>
							<Txt>
								비밀번호 :
							</Txt>
							<InputBox type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)} />
						</InnerBox>

						<InnerBox >
							<Txt>
								비밀번호 확인 :
							</Txt>
							<CheckPasswordBox>
								<InputBox type="password"
									id="confirmPassword"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)} />
								{passwordError && (
									<ErrorTxt>
										비밀번호가 일치하지 않습니다.
									</ErrorTxt>
								)}
							</CheckPasswordBox>
						</InnerBox>

					</form>
				</ListBox>

				<BtnLayout>
					<Btn type="submit" onClick={handleSubmit}>
						확인
					</Btn>
				</BtnLayout>
			</All>
		</Layout>
	);
}

export default EditProfile;