import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYlNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R2RBR0JWVHBRN0NKVm11SFZzeU45T2VCTXFJbjVIbEFUN05pTHFFYldZYzg",
  },
  {
    title: "MacBook Pro 14”",
    subtitle: "Supercharged by M5.",
    price: "From $1599 or $133.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMm9DK3hwOFVzTGV2T3V6VkdGOUQ2UnFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1lsekVRWVZWZFZsS2Q1VFBGdkVHSUhMQ2gzYU14VEs0V1BFdWdmdWl3NGg",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTmRKNlp6TmhsQ0RBNndmZkxCVmYvSDZXYXJlRUd1cTBYTnRnbTNlazIvM3ZvdUZlR0V0VUdJSjBWaDVNVG95YkNJSU04U2x4akplUjNjVDFUUHpUaVU",
  },
  {
    title: "Apple Watch",
    subtitle: "The ultimate way to watch your health",
    price: "From $399 or $33.25/mo. per month for 12 months.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s11-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vdjl0SUx3WU51YXRxeHB6bWVJK2RrWDkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVJwNWRPNWF1Mm83OEFlanlxWkZGemwrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSHVrRHVBUzZ5dlZsTGhlK2dxMHZnWDkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVFzY1NTN1pYSVRIN1hKQ2xOdjlkRnArYWpGdS9XeFgvbS9ITnNYOEhYaG4",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-air-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXT0lGL3JSRk9QTHUvdlNaQzlmZ3M4Ym45S05qekNUdVUwMVFyK1pKaERUd2JGcXNRQnFCV0w3WVRjTExvdm1ic1VsVU5yYWhNQlZNeWo2SGZrN292cVlVRk5BYjU4dkMrYjBKSjFqVXFOVGg",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vcHVDMzIyc2tYWmg0aGNQUGlxUnIvcHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K2FvbHkrdzF1R2RzWHBoazhVN3c2Yjd4N0gwQ1l5S1h1a1Erem0veUNhRW8",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-se-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09va2N4T3NoRWF3S1IrekpkU1A4Rm9najZXYXJlRUd1cTBYTnRnbTNlazIvM3ZvdUZlR0V0VUdJSjBWaDVNVG95YlB2clB2WnpYRUJrYlV5c1NMYTZnWms",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-vision-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=TVVQNGFmWnRIeGl6RHZFdkZqMmNxT2JuTWZNYUVWLzFTaTdNdUxxeWtQVG45S05qekNUdVUwMVFyK1pKaERUd2JGcXNRQnFCV0w3WVRjTExvdm1ic1JRRkR1OTVrTXczUEJ3YTNXM0U0S1QrNmVjbmk5c1V4VVk2VEt3TGcxekg",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmm. Power.",
    price: "From $999 or $83.25/mo. for 12 mo.",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-accessories-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=K1NBYnFSRndoRHEyUklJLyttMlQ2RGR0ejF3RzlINnIzWTlvaTB3eGE3dHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1pQTzJVNW1JWFltcHpDcHNiVGlCRWJrbUNYSlozTndGcHB6N1hEeU4wL1U",
  },
];

export default function ProductCarousel() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
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
          className="hidden md:flex absolute left-7 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronLeft size={24} className="md:w-10 md:h-10 "/>
        </button>
      )}

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-7 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
        >
          <ChevronRight size={24} className="md:w-10 md:h-10 "/>
        </button>
      )}

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-12"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="relative -space-y-28  group snap-start min-w-[400px] max-h-[470px] rounded-2xl bg-black text-white  flex flex-col overflow-hidden transition-transform duration-700 ease-out hover:scale-105 "
          >
            <div className="z-10 absolute top-10 left-10 right-10 mix-blend-difference">
              <h3 className="text-3xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-white">{item.subtitle}</p>
              <p className="text-sm mt-2 text-white font-light ">{item.price}</p>
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
