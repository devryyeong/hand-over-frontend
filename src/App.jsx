import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
