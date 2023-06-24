import BottomBar from "components/BottomBar";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import "./style.css";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
