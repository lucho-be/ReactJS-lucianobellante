import { NavLink } from 'react-router';
import '../App.css';
import CartWidget from "./CartWidget";

export default function Button() {
    return (
        <div className="navbar">
            <img src="/logo.png" alt="logo" className="logo"/>
        <nav>
            
            <a className="catProducto">Macetas</a >
            <a className="catProducto">Floreros</a >
        </nav>
        <CartWidget/>
        </div>
    )
}