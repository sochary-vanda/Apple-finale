import { useEffect, useRef, useState, useCallback } from "react";
import { GoDotFill } from "react-icons/go";

import "./AppleSlider.css";

const CARD_WIDTH = 688;
const GAP = 24;
const AUTO_DELAY = 2000;

const slides = [
  {
    title: "Designed for Every Student",
    subtitle: "Accessibility",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-design-for-every-student/films_design_for_every_student_startframe__rokker562oa6_medium.jpg",
  },
  {
    title: "No Frame Missed",
    subtitle: "Accessibility",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-holiday/holiday_startframe__odo6zbq4yb6q_medium_2x.jpg",
  },
  {
    title: "Shot on iPhone",
    subtitle: "Film",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-underdogs/apple_at_work_underdogs_startframe__ev39ytszloya_medium_2x.jpg",
  },
  {
    title: "Shot on iPhone",
    subtitle: "Film",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-jackson-wang/jackson_wang_startframe__bybji4gnsinm_medium.jpg",
  },
  {
    title: "Shot on iPhone",
    subtitle: "Film",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-dear-apple/apple_watch_dear_apple_startframe__cmo60b10ghaq_medium_2x.jpg",
  },
  {
    title: "Shot on iPhone",
    subtitle: "Film",
    image: "https://www.apple.com/v/home/cj/images/more-from-apple-gallery/films-no-frame-missed/accessibility_no_frame_missed_startframe__c4thkl20luuu_medium_2x.jpg",
  },
];

// clone slides (last + original + first)
const extendedSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0],
];

export default function AppleSlider() {
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
    <section className="apple-slider bg-black">
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
