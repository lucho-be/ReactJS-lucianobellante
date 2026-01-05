import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function agregarAlCarrito(producto) {
    setCart(prev => [...prev, producto]);
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
})
  }

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export function CartPage() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="cart-item">El carrito está vacío</p>;
  }

  return (
    <section className="cart">
      <h2>Carrito</h2>

      {cart.map(producto => (
        <div key={producto.id} className="cart-item">
            <img 
        src={`/img/productos/${producto.nombre}.jpg`}
        alt={producto.nombre}
      />
          <p>{producto.nombre}</p>
          <p className="cart-precio">$ {(producto.precio).toLocaleString('es-AR')}</p>
        </div>
      ))}
    </section>
  );
}

