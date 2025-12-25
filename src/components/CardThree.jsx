import Button from "./Button";
import ButtonWhite from "./ButtonWhite";
const CardThree = ({img, title, des1,des2,des3,b1,b2}) => {
  return (          
            <>
    
<div className="relative h-[80vh] w-1/2  bg-gray-100 mt-5 mb-5  box-border">
      <img src={img} type="image/jpeg" className="w-full h-full absolute left-1/2 bottom-0 -translate-x-1/2 object-contain  "/>

      <div className="absolute top-20  left-0 right-0 flex  flex-col justify-center items-center  gap-4 bg-[rgba(242, 242, 245, 1)]">
        <div className="flex flex-col items-center "> 
            
            <div className="title">{title}</div>
        <div className="description">
            <div>{des1}</div>
            <div>{des2}</div>
            <div>{des3}</div>
        </div>
        </div>
        <div className="flex justify-center gap-x-4" >
            <Button text={b1}  />
            <ButtonWhite text={b2}/>

        </div>
        
      </div>
    
    </div>
    
    </>
  );
};
export default CardThree;