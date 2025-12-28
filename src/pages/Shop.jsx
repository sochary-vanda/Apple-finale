import Store_card1 from "../components/Store_card1";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductCarousel from "../components/ProductCarousel";
import Navbar from "../components/Navbar";

function Shop() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // triggers animation after first paint
    setShowBanner(true);
  }, []);

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
      </div>
    </>
  );
}

export default Shop;
