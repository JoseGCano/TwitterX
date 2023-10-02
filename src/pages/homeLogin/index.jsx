import { PrimaryButton } from "../../components/PrimaryButton"
import { SeconcaryButton } from "../../components/SeconcaryButton"
import { Image } from "../../components/image"
import logo from '../../assets/logoX.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import { Boton } from "../../components/boton"

export const HomeLogin =()=>{

    const principalAction = ()=>{
        alert("Botón principal")
    }

    const secondaryAction = (texto, action)=>{
        action(texto)
    }

    return (
        <main style={{margin: "10vh",height:"100%",display:"flex", justifyItems: "center", alignItems: "center", justifyContent:"center", alignContent:"center"}}> 
            <section >
                <Image title={"X"} path={logo}/>
            </section>
            <section style={{display:"flex", flexDirection: "column", alignItems: "start"}}>
                <section style={{display:"flex", flexDirection: "column", alignItems: "start"}}>
                    <h1>Lo que está pasando ahora</h1>
                    <h3>Únete Hoy</h3>
                    <SeconcaryButton action={()=>secondaryAction("Registrarse con Google", alert)} icon={google} title="Registrarse con Google"/>
                    <SeconcaryButton action={()=>secondaryAction("Registrarse con Apple", console.log)} icon={apple} title="Registrarse con Apple"/>
                    o
                    <PrimaryButton action={principalAction}  title={"Crear cuenta"} fill={true}/>
                </section>
                <section>
                    <h5>¿Ya tienes cuenta?</h5>
                    <PrimaryButton action={principalAction}  title={"Iniciar sesión"}/>
                </section>
            </section>
            <Boton onClick={()=>alert("boton1")} disabled={false} type="primary" />
            <Boton onClick={()=>alert("boton2")} disabled={false} type="secondary" />
            <Boton onClick={()=>alert("boton3")} disabled={false} type="primary" />
        </main>
    )
}