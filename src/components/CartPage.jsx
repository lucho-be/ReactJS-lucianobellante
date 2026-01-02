import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function agregarAlCarrito(producto) {
    setCart(prev => [...prev, producto]);
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
    return <p>El carrito está vacío</p>;
  }

  return (
    <section className="cart">
      <h2>Carrito de compras</h2>

      {cart.map(producto => (
        <div key={producto.id} className="cart-item">
            <img 
        src={`/img/productos/${producto.nombre}.jpg`}
        alt={producto.nombre}
      />
          <p>{producto.nombre}</p>
          <p>${producto.precio}</p>
        </div>
      ))}
    </section>
  );
}

