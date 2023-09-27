

export const SeconcaryButton =({title, icon})=>{
    return(
        <button style={{border: "solid 1px black", display: "flex", gap: 10}}>
            <img  width={15} src={icon} alt=""/>
            {title}
        </button>
    )
}