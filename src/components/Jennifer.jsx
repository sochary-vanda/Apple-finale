import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  
  
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-intelligence-202510?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDalZCM0g0MTRQL0NONjZoQUpUNEpyWXluTDY3NjNOVTV6d29lV0RZMDd0SXAwckMxbExydC8yeDhtUjlFVHdKVm16RG1HVDZIUUdmQ3JLV1liN0t6d0huMXZMc042Y1VXcXBxaFlBTkJNRVg",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-continuity-202510_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=MkxpRXJEbEM4SjVucjFvcTdEU1BlKytEMU8wSFV2cUJ5OUt4eTB3dVNtSEFkWTlnaEhRWXFUU1Nhem4xR20wcHN2Mmx4a3VvSnUzaFUvSVlVRUJkbEJDTmlWU3RJRnkvdVFKL2dPMHRvaU1UTm9KMUZUZjFaM2tCUGFwdktmdHI",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applecare-202509_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDa0lmM1RnK0lWVnZqUHFuSG45ZGZhalV6YkxCN29rYWlPV3JIeUFBLzFxVm1td3JHMmlHM0d0VzBMMGs5ZHR4WitYQmRxbm94UXpWNkxhbHdKMzlCbVpwaWFvMkZMU25hT1hFblJzWkRURGQ",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-gifting-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=VXNuZmVZU0R3VzJZalF2dFJTeUN3N0FnNjZ5b3VuRHdiZ0w2a3JLMHRPMytjMHlOSllWaUF4RHRmU1JETWwvWnFmS3YvQ0doSFZENndQR0J4TTRqbjV0VnRTbFBkWnJlc1BPQlB5bDBMSENGREFZSmxrYThHNjlsalVwb3Bsd2o",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/shared-card-50-appletv-f1-202512?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=MllEUHA0Z3dEL2FMMEJQZHQydnl5TjdlZEUrWlA3ZmYxMkt2bC8wek9QcjJtaE9nejNBS0FrclhJMVJoVXB1MS85S3R4M0M3WGhIQVNOK3lBdUI5K1ViQ0h5cStsL0FrTW1KVnNwQnJBTEJ1aXlBS0o0cnBJWm1qSzh5bFk4dCs",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=WW05TjdlcC83b2p3NDlrR3ZVbk1xYmJOQmJzSVJ3UFJiNTcwZlp0V0h2dUU3S3Y1Zm9VM1BsYTlJdHNUUWVGd2VEb1lRcjg2U0o3bTMvMkR2S2VvTmt2aHJVVVRvS3hUQ0EwVk8wak9Ka0h5S2ZIeWZBUTd5NUFjYXgrNU9UZlA",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applepay-202509_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDcmhFdGViM1dXUFB2OHVEbysvQWNxVmliOTBDYU5saG5qVVFqcjlWTi9hWnFmS3YvQ0doSFZENndQR0J4TTRqbjlEWUx3MGRTUUsrTzRNVFNYbGNyNDRJWENHRFR3b0NFUUtLdS82SXloR0w",
  },
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-homekit-202405_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UWdrNzNrY0ZiOGhRNlVuUlF4U3JoejVHYVpyWFdSYy85NGlTbU1VNHZsOVhuTTRtd2xSVWtmYmFrblI1clpGWmNva0xZQWFEV2ljOWRGNWZJRk4vWGgvOERJNEJMdXB2K2JwM2I2YmhadzhvWURZUjYwbkNTaGFvK0RGMEx4R0k",
  },
];

export default function Jennifer() {
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
            className="relative -space-y-28  group snap-start min-w-[450px] max-h-[400px] rounded-2xl bg-black text-white  flex flex-col overflow-hidden transition-transform duration-700 ease-out hover:scale-105 "
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
