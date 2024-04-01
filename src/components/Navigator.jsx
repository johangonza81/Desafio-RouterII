import { NavLink } from "react-router-dom"
import Dibujo from "../views/Dibujo";



const Navigator = () => {
  return (
    <nav className="navar">
        <div className="navar2">
        <NavLink  to = "/"><Dibujo/></NavLink>
        </div>
        <div className="navar3">
        <NavLink activeClassName="active" to = "/Home"> Home </NavLink>
        <NavLink activeClassName="active" to = "/Pokemons"> Pokemons </NavLink>
        </div>
    </nav>
  )
}
export default Navigator;
