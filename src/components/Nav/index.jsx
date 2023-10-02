import logo from '../../assets/logoX.png'


export const Nav = ()=>{

    let listMenu = [
        "home", 
        "about",
        "contact"
    ]

    return (
        <nav style={{width:"100vw", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center"}}>
            <img width={50} src={logo} alt="logo"/>
            <menu style={{width: "100vw", display: "flex", listStyle: "none", gap: 100, justifyContent: 'center', alignItems: "center"}}>
                {listMenu.map(e=> {
                    return <li key={e}>
                        <a href={`/${e}`} style={{textTransform: "capitalize", color: "black", fontSize: "1.5rem"}}> 
                            {e}
                        </a>
                    </li>
                })}
            </menu>
        </nav>
    )
    
}