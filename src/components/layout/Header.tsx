import { useState } from "react";
import { Link } from "react-router-dom";
import { SintioLogoYellowWhite } from "../illustrations/SintioLogoYellowWhiteIllustration";
import ChargerNotListedButton from "../ui/ChargerNotListedButton";

function Header() {
  const [state, setState] = useState(false);

  return (
    <nav className="w-full border-b bg-sintio-dark-blue md:static md:border-none md:text-sm">
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link to={import.meta.env.VITE_GHPAGES_BASE_URL}>
            <SintioLogoYellowWhite />
          </Link>
          <div className="md:hidden">
            <button
              className="text-sintio-light-grey hover:text-sintio-yellow"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-sintio-yellow">
              <Link
                to={import.meta.env.VITE_GHPAGES_BASE_URL}
                className="block"
              >
                Home
              </Link>
            </li>
            <li className="text-white hover:text-sintio-yellow">
              <Link
                to={`${import.meta.env.VITE_GHPAGES_BASE_URL}contact`}
                className="block"
              >
                Contact
              </Link>
            </li>
            <div className="items-center gap-x-6 space-y-3 md:flex md:space-y-0">
              <li>
                <ChargerNotListedButton />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;