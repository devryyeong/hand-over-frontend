import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import SP from "./components/Button";
import Introduction from "./components/Introduction";
import AllPage from "./pages/categoryPage/AllPage";
import ElderlyPage from "./pages/categoryPage/ElderlyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<AllPage />} />
            <Route path="/elderly" element={<ElderlyPage />} />
          </Route>
        </Routes>
        {/* <SP /> */}
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