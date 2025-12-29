import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FIRST_CARD_WIDTH = 400;
const CARD_WIDTH = 313;
const CARD_HEIGHT = 500;
const GAP = 16;

export default function Batman() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  const scroll = (direction) => {
    const amount = direction === "left"
      ? -(CARD_WIDTH + GAP)
      : CARD_WIDTH + GAP;

    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);
const products = [
  
  {
    name: "AirPods Pro 3",
    price: "$249.00",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/44-nc-aluminum-midnight-sport-band-midnight-se?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NEwvaFVLSWFPRUFyK21Oc3dDdW5ZMWpWNFBIbi9VdWR4ZFZlQVVva0ZudWVTTHA0NUMxUkQ1ZFNyWm1hVEtBOUZUVzMxa2MxY3h4S1ZpaEFMMFFjMXI2TGhYaGhMVkJpQ2RGWWVURTZNbXhIS0dxdnFEMnJIUGtadXUrWnNyUVo",
    badge: "Free Engraving",
  },
  {
    name: "Airpod Pro3",
    price: "$249.99",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eVRLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",
  },

  {
    name: "Powerbeats Pro 2 — High-Performance Earbuds",
    price: "$249.00",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d1RLSDZzQTRtK1UxZmVlUFRKNGgvZllvYS9naDJJdU9KTWdGWjhKWFRmSjNqeEcvVzZaaVU2a3ptRnN4aU8wUGovUE9KcXhKNTlHR1RBR2lHbUtXcWc",
    badge: "Free Engraving",
  },
  {
    name: "HidrateSpark PRO 2 ",
    price: "$249.99",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS422?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Y1dQbnhPZEZjRG9WRVJLMk9QMTMrZllvYS9naDJJdU9KTWdGWjhKWFRmSXlKSlRUNldZSm4wTFl2OFVHMm9rVTdDK1liNU90UnhFTDJxUXBFaEp2dWc",
  },

  {
    name: "AirPods Pro 3",
    price: "$249.00",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-select-wifi-purple-202410?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NmJhVkxMSzd4RmRrSjJwN2s4VWJVNzVFK2U2TjRHYmZNU1M0UzNyaEJrVmdxU0lCLzBUK0xGTWRjMmR5ZmZPWFB0RzNpQ0Mxc293RHpBd2NJd0FqVzRPL2FUN25ua1E0TTlmZ3ZyWmY3ZmRIa25vbEZGVUdacnlONzhkTWJyb20",
    badge: "Free Engraving",
  },
  {
    name: "AirPods Pro 3",
    price: "$249.00",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS422?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Y1dQbnhPZEZjRG9WRVJLMk9QMTMrZllvYS9naDJJdU9KTWdGWjhKWFRmSXlKSlRUNldZSm4wTFl2OFVHMm9rVTdDK1liNU90UnhFTDJxUXBFaEp2dWc",
    badge: "Free Engraving",
  },
];

  return (
    <div className="relative w-full">
      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronLeft size={24} className="md:w-10 md:h-10" />
        </button>
      )}

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronRight size={24} className="md:w-10 md:h-10" />
        </button>
      )}

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide "
      >
        {/* FIRST LARGE CARD */}
        <div
          className="flex-shrink-0 rounded-2xl overflow-hidden bg-black text-white"
          style={{ width: FIRST_CARD_WIDTH, height: CARD_HEIGHT }}
        > <div className=" z-70 p-6 flex flex-col justify-start   ">
            <p className="text-sm mb-2">Apple Fitness+</p>
            <h3 className="text-2xl font-semibold leading-tight">
              From Strength to Meditation,
              <br /> there's something for everyone.
            </h3>
          </div>
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-fitness-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=NkJubEdDMk53Ti9yQWdxb3lRVldpWEphMHZiNFpmelQ1b2lQd3hOdVNyQWQxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS0RwVTJnTHZTak9Ray9UeDAyY0NsSkE"
            alt="Apple Fitness+"
            className="h-full w-full object-cover"
          />
          
        </div>

        {/* PRODUCT CARDS */}
        {products.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-2xl bg-white shadow-sm pl-6 pe-6 pt-6 flex flex-col "
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-64 object-contain mx-auto"
            />

            <div className="mt-auto">
              {item.badge && (
                <p className="text-xs text-orange-600 mb-1">
                  {item.badge}
                </p>
              )}
              <h2 className="text-[16px]   font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-1 pb-6 pt-12">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
