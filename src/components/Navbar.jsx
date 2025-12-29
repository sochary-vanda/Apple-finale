import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
    shop: {
      title: "Shop",
      items: [
        "Shop the Latest",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "Apple Vision Pro",
        "AirPods",
        "Accessories",
      ],
    },
    quickLinks: {
      title: "Quick Links",
      items: [
        "Find a Store",
        "Order Status",
        "Apple Trade In",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "Shop Special Stores",
      items: [
        "Certified Refurbished",
        "Education",
        "Business",
        "Veterans and Military",
        "Government",
      ],
    },
  },
  mac: {
    shop: {
      title: "Explore Mac",
      items: [
        "Explore All Mac",
        "MacBook Air",
        "MacBook Pro",
        "iMac",
        "Mac mini",
        "Mac Studio",
        "Mac Pro",
        "Displays",
      ],
    },
    quickLinks: {
      title: "Shop Mac",
      items: [
        "Shop Mac",
        "help Me Choose",
        "Mac Accessories",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "More from Mac",
      items: [
        "Mac Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with iPhone",
        "iCloud+",
        "Mac for Business",
        "Education"
      ],
    },
  },
  ipad: {
    shop: {
      title: "Explore iPad",
      items: [
        "Explore All iPad",
        "iPad Air",
        "iPad Pro",
        "iPaad",
        "iPad Mini",
        "Apple Pencils",
        "Keyboards",
        "Displays",
      ],
    },
    quickLinks: {
      title: "Shop iPad",
      items: [
        "Shop iPad",
        "iPad accessories",
        "Mac Accessories",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "More from Mac",
      items: [
        "Mac Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with iPhone",
        "iCloud+",
        "Mac for Business",
        "Education"
      ],
    },
  },
  iphone: {
    shop: {
      title: "Explore iPhone",
      items: [
        "Explore All iPhone",
        "iPhone 17 Pro",
        "iPhone 17 Aie",
        "iPhone 17 ",
        "iPhone 16",
        "iPhone 16e",
        
      ],
    },
    quickLinks: {
      title: "Shop iPhone",
      items: [
        "Shop iPhone",
        "iPhone accessories",
        "iPhone Accessories",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "More from iPhone",
      items: [
        "iPhone Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with iPhone",
        "iCloud+",
        "Mac for Business",
        "Education"
      ],
    },
  },
  watch : {
    shop: {
      title: "Explore Watch",
      items: [
        "Apple Watch Series 11",
        "Apple Watch SE 3",
        "Apple Watch Ultra 3",
        "Apple Watch Nike",
        "Apple Watch Hermes",
        "Apple Watch S",
      ],
    },
    quickLinks: {
      title: "Shop Apple Watch",
      items: [
        "Shop Apple Watch",
        "Shop Apple Watch bands",
        "pple Watch Accessories",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "More from Watch",
      items: [
        "Apple Watch Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with iPhone",
        "iCloud+",
        "Apple Watch for Business",
        "Education"
      ],
    },
  },
  vision : {
    shop: {
      title: "Explore visions",
      items: [
        "Explore Apple Vision Pro",
         
      ],
    },
    quickLinks: {
      title: "Shop Vision",
      items: [
        "Shop Apple Vision",
        "Shop Apple Vision Pro",
        "Shop Apple Vision Accessories",
        "Financing",
        "Personal Setup",
      ],
    },
    specialStores: {
      title: "More from Watch",
      items: [
        "Apple Watch Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        
      ],
    },
  },airpods: {
    shop: {
      title: "Explore All Airpods",
      items: [
        "Explore All Airpods",
        "Airpods 4",
        "Airpods 3",
        "Airpods Pro",
        "Airpods",
         
        
      ],
    },
    quickLinks: {
      title: "Shop Airpods",
      items: [
        "Shop Airpods",
        "Airpods accessories",
        
        
      ],
    },
    specialStores: {
      title: "More from Airpods",
      items: [
        "Airpods Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with Airpods",
        "iCloud+",
        "Mac for Business",
        "Education"
      ],
    },
  },
  tvhome: {
    shop: {
      title: "Explore TV & Home ",
      items: [
        "Explore TV & Home",
        "Apple TV 4K",
        "HomePod",
        "HomePod mini",
       
      ],
    },
    quickLinks: {
      title: "Shop TV & Home",
      items: [
        "Shop TV",
        "TV accessories",
        
        
      ],
    },
    specialStores: {
      title: "More from Airpods",
      items: [
        "TV Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with TV",
        "iCloud+",
        "Mac for Business",
        "Education"
      ],
    },
  },
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    if (id === "store") navigate("/shop");
  };

  return (
    <>
      {activeMenu && (
        <div className="fixed inset-0 z-30 backdrop-blur-md bg-black/20 transition-all duration-300" />
      )}

      <header
        className="fixed top-0 left-0 w-full z-50"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          className={`
            bg-white/90 backdrop-blur-xl
            transition-all duration-300
            ${activeMenu ? "bg-white/80 backdrop-blur-2xl" : ""}
          `}
        >
          <nav className="max-w-7xl mx-auto px-5">
            <div className="flex items-center md:justify-center justify-between h-[44px] gap-x-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-3.5 cursor-pointer"
                onClick={() => navigate("/")}
              />

              {/* DESKTOP MENU */}
              <ul className="hidden md:flex items-center gap-9 text-[11px] font-medium text-gray-700">
                {menus.map((menu) => (
                  <li
                    key={menu.id}
                    onMouseEnter={() =>
                      menuContent[menu.id] && setActiveMenu(menu.id)
                    }
                    onClick={() => handleNavigation(menu.id)}
                    className="cursor-pointer hover:text-black"
                  >
                    {menu.label}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <CiSearch className="w-5 h-5 cursor-pointer" />
                <BsBag className="w-5 h-5 cursor-pointer" />
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

        {/* DROPDOWN */}
        {activeMenu && (
          <div className="hidden md:block absolute top-[44px] left-0 w-full bg-white/95 backdrop-blur-xl">
            <div className="mx-auto max-w-[1024px] px-6 pt-10 pb-20">
              <div className="grid grid-cols-3 gap-x-2">
                {Object.values(menuContent[activeMenu]).map(
                  (section, idx) => (
                    <div key={idx}>
                      <p className="mb-4 text-[12px] text-gray-500 font-medium">
                        {section.title}
                      </p>

                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className={
                              idx === 0
                                ? "text-[24px] font-semibold leading-tight text-gray-900 cursor-pointer hover:text-gray-600"
                                : "text-[13px] font-normal text-gray-700 cursor-pointer hover:text-gray-900"
                            }
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            <div className="flex items-center justify-between h-[44px] px-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-3.5 cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setMobileOpen(false);
                }}
              />
              <button onClick={() => setMobileOpen(false)}>
                <HiX className="w-6 h-6" />
              </button>
            </div>

            <ul className="px-6 py-6 space-y-6 text-lg">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className="border-b pb-3 cursor-pointer"
                  onClick={() => {
                    handleNavigation(menu.id);
                    setMobileOpen(false);
                  }}
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
