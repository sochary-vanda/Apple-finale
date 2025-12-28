import React from 'react';

// --- Data Definitions ---
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

/**
 * Reusable component for both large and small banners.
 */
const BannerCard = ({ item, isLarge }) => {
    // Conditional CSS classes based on size
    const cardClasses = isLarge
        ? "w-[95vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] hover:scale-[1.01]"
        : "w-[65vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] h-[200px] md:h-[300px] lg:h-[350px] hover:scale-[1.03]";

    // Conditional text classes based on size
    const textPaddding = isLarge ? "p-6 md:p-10" : "p-4 md:p-6";
    const titleClasses = isLarge ? "text-3xl md:text-5xl lg:text-6xl" : "text-lg md:text-xl";
    const subtitleClasses = isLarge ? "text-base md:text-xl font-medium text-gray-200" : "text-xs md:text-sm font-semibold text-gray-400 tracking-wider";

    // Dynamic styles for background image
    const style = {
        backgroundImage: `url(${item.url})`,
    };

    return (
        <div 
            className={`banner-card flex-shrink-0 rounded-xl overflow-hidden relative cursor-pointer transform transition duration-300 card-shadow bg-image-cover ${cardClasses}`}
            style={style}
        >
            {/* Dark Overlay for better text readability */}
            <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end ${textPaddding}`}>
                {isLarge ? (
                    <>
                        <p className="text-sm md:text-base font-semibold text-gray-300 tracking-wider">Apple TV+</p>
                        <h2 className={`font-extrabold mb-2 leading-tight ${titleClasses}`}>
                            {item.title}
                        </h2>
                        <p className={subtitleClasses}>{item.subtitle}</p>
                    </>
                ) : (
                    <>
                        <p className={subtitleClasses}>{item.category}</p>
                        <h3 className={`font-bold leading-snug ${titleClasses}`}>
                            {item.description}
                        </h3>
                    </>
                )}
            </div>
        </div>
    );
};

/**
 * Reusable component for rendering a horizontal scroll section.
 */
const CarouselSection = ({ title, data, isLarge }) => (
    <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 pl-2 md:pl-0">{title}</h1>
        <div 
            className="flex overflow-x-scroll horizontal-scroll-container gap-4 md:gap-8 snap-x snap-mandatory pb-4"
        >
            {data.map((item, index) => (
                <BannerCard key={index} item={item} isLarge={isLarge} />
            ))}
        </div>
    </section>
);


/**
 * The main component containing the content layout.
 * This can be imported into App.jsx or any other root component.
 */
const ContentLayout = () => {
    return (
        <div className="p-4 md:p-8">
            {/* Section 1: Large Banners (Horizontal Scroll) */}
            <CarouselSection
                title="Latest Shows & Movies"
                data={images}
                isLarge={true}
            />

            {/* Section 2: Smaller Content Carousel */}
            <CarouselSection
                title="More to Explore"
                data={contentCards}
                isLarge={false}
            />
        </div>
    );
};

export default ContentLayout;