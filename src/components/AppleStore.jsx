import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoCard } from "react-icons/io5";
import { SiCardano } from "react-icons/si";
import { CiFaceSmile } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";




const CARD_WIDTH = 313;
const GAP = 16; // gap-x-4
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

export default function AppleStyleCarousel() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);
  const cards = [

    {
        icon: <IoCard />,
        color: "#0071e3;",
      title: "Trade in your current device.",
      description: "Get credit toward a new one.",
    },
    {
        icon: <SiCardano />
,
        color: "#03a10e",
      title: "Pay over time",
      description: "Your choice. Pay monthly or in full.",
    },
    {
        icon: <CiFaceSmile />
,
        color: "#0071e3",
      title: "Make them yours",
      description: "Engrave emoji, names, and numbers.",
    },
    {
        icon: <FaTruck />
,
        color: "#008009",
      title: "Fast delivery",
      description: "Two-hour delivery or easy pickup.",
    },
    {
        icon: <FaApple />
,
        color: "#0071e3",
      title: "Make them yours",
      description: "Engrave emoji, names, and numbers.",
    },
    {
        icon: <SiApplemusic />
,
        color: "##b64400",
      title: "Fast delivery",
      description: "Two-hour delivery or easy pickup.",
    },
  ];

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

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-[240px] w-[313px] flex-shrink-0 rounded-2xl bg-white shadow-sm p-6 transition-transform duration-700 ease-out hover:scale-105 "
          >    
            <div className="text-5xl mb-2 " style={{
                color: card.color,
              }}>
                {card.icon}
            </div>
           
                <h3
              className="text-[20px] font-semibold text-black"
              
            >
              {card.title} 
            </h3>
             <h3
              className="text-[20px] font-semibold"
              style={{
                color: card.color,
              }}
            >
              {card.description}
            </h3>
             
            
          
                
           
            
            
          </div>
        ))}
      </div>
    </div>
  );
}
