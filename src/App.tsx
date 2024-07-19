import { Outlet } from "react-router-dom";
import "./App.scss";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-sintio-light-grey">
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
