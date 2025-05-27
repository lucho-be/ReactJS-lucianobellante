import CartWidget from "./CartWidget";

export default function Button() {
    return (
        <div className="nav">
            <h4>SITIO VERDE</h4>
        <nav>
            <a className="catProducto">Plantas</a >
            <a className="catProducto">Macetas</a >
            <a className="catProducto">Floreros</a >
        </nav>
        <CartWidget/>
        </div>
    )
}