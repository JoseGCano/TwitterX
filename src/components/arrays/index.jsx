


export const Arrays = ()=>{

const ejemplo = [

  {
    name: "Fulanito",
    color: "royalblue",
    checked: true
  },

  {
    name: "Menganito",
    color: "cyan",
    checked: false
  },{
    name: "Jhon Doe",
    color: "purple",
    checked: false
  }]

  const funcionAlert = (data)=>{
        alert(`name: ${data.name}\ncolor: ${data.color}\nchecked: ${data.checked}`)
  }

    return (
        
        <ol>
            {ejemplo.map(e=> {
                return <li key={e.name}>
                            <h4 style={{color: `${e.color}`, fontWeight: e.checked? "bold": "normal" }}>
                                {e.name}
                            </h4>
                            <button onClick={()=>funcionAlert(e)}>
                                Info
                            </button>
                        </li>
            })}
        </ol>
        
    )
}