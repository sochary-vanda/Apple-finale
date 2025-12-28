

export default function Card({ img, description, buttonText }) {
  return (
    <div className="relative  mx-auto  shadow-lg">
      {/* Image Background */}
      <img
        src={img}
        
        className="w-full h-[400px] object-cover" // Image covers the card with a fixed height
      />

      {/* Overlay text and button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-transparent to-transparent text-white flex justify-center space-x-4">
        <button className="px-4 py-2 bg-white rounded-3xl text-black">{buttonText}</button>
        <p className="text-lg mb-4">{description}</p>
        
      </div>
    </div>
  );
}