import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeLogin } from './pages/homeLogin'
import { Nav } from './components/nav'
import { Arrays } from './components/arrays'
import { Boton } from './components/boton'
import { BackGroundChange } from './components/backgroundChange'
import { Expand } from './components/Expand'
import { PrimaryButton } from './components/PrimaryButton'
import { ListDinamica } from './ListaDinamica'
import { EventosExercise } from './components/eventos'
import { Loader } from './components/loader'
function App() {
  const [state, setState] = useState(false)
  const [loading, setLoading] = useState(false)

    const getLoader = async ()=>{
    setLoading(!loading)

    console.log("Aplicando loading")

    setTimeout(()=>{
      setLoading(prevLoad => !prevLoad)
      console.log("cerrando loading")
    }, 3000)
    
    
  }



  return (
    <div style={{height:"100%", width: "100%"}}>
    <Nav/>
    {/* <Arrays/>
    <Boton onClick={()=>alert("boton1")}  type="primary" />
    <Boton onClick={()=>alert("boton2")}  type="secondary" />
    <Boton onClick={()=>alert("boton3")} disabled={true} type="primary" />
    <BackGroundChange/> */}
    {/* <Expand setState={setState} state={state} >
      
        <p>Hola Mundo</p>
        <PrimaryButton title={"contract"} fill action={(state)=>setState(!state)}/>
     
    </Expand> */}
    {/* <ListDinamica/> */}
    {loading ? <Loader />: null}
    <PrimaryButton action={getLoader} fill title={"Púlsame Loader"}/>
    {/* <EventosExercise setLoading={setLoading} loading={loading}/> */}
    </div>
    
  )
}

export default App
