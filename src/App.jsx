import { useState } from "react"
import { Titulo } from "./components/Titulo"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/PersonForm"
import { Persons } from "./components/Persons"
import { useEffect } from "react"
import crud from "./components/CrudAxiosTelefonica"
import { Notificacion } from "./components/Notificacion"
import Subtitulo from "./components/Subtitulo"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')
    const [mensaje,setMensaje]= useState({mensaje:""})
    
    useEffect(()=>{
        crud.consultar()
        .then(res=>{
            setPersons(res.data);
        })
    },[])

    const buscarContacto = (e) => {
        setNewSearch(e.target.value)

        // setPersonsFilter()
    }

    const filtrado = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

    

    return (
        <div className="bg-[#93DEFF] h-[100dvh] text-[14px] w-[100dvw] flex flex-col items-center ">
            <div className="flex flex-col gap-3 grid-cols-3 min-w-96 max-w-[70%] h-screen items-center font-mono px-1 text-[#323643]">
                    <Titulo texto={"Mi Agenda"} />
                <div className=" w-full items-center flex flex-col">
                    <Notificacion mensaje={mensaje}/>
                    <Filter functionEvent={buscarContacto} valueSearch={newSearch} />
                </div>
                <div className="w-full">
                    <Subtitulo texto={"Añadir nuevo"} />
                    <PersonForm persons={persons} setPersons={setPersons} setMensaje={setMensaje}/>
                </div>
                <div className="w-full">
                    <Subtitulo texto={"Contactos"} />
                    <Persons personsFilter={filtrado} setPersons={setPersons} setMensaje={setMensaje}/>
                </div>
            </div>
        </div>
    )
}
export default App;