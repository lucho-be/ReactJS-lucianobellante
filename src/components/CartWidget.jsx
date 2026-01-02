import { Link } from "react-router";
import "../App.css";

export default function CartWidget() {
  return (
    <Link to="/carrito" className="cartwidget">
      <img src="/cart.png" alt="carrito" />
    </Link>
  );
}
