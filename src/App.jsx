import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import SP from "./components/PostModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <SP />
      </BrowserRouter>
    </div>
  );
}

export default App;
