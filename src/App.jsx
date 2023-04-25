import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Routes>
          <Route path="/all" element={<AllPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
