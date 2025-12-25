const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-6 rounded-3xl text-[20px]">
      {text}
    </button>
  );
};
export default Button;
