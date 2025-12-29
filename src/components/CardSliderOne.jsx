import React, { useState } from "react";

// Reusable LoopingCardSlider Component
function LoopingCardSlider({ data, slideTitle, isHero = false }) {
    const MIN_CARDS = 3;
    const arrayLength = data.length;

    // To ensure a smooth infinite loop, especially with smaller data sets,
    // we use a conceptual 'scroll limit' which determines the number of dot steps.
    // We scroll one item at a time. The number of scrollable steps is (arrayLength).
    const scrollLimit = arrayLength; 

    // State to track the current index.
    const [currentIndex, setCurrentIndex] = useState(0);

    // --- Navigation Logic ---
    const handleDotClick = (index) => {
        // Since we loop, the index directly corresponds to the item we want at the start of the view.
        setCurrentIndex(index);
    };

    // --- Styling Helpers ---
    
    // Dot highlighting logic: The dot corresponding to the *currently visible* starting card is highlighted.
    const dotClasses = (index) =>
        `w-2 h-2 rounded-full transition-all duration-300 ${
            currentIndex === index
                ? "bg-white scale-150" 
                : "bg-gray-500 hover:bg-white/70"
        }`;
    
    // The translation calculates the required shift. 
    // It shifts by one card width (100 / 3) for each index step.
    const slideStepPercentage = 100 / MIN_CARDS;
    
    // Use the modulo operator for truly infinite visual looping
    const loopedIndex = currentIndex % arrayLength;

    // IMPORTANT: To create the visual loop, we duplicate the array items.
    // We need 3 extra items at the end to cover the 3-card view when the index is near the end.
    const displayData = [...data, ...data.slice(0, MIN_CARDS)];

    // Calculate the translation based on the current index * one card width
    const translation = `translateX(-${loopedIndex * slideStepPercentage}%)`;

    return (
        <div className="w-full bg-black py-8">
            {slideTitle && (
                <div className={`text-center mb-8 ${isHero ? 'text-4xl font-bold text-white' : 'text-3xl font-semibold text-white'}`}>
                    {slideTitle}
                </div>
            )}

            {/* Main Slider Wrapper: Defines the viewport, overflow-hidden is key */}
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4">
                
                {/* Slider Track: Contains all cards and shifts horizontally */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: translation, width: `${(arrayLength + MIN_CARDS) * (100 / MIN_CARDS)}%` }} // Adjust total width for duplicated items
                >
                    {displayData.map((item, index) => (
                        <div 
                            key={index} 
                            // Card width is 1/3 of the container width
                            className="flex-shrink-0 w-[33.3333%] p-2 relative group" 
                        >
                            <div className="rounded-lg overflow-hidden relative shadow-lg aspect-video">
                                <img
                                    src={item.url}
                                    alt={item.title || item.description}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay Content */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 ${isHero ? 'pb-8' : ''}`}>
                                    {item.category && <p className="text-gray-300 text-sm font-semibold">{item.category}</p>}
                                    {item.title && <h2 className="text-white text-3xl font-extrabold">{item.title}</h2>}
                                    {item.subtitle && <p className="text-white text-lg">{item.subtitle}</p>}
                                    {item.description && <h3 className="text-white text-lg font-bold">{item.description}</h3>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {/* Dots only correspond to the number of unique items in the original array */}
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={dotClasses(index)}
                            aria-label={`Go to item ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- App Component to Render Both Sliders ---
export default function DualContentSliders() {
    const images = [
        {
            url: "https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/2500x1336sr.jpg",
            title: "Action Thriller",
            subtitle: "Now streaming on Apple TV",
        },
        {
            url: "https://is1-ssl.mzstatic.com/image/thumb/S9dLxU_nCvhomqGnI3-d_g/2500x1336sr.jpg",
            title: "The Movie",
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
    const contentCards = [
        {
            url: "https://www.apple.com/v/home/ck/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg",
            category: "Fitness+",
            description: "Trainer led workouts.",
        },
        {
            url: "https://www.apple.com/v/home/ck/images/promos/ipad-air/promo_ipad_air_avail__6i02t7nujr62_medium_2x.jpg",
            category: "Music",
            description: "New Music Daily.",
        },
        {
            url: "https://www.apple.com/v/home/ck/images/promos/ipad/promo_ipad__fioegapg12qi_medium_2x.jpg",
            category: "Arcade",
            description: "NBA 2K26 Arcade Edition.",
        },
        {
            url: "https://www.apple.com/v/home/ck/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg",
            category: "Fitness+",
            description: "Meditation with Joanna.",
        },
        {
            url: "https://www.apple.com/v/home/ck/images/promos/apple-gift-card/promo_apple_gift_card__etkqjveoh4uq_medium_2x.jpg",
            category: "Music",
            description: "Sabrina Carpenter & Zane Lowe.",
        },
        {
            url: "https://www.apple.com/v/home/ck/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg",
            category: "Arcade",
            description: "New games weekly!",
        },
    ];

    return (
        <div className="bg-black min-h-screen">
            <LoopingCardSlider 
                data={images} 
                slideTitle="Apple TV+ Featured Content" 
                isHero={true} 
            />
            <div className="pt-16"></div> 
            <LoopingCardSlider 
                data={contentCards} 
                slideTitle="Entertainment Channels" 
            />
        </div>
    );
}