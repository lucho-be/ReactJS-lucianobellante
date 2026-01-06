import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

     const form = e.currentTarget;
  const nombre = form.nombre.value;
  const email = form.email.value;

  Swal.fire({
      title: "Compra exitosa",
      html: `Felicitaciones <b>${nombre}</b> por tu compra, recibirás el detalle al correo: <b>${email}</b>`,
      icon: "success",
      confirmButtonText: "Ir al inicio"
    }).then(() => {
      navigate("/");
    });
  }

  if (cart.length === 0) {
    return <p className="cart-item">El carrito está vacío</p>;
  }

  return (
    <>
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
    <section className="formulario">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required="" />
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" required="" />
  </div>
  <button type="submit">Comprar</button>
</form>
    </section>
    </>
  );
}

