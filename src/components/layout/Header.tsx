import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SintioLogoYellowWhiteIllustration } from "../illustrations/SintioLogoYellowWhiteIllustration";
import ChargerNotListedButton from "../ui/ChargerNotListedButton";

function Header() {
  const [state, setState] = useState(false);

  return (
    <nav className="w-full border-b bg-sintio-dark-blue md:static md:border-none md:text-sm">
      <div className="max-w-screen-xxl mx-auto items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <NavLink to={import.meta.env.VITE_GHPAGES_REPO_NAME}>
            <SintioLogoYellowWhiteIllustration />
          </NavLink>
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
            <li>
              <NavLink
                to={import.meta.env.VITE_GHPAGES_REPO_NAME}
                end
                className={({ isActive }) =>
                  "block" + (!isActive ? " text-white" : " text-sintio-yellow")
                }
              >
                Chargers
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${import.meta.env.VITE_GHPAGES_REPO_NAME}manufacturers`}
                end
                className={({ isActive }) =>
                  "block" + (!isActive ? " text-white" : " text-sintio-yellow")
                }
              >
                Manufacturers
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${import.meta.env.VITE_GHPAGES_REPO_NAME}configuration-keys`}
                end
                className={({ isActive }) =>
                  "block" + (!isActive ? " text-white" : " text-sintio-yellow")
                }
              >
                Configuration Keys
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${import.meta.env.VITE_GHPAGES_REPO_NAME}api-documentation`}
                end
                className={({ isActive }) =>
                  "block" + (!isActive ? " text-white" : " text-sintio-yellow")
                }
              >
                API Documentation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${import.meta.env.VITE_GHPAGES_REPO_NAME}contact`}
                end
                className={({ isActive }) =>
                  "block" + (!isActive ? " text-white" : " text-sintio-yellow")
                }
              >
                Contact
              </NavLink>
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
