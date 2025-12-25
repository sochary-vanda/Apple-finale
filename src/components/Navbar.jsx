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
  store: ["Shop the Latest", "Mac", "iPad", "iPhone"],
  mac: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini"],
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
    <div className="flex items-center justify-center">
          <nav
      className="relative  tracking-wider bg-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto   navtext ">
        <ul className="flex items-center justify-center space-x-10 h-14 border-2">

          {/* Logo */}
          <li className="font-semibold text-lg select-none"></li>

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
  <div className="absolute left-0 w-full bg-white ">
    <div className="max-w-7xl mx-auto ">
      <div className=" py-6 border-1">
        <ul className="grid grid-cols-4 gap-6 text-sm text-gray-800 ">
          {menuContent[activeMenu].map((item) => (
            <li key={item} className="cursor-pointer hover:text-blue-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}

    </nav>
</div>
    
  );
};

export default Navbar;
