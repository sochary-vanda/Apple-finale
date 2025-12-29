import CardThreeButton from "./CardThreeButton";
import CardThreeButtonWhite from "./CardThreeButtonWhite";

const CardThree = ({ img, logo, title, d1, d2, d3, b1, b2 }) => {
  return (
    <div className="relative w-full h-[80vh] mt-5 overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content: absolutely positioned, centered horizontally, top offset */}
      <div
        className="
          absolute top-20 left-0 right-0
          flex flex-col items-center justify-center
          px-4 sm:px-0
        "
      >
        <div className="flex flex-col items-center max-w-xl mx-auto">
          {/* Logo */}
          <img
            src={logo}
            alt=""
            className="w-28 sm:w-40 mb-2"
          />

          {/* Title */}
          <h2 className="cardthreeheading text-xl sm:text-3xl text-center">
            {title}
          </h2>

          {/* Description text */}
          <div className="cardthreeheadingdes mt-1 space-y-0.5 text-center text-sm sm:text-base">
            <div>{d1}</div>
            <div>{d2}</div>
            <div>{d3}</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
          <CardThreeButton text={b1} />
          <CardThreeButtonWhite text={b2} />
        </div>
      </div>
    </div>
  );
};

export default CardThree;
