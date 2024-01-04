import axios from "axios";
import { useState } from "react";
import crud from "./CrudAxiosTelefonica";
import Input from "./input";
import Btn from "./btn";

export const PersonForm = ({ persons, setPersons, setMensaje }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const escribiendoNombre = (e) => {
    setNewName(e.target.value);
  };
  const escribiendoNumero = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    crud
      .registrar(newPerson)
      .then((res) => {
        setPersons(persons.concat(res.data));
        setNewName("");
        setNewNumber("");
        setMensaje({
          mensaje: `${newPerson.name} ha sido añadido a los contactos`,
          bol: true,
        });
        setTimeout(() => {
          setMensaje({ mensaje: "", bol: true });
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response.data)
        setMensaje({ mensaje: err.response.data.error, bol: false });
        setTimeout(() => {
          setMensaje({ mensaje: "", bol: false });
        }, 3000);
      });
  };

  return (
    <form onSubmit={addPerson} className="flex flex-col items-center gap-2 w-full">
      <Input inputName={"Nombre"} fChange={escribiendoNombre} value={newName}/>
      <Input inputName={"Numero"} fChange={escribiendoNumero} value={newNumber}/>
        <div className="flex w-4/5">
          <Btn type={"submit"} texto={"Añadir"}/>
        </div>
    </form>
  );
};
