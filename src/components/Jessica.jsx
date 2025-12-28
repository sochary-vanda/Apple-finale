import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=cmVEYjlFVTUrZjdLT25ZZ2djOUZ2WTVRdHN0TWZxV3QyUGs3WkMzR0dyM1Nab1lJcUZwSFVRK1htYlNmZUtPTFN5aWNYUFpIbkFhdm03T3BzSjdVSXljNnc4c1drVHZvWWlGUXhnb2V5L09yM3dvVGNOcHh1NWJldDJaWTZVVHI",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YWZmUzB4a3czWENOTU1QWVJ1K01WWk5LOEsyMEhpRHE1T1EzSDFwQVpKVzF1WTFUcUFiTi80Y2ZLM2ZEQmtMcjJhUXpzSGp3b1lnNUp6M2lSQzZEVVBiYmVpOUU2RG04OHJUUjJybTZTeHFHaXB3VUEzd1huUnhZRnQ3eTQ1QUdB",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-refurb-202408?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MTZ5STlsTFBndFBGTjdlaHEreGY1YTFsUjh2RWUzeU9adTZtZmNMZDNMVnd5b1hKY2V3T2V4alVLZTRFVTdOK0tRNjVHZTlIV04vVjZjbEh0Rm5SYzM3NnQydDdpK3FzN25MQVFxVVVwNmc",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-business-202506?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TVRWamYxMHBJRG5zb0o5SDIweUVicDBGT083bklMYlpBa00yWlRMeFBWWDZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEpkQUpISXpCRGs5NlQ4Rlg4eUtkYTUrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-gov-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=dml5SzFDRnVlZ3JiOXZxcklwYUFBRDJEUGFubVlzY1VuVjZOclhXdXZWUlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaGdOWncxMDNiNENKZkpJZTVvSjV1Vzg",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-veteran-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d01hbVp2TEdlMG9Memp2N1liaFpVK0VtZHJxNHNCcDlSRnVhZkNXeTJhc2QxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS09TMGQyVTZTbVh5ekYyU1hDTHhHdE0",
  },
];

export default function Jessica() {
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
