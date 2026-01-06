import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "./CartPage"; 
import "../App.css";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cartwidget">
        <img src="/cart.png" alt="carrito" />
      </Link>

      <p className="cart-count">{cart.length}</p>
    </div>
  );
}

