import { useEffect, useRef, useState, useCallback } from "react";
import { GoDotFill } from "react-icons/go";

import "./AppleSlider.css";

const CARD_WIDTH = 688;
const GAP = 24;
const AUTO_DELAY = 2000;

const slides = [
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/2500x1336sr.jpg",
      title: "Action Thriller",
      subtitle: "Now streaming on Apple TV",
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/S9dLxU_nCvhomqGnI3-d_g/2500x1336sr.jpg",
      title: "The Movie ",
      subtitle: "Exclusive to Apple TV+",
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/2500x1336sr.jpg",
      title: "New Drama Series",
      subtitle: "A captivating journey",
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Jvb-ERaz0yv0n2pjRR0kjQ/2500x1336sr.jpg",
      title: "Epic Saga",
      subtitle: "All episodes available now",
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/1A5UrdlUF6-zEu5cfQvZag/2500x1336sr.jpg",
      title: "Sci-Fi Adventure",
      subtitle: "Start watching today",
    },
  ];


// clone slides (last + original + first)
const extendedSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0],
];

export default function CardSliding() {
  const [index, setIndex] = useState(1); // start on first real slide
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_DELAY);
  }, []);

  const stopAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    if (isPlaying) startAutoSlide();
    else stopAutoSlide();
    return stopAutoSlide;
  }, [isPlaying, startAutoSlide, stopAutoSlide]);

  // handle infinite loop jump
  useEffect(() => {
    if (index === extendedSlides.length - 1) {
      // jumped to cloned first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      // jumped to cloned last slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(slides.length);
      }, 500);
    }
  }, [index]);

  // re-enable animation after jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  return (
    <section className="apple-slider bg-white">
      <h2 className="title">More from Apple.</h2>

      <div className="viewport">
        <div
          className={`track ${isTransitioning ? "animate" : ""}`}
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {extendedSlides.map((slide, i) => (
            <article
              key={i}
              className="card"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay flex items-center text-sm space-x-3.5 ">
                <button className="watch-btn">Watch the film</button>
                

                <div className="caption  flex items-center space-x-1">
                  <strong>{slide.title}</strong>
                  <GoDotFill />
                
                  {slide.subtitle}
                </div>
                
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* dots + play */}
      <div className="controls">
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i + 1 === index ? "active" : ""}`}
              onClick={() => setIndex(i + 1)}
            />
          ))}
        </div>

        <button
          className="play-btn"
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </section>
  );
}
