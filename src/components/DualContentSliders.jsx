import React, { useState, useEffect, useCallback } from "react";

import { GoDotFill } from "react-icons/go";

import "./AppleSlider.css";


// Reusable Looping Card Slider
function LoopingCardSlider({
  data,
  slideTitle,
  isHero = false,
  autoScroll = true,
  interval = 3000,
}) {
  const MIN_CARDS_DESKTOP = 3;
  const MIN_CARDS_MOBILE = 1;

  const [cardsPerView, setCardsPerView] = useState(
    window.innerWidth < 640 ? MIN_CARDS_MOBILE : MIN_CARDS_DESKTOP
  );

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrayLength = data.length;
  const displayData = [...data, ...data.slice(0, cardsPerView)];

  const [absoluteIndex, setAbsoluteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slideStepPercentage = 100 / cardsPerView;

  const handleNextSlide = useCallback(() => {
    if (absoluteIndex === arrayLength) {
      setIsTransitioning(false);
      setAbsoluteIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setAbsoluteIndex(1);
        });
      });
    } else {
      setAbsoluteIndex((prev) => prev + 1);
    }
  }, [absoluteIndex, arrayLength]);

  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(handleNextSlide, interval);
    return () => clearInterval(timer);
  }, [handleNextSlide, interval, autoScroll]);

  const translation = `translateX(-${
    absoluteIndex * slideStepPercentage + slideStepPercentage
  }%)`;

  return (
    <div className={`w-full bg-white ${isHero ? "py-8" : "py-4"}`}>
      {slideTitle && (
        <h2
          className={`text-center mb-8 ${
            isHero ? "text-4xl font-bold" : "text-3xl font-semibold"
          }`}
        >
          {slideTitle}
        </h2>
      )}

      <div className="relative w-full overflow-hidden px-2">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: translation,
            width: `${(arrayLength + cardsPerView) * (100 / cardsPerView)}%`,
          }}
        >
          {displayData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center w-full sm:w-1/3 p-2"
            >
              {/* CARD */}
              <div
                className={`
                  relative overflow-hidden rounded-xl shadow-lg
                  w-[275px] h-[496px]
                  sm:w-full sm:h-auto
                  ${isHero ? "sm:aspect-[21/9]" : "sm:aspect-[4/3]"}
                `}
              >
                <img
                  src={item.url}
                  alt={item.title || item.description}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                <div className="flex items-center"> <div className="bg-white    text-Black    py-2 px-4 rounded-3xl text-[15px]"> 
      Stream Now
    </div>
                <div className="flex justify-start">
                  {isHero ? (
                    <>
                      <h3 className="text-white text-sm font-bold px-5">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm">{item.subtitle}</p>
                    </>
                  ) : (
                    <h3 className="text-white text-lg font-semibold">
                      {item.description}
                    </h3>
                  )}
                </div></div>
                
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// APP
export default function App() {
  const images = [
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/2500x1336sr.jpg",
      title: "Action Thriller",
      subtitle: "Now streaming on Apple TV",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/S9dLxU_nCvhomqGnI3-d_g/2500x1336sr.jpg",
      title: "The Movie ",
      subtitle: "Exclusive to Apple TV+",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/2500x1336sr.jpg",
      title: "New Drama Series",
      subtitle: "A captivating journey",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/Jvb-ERaz0yv0n2pjRR0kjQ/2500x1336sr.jpg",
      title: "Epic Saga",
      subtitle: "All episodes available now",
    },
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/1A5UrdlUF6-zEu5cfQvZag/2500x1336sr.jpg",
      title: "Sci-Fi Adventure",
      subtitle: "Start watching today",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <LoopingCardSlider
        data={images}
        slideTitle="Endless Entertainment"
        isHero
        interval={2000}
      />
    </div>
  );
}
