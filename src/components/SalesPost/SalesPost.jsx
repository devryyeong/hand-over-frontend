import * as S from "./SalesPost.styled";
import ProfileImg from "../../assets/icons/default-profileImg-icon.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import ZzimIcon from "../../assets/icons/zzim-icon.svg";

const SalesPost = () => {
  const onClickComment = () => {
    console.log("comment");
  };

  const onClickZzim = () => {
    console.log("Zzim");
  };

  return (
    <div>
      <S.Wrapper>
        <S.Top>
          <S.TopLeftWrapper>
            <S.Profile src={ProfileImg} alt="default profileImg" />
            <S.Id>thisisme20</S.Id>
          </S.TopLeftWrapper>
          <S.Menu>
            <img src={MenuIcon} alt="menu icon" style={{ paddingRight: "3px" }} />
          </S.Menu>
        </S.Top>
        <S.Content>
          Nisi proident cupidatat excepteur non. Veniam dolore id excepteur minim et dolore commodo
          deserunt magna cillum consequat est. Culpa enim excepteur laboris fugiat ad nisi magna
          incididunt tempor do Lorem. Pariatur proident occaecat est consequat in nulla cillum duis
          velit ut nulla incididunt. Cupidatat fugiat qui voluptate consequat sint commodo anim.
          Veniam cillum laborum sit aute tempor et laboris minim quis consequat deserunt eu commodo
          laboris. Ullamco qui ea elit laboris nulla in fugiat dolore veniam quis velit.
          <S.CommentCount>댓글 3</S.CommentCount>
          <S.ButtonArea>
            <S.Button>
              <S.ButtonText onClick={onClickComment}>댓글</S.ButtonText>
            </S.Button>
            <S.Button onClick={onClickZzim}>
              <S.ButtonText>
                찜
                <img src={ZzimIcon} style={{ paddingLeft: "3px" }} />
              </S.ButtonText>
            </S.Button>
          </S.ButtonArea>
        </S.Content>
      </S.Wrapper>
    </div>
  );
};

export default SalesPost;
