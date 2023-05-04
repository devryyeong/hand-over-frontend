import styled from "styled-components";
import ProfileSrc from "../assets/svg/defaultProfile.svg";
import MenuSrc from "../assets/svg/menu.svg";
import ZzimSrc from "../assets/svg/zzim.svg";

import COLORS from "../pages/styles/colors";

const SalesPost = () => {
  const onClickComment = () => {
    console.log("comment");
  };

  const onClickZzim = () => {
    console.log("Zzim");
  };

  return (
    <div>
      <Wrapper>
        <Top>
          <TopLeftWrapper>
            <Profile src={ProfileSrc} alt="default-profile-Img" />
            <Id>thisisme20</Id>
          </TopLeftWrapper>
          <Menu>
            <MenuIcon src={MenuSrc} alt="menu-icon" />
          </Menu>
        </Top>
        <Content>
          Nisi proident cupidatat excepteur non. Veniam dolore id excepteur minim et dolore commodo
          deserunt magna cillum consequat est. Culpa enim excepteur laboris fugiat ad nisi magna
          incididunt tempor do Lorem. Pariatur proident occaecat est consequat in nulla cillum duis
          velit ut nulla incididunt. Cupidatat fugiat qui voluptate consequat sint commodo anim.
          Veniam cillum laborum sit aute tempor et laboris minim quis consequat deserunt eu commodo
          laboris. Ullamco qui ea elit laboris nulla in fugiat dolore veniam quis velit.
          <CommentCount>댓글 3</CommentCount>
          <ButtonArea>
            <Button>
              <ButtonText onClick={onClickComment}>댓글</ButtonText>
            </Button>
            <Button onClick={onClickZzim}>
              <ButtonText>
                찜
                <ZzimIcon src={ZzimSrc} alt="zzim-icon" />
              </ButtonText>
            </Button>
          </ButtonArea>
        </Content>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.BLUE_15};
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Profile = styled.img`
  border-radius: 50px;
  border: 1px solid ${COLORS.BLUE_100};
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

const Menu = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const MenuIcon = styled.img`
  padding-right: 3px;
  height: 24px;
`

const Id = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopLeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${COLORS.WHITE};
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
`;

const CommentCount = styled.div`
  color: ${COLORS.BLUE_100};
  text-align: right;
  padding: 20px 0px;
  font-weight: 400;
  font-size: 12px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 30px;
  padding-top: 10px;
  border-top: 1px solid ${COLORS.BLUE_15};
`;

const Button = styled.button`
  border-radius: 40px;
  border: 1px solid ${COLORS.BLUE_100};
  display: flex;
  width: 63px;
  height: 39px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.div`
  color: ${COLORS.BLUE_100};
  font-weight: 700;
  font-size: 14px;
`;
const ZzimIcon = styled.img`
  width: 13px;
  margin-left: 3px;
`

export default SalesPost;
