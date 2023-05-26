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
import Chat from "./pages/Chat";
import DetailPage from "./pages/detail/DetailPage";
import ScrollToTop from "./components/scroll/ScrollToTop";

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
          <Route path="/matches" element={<MatchingPostPage />} />
          <Route path="/chat" element={<Chat />} />

          <Route element={<CategoryLayout />}>
            <Route path="/matches/:id" element={
              <>
                <ScrollToTop />
                <DetailPage />
              </>
            } />
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