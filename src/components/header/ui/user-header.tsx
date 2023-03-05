import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks/global";
import { useMediaLayout } from "shared/hooks/mobile";
import { Busked, Menu, Search } from "shared/icons";
import { PATHS } from "shared/navigation";
import { CCAvatar, CCLink } from "shared/ui";
import { openPopup } from "store/popup/slice";
import { useOnClickOutside } from "usehooks-ts";

export const UserHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const route = useNavigate();
  const isMobile = useMediaLayout();
  const menuRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      title: "Home",
      href: PATHS.root,
    },
    {
      title: "Profile",
      href: PATHS.profile.root,
    },
    {
      title: "Explore",
      href: PATHS.explore.root,
    },
    {
      title: "Categories",
      href: PATHS.categories.root,
    },
    {
      title: "Create Project",
      // href: PATHS.root,
      action: () => dispatch(openPopup(null)),
    },
  ]);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

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
    <header className="sticky top-0 bg-white z-20">
      <nav>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-3 md:px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer order-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            ref={menuRef}
            className={`absolute md:-ml-5 py-4 left-0 top-16 z-10 m-5 w-[90%] md:h-full md:top-0 md:relative md:m-0 md:flex md:items-center md:w-auto shadow-lg md:shadow-none md:border-none border order-3 md:order-1 transform-all duration-500 rounded-lg mt-6 bg-white/[.98] md:bg-transparent ${
              isMobile &&
              (isOpen ? "translate-x-0 opacity-1" : "-translate-x-80 opacity-0")
            }`}
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base md:pt-0">
                {items.map((item) => (
                  <li key={item.title}>
                    <CCLink
                      href={item.href}
                      className="w-full inline-block no-underline text-black hover:text-black hover:underline py-2 px-4 cursor-pointer"
                      onClick={() => {
                        if (item.action) item.action();
                        setIsOpen(false);
                      }}
                    >
                      {item.title}
                    </CCLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="order-3 flex items-center" id="nav-content">
            <CCLink href={PATHS.profile.root}>
              <CCAvatar />
            </CCLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
