import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaLayout } from "shared/hooks/mobile";
import { Busked, Menu, Search } from "shared/icons";
import { CCAvatar } from "shared/ui";

export const UserHeader = () => {
  const navigate = useNavigate();
  const isMobile = useMediaLayout();
  const [isOpen, setIsOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="sticky top-0 bg-white z-10">
      <nav>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-3 md:px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer order-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className={`absolute left-0 top-16 z-10 m-5 w-[90%] md:h-full md:top-0 md:relative md:m-0 md:flex md:items-center md:w-auto shadow order-3 md:order-1 transform-all duration-500 rounded-lg mt-6 bg-white/[.90] md:bg-transparent ${
              isMobile &&
              (isOpen ? "translate-x-0 opacity-1" : "-translate-x-80 opacity-0")
            }`}
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base md:pt-0">
                <li>
                  <a
                    href="/main"
                    className="inline-block no-underline text-black hover:text-black hover:underline py-2 px-4 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/main");
                    }}
                  >
                    Find Recipe
                  </a>
                </li>
                <li>
                  <a
                    href="/fridge"
                    className="inline-block text-black no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/fridge");
                    }}
                  >
                    My Fridge
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-2">
            <a
              href="/main"
              className="dark:text-white dark:hover:text-indigo-500 flex items-center tracking-wide no-underline hover:no-underline font-bold text-2xl cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate("/main");
              }}
            >
              Coffee Pub
            </a>
          </div>

          <div className="order-3 flex items-center" id="nav-content">
            <CCAvatar />
          </div>
        </div>
      </nav>
    </header>
  );
};
