import './style.css'
import icon from '../../assets/logoX.png'

export const Boton = ({type = "primary", disabled = false, onClick})=>{

    return <button className={type} onClick={onClick} disabled={disabled}>
                <img  width={15} src={icon} alt=""/>
                <p>{type}</p>
            </button>
}