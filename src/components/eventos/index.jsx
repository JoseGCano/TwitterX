import "./style.css"


export const EventosExercise = ()=>{


    const onMouseIsOver = (event)=>{

        if (event.target.className.includes("mouseOver")){
            event.target.className = "Div"
        }else{
            event.target.className += " mouseOver"
        }
        
    }

    

    const divOnFocus = (event)=>{
        event.target.className += " focus"
        console.log(event)
    }

    return (
        <div className="Div" 
        style={{display: "flex", position: "relative", height: "100px"} } 
        onMouseOver={onMouseIsOver}
        onMouseLeave={onMouseIsOver}
        onFocus={divOnFocus}
        tabIndex={0}    
        >
            Hola Mundo
        </div>
    )
}