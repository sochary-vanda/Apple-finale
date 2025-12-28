import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const menus = [
  { id: "store", label: "Store" },
  { id: "mac", label: "Mac" },
  { id: "ipad", label: "iPad" },
  { id: "iphone", label: "iPhone" },
  { id: "watch", label: "Watch" },
  { id: "vision", label: "Vision" },
  { id: "airpods", label: "AirPods" },
  { id: "tvhome", label: "TV & Home" },
  { id: "entertainment", label: "Entertainment" },
  { id: "accessories", label: "Accessories" },
  { id: "support", label: "Support" },
];

const menuContent = {
  store: {
    col1: ["Shop the Latest", "Mac", "iPad", "iPhone"],
    col2: ["Watch", "AirPods", "TV & Home"],
    col3: ["Accessories", "Gift Cards"],
  },
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* BACKDROP BLUR */}
      {(activeMenu || mobileOpen) && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      )}

      <header className="fixed top-0 left-0 w-full z-50">
        {/* TOP BAR */}
        <div className="bg-white/90 backdrop-blur-xl ">
          <nav className="max-w-7xl mx-auto px-4">
            <div className="flex items-center md:justify-center justify-between h-[44px] space-x-5">
              {/* LOGO */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-3.5"
              />

              {/* DESKTOP MENU */}
              <ul
                className="hidden md:flex items-center gap-7 text-[11px] text-gray-600 space-x-2"
                onMouseLeave={() => setActiveMenu(null)}
              >
                {menus.map((menu) => (
                  <li
                    key={menu.id}
                    onMouseEnter={() =>
                      menuContent[menu.id] && setActiveMenu(menu.id)
                    }
                    className="cursor-pointer text-gray-800 hover:text-black"
                  >
                    {menu.label}
                  </li>
                ))}
              </ul>

              {/* ICONS */}
              <div className="flex items-center gap-4">
                <CiSearch className="w-5 h-5" />
                <BsBag className="w-5 h-5" />

                {/* MOBILE MENU BUTTON */}
                <button
                  className="md:hidden"
                  onClick={() => setMobileOpen(true)}
                >
                  <HiOutlineMenu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* DESKTOP DROPDOWN */}
        {activeMenu && (
          <div className="hidden md:block bg-white/90
           backdrop-blur-xl ">
            <div className="max-w-7xl mx-auto px-45 py-10">
              <div className="grid grid-cols-3 gap-12 text-sm">
                {Object.values(menuContent[activeMenu]).map((col, idx) => (
                  <ul key={idx} className="space-y-3">
                    {col.map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:text-blue-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between h-[44px] px-4 border-b">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-3.5"
              />
              <button onClick={() => setMobileOpen(false)}>
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <ul className="px-6 py-6 space-y-6 text-lg">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className="border-b pb-3 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
