import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import AllPage from "./pages/categoryPage/AllPage";
import SP from "./components/SalesPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Routes>
          {/* <Route path="/all" element={<AllPage />} /> */}
        </Routes>
        <SP />
      </BrowserRouter>
    </div>
  );
}

export default App;
