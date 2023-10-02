import { PrimaryButton } from "../components/PrimaryButton"
import { useState } from "react"

export const ListDinamica = ()=>{

    const listItem = [
        {
            id: 1,
            name: "José"
        },
        {
            id: 2,
            name: "Luis"
        },
        {
            id: 3,
            name: "Alberto"
        }
    ]

    const [list, setList] = useState(listItem)

    const deleteFunction = (id)=>{
        setList(prevList => {
            
            const list2 = [...prevList]

            return list2.filter(e=>e.id != id)
        })
    }

    const addFunction = ()=>{

        setList(prevList =>{
            return [
                ...prevList, 
                {
                    name: "Anónimo",
                    id: Math.random() * Date.now()
                }
            ]
        })
    }

    return (
        <div>
            <ul>
            {list.map(e=> 
            <li key={e.id}>
                    <span>{e.name}</span>
                    <PrimaryButton title="Eliminar" fill action={()=>deleteFunction(e.id)}/>

                </li>)}
            </ul>
            <PrimaryButton title="Añadir" action={addFunction}/>
        </div>
    )
}