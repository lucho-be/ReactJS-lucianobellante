import { NavLink } from 'react-router';
import '../App.css';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <div className="navbar">
            <img src="/logo.png" alt="logo" className="logo"/>
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/categorias">Categorías</NavLink>
        </nav>
        <CartWidget/>
        </div>
    )
}