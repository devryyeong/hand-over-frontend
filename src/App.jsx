import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import Introduction from "./components/Introduction";
import AllPage from "./pages/categoryPage/AllPage";
import ElderlyPage from "./pages/categoryPage/ElderlyPage";
import KidsPage from "./pages/categoryPage/KidsPage";
import PetPage from "./pages/categoryPage/PetPage";
import EtcPage from "./pages/categoryPage/EtcPage";
import MatchingPostPage from "./pages/MatchingPostPage";
import Signup from "./pages/UserPage/SignupPage";
import Login from "./pages/UserPage/LoginPage";
import Chat from "./pages/Chat";
import DetailPage from "./pages/detail/DetailPage";
import ScrollToTop from "./components/scroll/ScrollToTop";
import MessageBox from "./pages/mypage/MessageBox";
import Noticed from "./pages/mypage/Noticed";
import EditProfile from "./pages/mypage/EditProfile";
import FavoriteMatching from "./pages/mypage/FavoriteMatching";
import MyMatchings from "./pages/mypage/MyMatchings";
import SideBar from "./components/SideBar";
import MessagePage from "./pages/MessagePage";
import EditDetailPage from "./pages/detail/EditDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<AllPage />} />
            <Route path="/elderly" element={<ElderlyPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/pet" element={<PetPage />} />
            <Route path="/etc" element={<EtcPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/matches" element={<MatchingPostPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/postMessage/:id" element={<MessagePage />} />
          <Route path="/matchesEdit/:id" element={<EditDetailPage/>} />

          <Route element={<CategoryLayout />}>
            <Route
              path="/matches/:id"
              element={
                <>
                  <ScrollToTop />
                  <DetailPage />
                </>
              }
            />
          </Route>

          <Route element={<MypageLayout />}>
            <Route path="/messages" element={<MessageBox />} />
            <Route path="/notice" element={<Noticed />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/favoritematching" element={<FavoriteMatching />} />
            <Route path="/mymatchings" element={<MyMatchings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Layout = () => {
  return (
    <>
      <Introduction />
      <Category />
      <div>
        {<Outlet />}
      </div>
    </>
  );
}

const CategoryLayout = () => {
  return (
    <>
      <Category />
      <div>
        {<Outlet />}
      </div>
    </>
  );
}

const MypageLayout = () => {
  return (
    <div style={{display: "flex", flexDirection:"row"}}>
      <SideBar />
          {<Outlet />}
    </div>
  )
}
