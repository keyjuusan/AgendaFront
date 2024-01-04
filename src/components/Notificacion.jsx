export const Notificacion = ({ mensaje }) => {
  if (mensaje.mensaje === "") {
    return null;
  } else {
    return mensaje.bol ? (
      <span className="bg-green-200 border-[1px] border-green-400">
        {mensaje.mensaje}
      </span>
    ) : (
      <span className="bg-red-200  border-[1px] border-red-500">
        {mensaje.mensaje}
      </span>
    );
  }
};
