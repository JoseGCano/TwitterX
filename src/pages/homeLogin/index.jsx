import { PrimaryButton } from "../../components/PrimaryButton"
import { SeconcaryButton } from "../../components/SeconcaryButton"
import { Image } from "../../components/image"
import logo from '../../assets/logoX.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'

export const HomeLogin =()=>{
    return (
        <main style={{display:"grid", gridTemplateColumns: "1fr 1fr"}}> 
            <section >
                <Image title={"X"} path={logo}/>
            </section>
            <section style={{display:"flex", flexDirection: "column", alignItems: "start"}}>
                <section style={{display:"flex", flexDirection: "column", alignItems: "start"}}>
                    <h1>Lo que está pasando ahora</h1>
                    <h3>Únete Hoy</h3>
                    <SeconcaryButton icon={google} title="Registrarse con Google"/>
                    <SeconcaryButton icon={apple} title="Registrarse con Apple"/>
                    o
                    <PrimaryButton title={"Crear cuenta"} fill={true}/>
                </section>
                <section>
                    <h5>¿Ya tienes cuenta?</h5>
                    <PrimaryButton title={"Iniciar sesión"}/>
                </section>
            </section>
            
        </main>
    )
}