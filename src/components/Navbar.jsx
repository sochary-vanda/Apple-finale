import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

const menus = [
  { id: "store", label: "Store" },
  { id: "mac", label: "Mac" },
  { id: "ipad", label: "iPad" },
  { id: "iphone", label: "iPhone" },
  { id: "watch", label: "Watch" },
  { id: "vision", label: "Vision" },
  { id: "airpods", label: "Airpods" },
  { id: "tvhome", label: "TV & Home" },
  { id: "entertainment", label: "Entertainment" },
  { id: "accessories", label: "Accessories" },
  { id: "support", label: "Support" },

  // icons (NO dropdown)
  {
    id: "searchIcon",
    label: <CiSearch className="w-4 h-4" />,
    hasDropdown: false,
  },
  { id: "bagIcon", label: <BsBag className="w-4 h-4" />, hasDropdown: false },
];

const menuContent = {
  store: {
    a1: [
      "Shop the Latest",
      "Mac",
      "iPad",
      "iPhone",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "MacBook Pro",
      "iMac",
      "Mac mini",
    ],
    a2: ["Watch", "AirPods", "TV & Home"],
    a3: ["Accessories", "Gift Cards"]
  },
  mac: {a1: [
      "Shop the Latest",
      "Mac",
      "iPad",
      "iPhone",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "MacBook Pro",
      "iMac",
      "Mac mini",
    ],
    a2: ["Watch", "AirPods", "TV & Home"],
    a3: ["Accessories", "Gift Cards"]},
  ipad: ["iPad Pro", "iPad Air", "iPad mini"],
  iphone: ["iPhone 15", "iPhone 15 Pro", "Compare"],
  watch: ["iPad Pro", "iPad Air", "iPad mini"],
  vision: ["iPad Pro", "iPad Air", "iPad mini"],
  airpods: ["iPad Pro", "iPad Air", "iPad mini"],
  tvhome: ["iPad Pro", "iPad Air", "iPad mini"],
  entertainment: ["iPad Pro", "iPad Air", "iPad mini"],
  accessories: ["iPad Pro", "iPad Air", "iPad mini"],
  support: ["iPad Pro", "iPad Air", "iPad mini"],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="flex items-center justify-center bg-white w-screen  top-0 fixed z-50">
      <nav
        className="  tracking-wider "
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div>
          {/* Top bar */}
          <div className=" mx-auto    ">
            <ul className="flex items-center justify-center space-x-8 h-[44px] px-[22px] inter-apple">
              {/* Logo */}
              <li  >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="apple logo" className="w-3.5" />
              </li>

              {/* Menu items */}
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className="cursor-pointer text-gray-800 hover:text-black"
                  onMouseEnter={() => {
                    if (menuContent[menu.id]) {
                      setActiveMenu(menu.id);
                    }
                  }}
                >
                  {menu.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown */}
          {activeMenu && menuContent[activeMenu] && (
            <div className="relative  w-full bg-white h-auto  ">
              <div className="max-w-7xl mx-auto">
                 <div
        className="py-10  "
        
      >
                  <div
                    className="grid grid-cols-[1.5fr_0.5fr_4fr] gap-x-4
 text-sm text-gray-800 "
                  >
                    {Array.isArray(menuContent[activeMenu]) ? (
                      /* Single-column menus */
                      <ul className="space-y-3 px-4 ">
                        {menuContent[activeMenu].map((item) => (
                          <li
                            key={item}
                            className="cursor-pointer hover:text-blue-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      /* STORE (3 columns) */
                      Object.values(menuContent[activeMenu]).map(
                        (column, idx) => (
                          <ul
                            key={idx}
                            className={`space-y-2 ${
                              idx === 0 ? "pr-16" : "px-4"
                            }` } 
                          >
                            {column.map((item) => (
                              <li
                                key={item}
                                className="cursor-pointer hover:text-blue-600 navbar"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
