import Button from "./Button";

const CardOne = () => {
  return (
    <div className="relative h-[95vh] mb-5">
      <video className="h-full w-full object-cover" autoPlay muted playsInline>
        <source src="/iph.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-20 left-0 right-0 flex  flex-col justify-center items-center  gap-3">
        <div className="flex flex-col items-center -space-y-4"> 
            <div className="title ">Wrapping up this special season.</div>
        <div className="description ">There's still time to make their holiday one of a kind.</div>
        </div>
        <div  >
            <Button text="Shop gifts"  />
        </div>
        
      </div>
    </div>
  );
};

export default CardOne;
