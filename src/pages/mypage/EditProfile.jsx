import React, { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { useState } from "react";
import { userToken, updateProfile } from "../../api/api";
import OutModal from "../../components/modal/OutModal";

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
/* padding: 10px;
gap: 10px; */
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

const OutBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 10px;
width: 100%;
`

const OutBtn = styled.button`
text-decoration-line: underline;
border: none;
background-color: ${COLORS.WHITE};
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.GRAY};
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
	background-color: ${COLORS.WHITE};
`

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [outModal, setOutModal] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
      return; // 비밀번호가 일치하지 않으면 함수 종료
    } else {
      setPasswordError(false);
    }

    try {
      await updateProfile(nickname, password, userToken);
      // 프로필 업데이트 성공
    } catch (error) {
      // 프로필 업데이트 실패
      console.error(error);
    }
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

        <OutBox>
          <OutBtn type="button" onClick={() => setOutModal(!outModal)}>회원탈퇴하기</OutBtn>
        </OutBox>
        {
          outModal && 
          <ModalWrapper>
            <OutModal onClose={() => setOutModal(false)} />
          </ModalWrapper>
        }
      </All>
    </Layout>
  );
}

export default EditProfile;