import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-specialist-help-202511?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=VXNuZmVZU0R3VzJZalF2dFJTeUN3K0hwSnRqZittbW9zMW4wdkliUkY4czJtSnl1aWxWK21rcHM4QnZ6MzIvSS85UDFrREVCUFJWRFNDVDBTQjFJZ3VCc3FjamJwVXJjd2U3WEc3Smc2MXc5bnRCTzNjcGJSeTBxcEdNeDUvdDdmbW94YnYxc1YvNXZ4emJGL0IxNFp3",
  },
  {
    title: "MacBook Pro 14”",
    subtitle: "Supercharged by M5.",
    price: "From $1599 or $133.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-video-202509?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrYnlpTHAvaU1TZWJjTXg3K2FoelBrWm40RUVINGJ2ZUx3NVQ4TnBNU29Vc21td3JHMmlHM0d0VzBMMGs5ZHR4WjM4SnkwY0diclR3aWNnek5QTEFaZFRVOGxIVHZWR1JQRlorTTFrZDEzSC8",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202505?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNY0RvMUw4Rm9vb3JCaDFWOTNnU01UOVNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaG9GTzZCL2trL3hMU1d2K2ZPcTVKWXM",
  },
  {
    title: "Apple Watch",
    subtitle: "The ultimate way to watch your health",
    price: "From $399 or $33.25/mo. per month for 12 months.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPM1ZnVFR5VGxOMG5WYlh6ZVpnWVpmOVNTeEZoVVBncVRqTkNMNS9uNklFcGdNL0tvRHFBWjFabEJvUTIxa3lDRWI2aER5OTZhZjhhVzlPaThxMkc0QVE",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbmI1cVh6QzJWMGpQUWdRbS9zcU1Sa1M3UUxhTDY4VmxnT1pqOEpldm1McndYUldRZVYxMHFkRFZrQVZuaWMwSkNUT1Foa1VGN1hndkM5QXFCTUlseGM",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UjZWNjB3VDZRK09HelFpSjJDWXROSXFFVHJmY3pQTE80cGIxc1pFQ1VBQWYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SYzRmTnpyOVBFZDFPdWR2WFZpUzNkaDA",
  },
];

export default function Shop_ironman() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 10); // Show left button only if scrolled > 10px
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 10); // Show right button only if not at the end
  };

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;

    const scrollAmount = 420;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0  top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronLeft size={22} className="md:w-10 md:h-10 " />
        </button>
      )}

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0  top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronRight size={22} className="md:w-10 md:h-10 " />
        </button>
      )}

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-12"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>

        {products.map((item, index) => (
          <div
            key={index}
            className="relative -space-y-28  group snap-start min-w-[480px] max-h-[500px] rounded-2xl bg-black text-white  flex flex-col overflow-hidden transition-transform duration-700 ease-out hover:scale-105 "
          >
            <div className="z-10 absolute top-10 left-10 right-10 mix-blend-difference">
              <h3 className="text-3xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-white">{item.subtitle}</p>
              <p className="text-sm mt-2 text-white font-light ">
                {item.price}
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover  "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
