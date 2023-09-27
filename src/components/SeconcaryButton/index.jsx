

export const SeconcaryButton =({title, icon, action})=>{
    return(
        <button onClick={action} style={{border: "solid 1px black", display: "flex", gap: 10}}>
            <img  width={15} src={icon} alt=""/>
            {title}
        </button>
    )
}