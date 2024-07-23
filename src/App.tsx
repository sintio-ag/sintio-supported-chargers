import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CookieConsent from "./components/ui/CookieConssent";

function App() {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
}

export default App;
