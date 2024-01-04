import { useState } from "react";
import Input from "./input";
import crud from "./CrudAxiosTelefonica";

const Person = ({ person, eliminarPersona, setPersons, setMensaje }) => {
  const [editMode, setEditMode] = useState(false);
  const [nombre, setNombre] = useState(person.name);
  const [numero, setNumero] = useState(person.number);

  const editar = () => {
    setEditMode(true);
  };

  const confirmarEdicion = () => {
    const newPerson = {
      name: nombre,
      number: numero,
    };

    crud
      .actualizar(person.id, newPerson)
      .then(() => {
        crud.consultar().then((res) => {
          setPersons(res.data);
        });
        setMensaje({
          mensaje: "Contacto actualizado correctamente.",
          bol: true,
        });
        setTimeout(() => {
          setMensaje({ mensaje: "", bol: true });
        }, 3000);
        setEditMode(false);
      })
      .catch((err) => {
        setMensaje({ mensaje: err.response.data.error, bol: false });
        setTimeout(() => {
            setMensaje({ mensaje: "", bol: false });
          }, 3000);
      });
    // si la actualizacion es satifactoria:
  };

  const cancelarEdicion = () => {
    setEditMode(false);
    setNombre(person.name);
    setNumero(person.number);
  };

  const editandoNombre = (e) => {
    setNombre(e.target.value);
  };
  const editandoNumero = (e) => {
    setNumero(e.target.value);
  };

  return (
    <li
      className="shadow w-4/5 h-14 p-1 flex rounded-md bg-[#F7F7F7] justify-between place-items-center"
      id={person.id}
    >
      {editMode ? (
        <>
          <div className="flex">
            <img
              src="/user-circle.svg"
              width={"50"}
              height={"50"}
              alt="userSvg"
            />
            <form className="flex flex-col place-content-center">
              <Input fChange={editandoNombre} value={nombre} />
              <Input fChange={editandoNumero} value={numero} />
            </form>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                confirmarEdicion();
              }}
              className="bg-confirmIcon w-5 h-5 bg-center bg-cover"
            ></button>

            <button
              onClick={() => {
                cancelarEdicion();
              }}
              className="bg-cancelIcon w-5 h-5 bg-center bg-cover"
            ></button>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <img
              src="/user-circle.svg"
              width={"50"}
              height={"50"}
              alt="userSvg"
            />
            <div className="flex flex-col place-content-center">
              <p className="text-[14px] font-bold ">{person.name}</p>
              <p className="text-[11px]">{person.number} </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                editar();
              }}
              className="bg-editIcon w-5 h-5 bg-center bg-cover"
            ></button>
            <button
              onClick={() => {
                eliminarPersona(person.id, person.name);
              }}
              className="bg-deleteIcon w-5 h-5 bg-center bg-cover"
            ></button>
          </div>
        </>
      )}
    </li>
  );
};
export default Person;
