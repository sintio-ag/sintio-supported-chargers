import { useCookies } from "react-cookie";
import { CookieIllustration } from "../illustrations/CookieIllustration";

const CookieConsent = () => {
  const [, setCookie] = useCookies(["cookieConsent"]);

  const giveCookieConsent = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Add one year to the current date
    setCookie("cookieConsent", true, { path: "/", expires });
  };

  return (
    <div className="prose fixed bottom-0 right-0 mb-4 mr-4 w-64">
      <div className="rounded-lg border bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <CookieIllustration height="30px" />
            <span className="pl-2 text-sm font-bold">Cookie Policy</span>
          </div>
        </div>
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this
          site, you agree to our use of cookies.
        </p>
        <button
          onClick={giveCookieConsent}
          className="rounded-lg bg-sintio-yellow px-3 py-2 text-sintio-black hover:bg-sintio-light-blue-1 hover:text-white active:bg-sintio-light-blue-1 md:inline"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
