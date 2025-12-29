import Store_card1 from "../components/Store_card1";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductCarousel from "../components/ProductCarousel";
import Navbar from "../components/Navbar";
import Shop_ironman from "../components/Shop_ironman";
import AppleStore from "../components/AppleStore";
import Batman from "../components/Batman.jsx";
import Jessica from "../components/Jessica";
import Jennifer from "../components/Jennifer";
import FooterShop from "../components/FooterShop.jsx";

function Shop() {
  useEffect(() => {
    // triggers animation after first paint
    setShowBanner(true);
  }, []);
  const [showBanner, setShowBanner] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`w-full flex justify-center h-auto py-3 bg-white z-50 mt-10 items-end 
  transition-all duration-1000 delay-400 ease-out text-[14px] gap-x-3 font-light
  ${showBanner ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <p>
          Pay monthly at 0% APR when you choose to check out at Apple with Apple
          Card Monthly Installments
        </p>
        <p className="text-blue-600 cursor-pointer flex items-center">
          Learn more
          <IoIosArrowForward />
        </p>
      </div>
      <div className=" bg-[#f5f5f7]">
        <div>
          <div className="mx-[60px]  flex justify-between pt-30">
            <h1 className="text-[80px] font-semibold px-10 mb-8">Store</h1>
            <div className="">
              <div className="font-semibold text-[28px] flex flex-col items-end -space-y-2.5 mb-4">
                <h2>The best way to buy the</h2>
                <h2> products you love.</h2>
              </div>
              <div className="flex flex-col items-end text-[14px] text-blue-600 hover:underline space-y-2">
                <a href="https://www.apple.com/store#" className="flex">
                  Connect with a specialist <GoArrowUpRight />
                </a>
                <a href="https://www.apple.com/store#" className="flex">
                  Find an apple store
                  <GoArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Store_card1 />

        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            The latest.{" "}
            <span className="text-gray-500">Take a look at what’s new.</span>
          </h2>

          <ProductCarousel />
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            Help is here.{" "}
            <span className="text-gray-500">
              Whenever and however you need it.
            </span>
          </h2>

          <Shop_ironman />
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            The Apple Store difference.{" "}
            <span className="text-gray-500">
              Even more reasons to shop with us.
            </span>
          </h2>
          <AppleStore />
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            Made to move.{" "}
            <span className="text-gray-500">
              Level up your health and fitness.
            </span>
          </h2>
          <Batman></Batman>
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            The Apple experience.{" "}
            <span className="text-gray-500">
              Do even more with Apple products and services.
            </span>
          </h2>
          <Jennifer></Jennifer>
          
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8">
            Savings and offers.{" "}
            <span className="text-gray-500">
               Exclusive deals, special stores and more.
            </span>
          </h2>
          <Jessica></Jessica>
        </div>
        <div className="max-w-7xl mx-auto pt-16 pb-10">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Quick Links{" "}
           
          </h2>
          <div className="flex space-x-2">
            <button className="border px-3 rounded-2xl py-1 hover:text-white hover:bg-black">Find a store</button>
          <button className="border px-3 rounded-2xl py-1 hover:text-white hover:bg-black">Order status</button>
          <button className="border px-3 rounded-2xl py-1 hover:text-white hover:bg-black">Shopping Help</button>
          <button className="border px-3 rounded-2xl py-1 hover:text-white hover:bg-black">Return </button>
          <button className="border border-[#1d1d1f] px-3 rounded-2xl py-1 hover:text-white hover:bg-black">Your saves</button>
          </div>
          
        </div>
    
      </div>
      <FooterShop></FooterShop>

    </>
  );
}

export default Shop;
