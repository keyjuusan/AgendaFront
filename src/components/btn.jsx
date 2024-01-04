const Btn = ({ type, texto, funcionClick = () => {}, color = "default" }) => {
  const ESTILOS = {
    default:
      "hover:shadow bg-none border-2 border-[#F7F7F7] rounded-md w-[5rem] h-[2rem] hover:bg-[#F7F7F7]",
    red: "hover:shadow bg-none text-sm border-2 border-red-500 rounded-md w-[5rem] hover:text-white h-[2rem] hover:bg-red-500",
  };
  const estilo = ESTILOS[color];

  return (
    <button
      type={type}
      onClick={() => {
        funcionClick();
      }}
      className={estilo}
    >
      {texto}
    </button>
  );
};
export default Btn;
