import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./pages/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
