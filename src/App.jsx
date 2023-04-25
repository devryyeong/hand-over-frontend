import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
      </BrowserRouter>
    </div>
  );
}

export default App;
