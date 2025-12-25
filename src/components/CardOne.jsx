import Button from "./Button";

const CardOne = () => {
  return (
    <div className="relative h-[90vh]">
      <video className="h-full w-full object-cover" autoPlay muted playsInline>
        <source src="/iph.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 ">
        <div>Wrapping up this special season.</div>
        <div>There's still time to make their holiday one of a kind.</div>
<Button text="Shop gifts"/>
      </div>
      
    </div>
  );
};

export default CardOne;
