import Input from "./input"

export const Filter = ({functionEvent,valueSearch}) =>{
    return(
        <Input inputName={"Buscar"} fChange={functionEvent} value={valueSearch} placeholder="buscar..."/>
        // <label >
        //         search:
        //         <input type="text" placeholder="search by name" onChange={functionEvent} value={valueSearch} />
        //     </label>
    )
}