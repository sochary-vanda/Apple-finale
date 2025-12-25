const Button = ({ text }) => {
  return (
    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};
export default Button;
