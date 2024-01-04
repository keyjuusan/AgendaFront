import crud from "./CrudAxiosTelefonica";
import Person from "./person";

export const Persons = ({ personsFilter, setPersons, setMensaje }) => {

  const eliminarPersona = (personId, personName) => {
    if (window.confirm(`Está seguro de que desea eliminar a ${personName}`)) {
      crud
        .eliminar(personId)
        .then(() => {
          crud.consultar().then((res) => {
            setPersons(res.data);
          });
          setMensaje({
            mensaje: `Contacto eliminado correctamente.`,
            bol: true,
          });
          setTimeout(() => {
            setMensaje({ mensaje: "", bol: true });
          }, 3000);
        })
        .catch(() => {
          setMensaje({
            mensaje: `El contacto no se pudo elimiar debido a un error.`,
            bol: false,
          });
          setTimeout(() => {
            setMensaje({ mensaje: "", bol: false });
          }, 3000);
        });
    }
  };

  return (
    <ul className="w-full flex flex-col place-items-center overflow-auto gap-1 h-[18rem]">
      {personsFilter.map((person) => (
        <Person key={person.id} person={person} eliminarPersona={eliminarPersona} setMensaje={setMensaje} setPersons={setPersons}/>
      ))}
    </ul>
  );
};
