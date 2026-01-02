import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import { useContext } from "react";
import { CartContext } from "./CartPage"

export default function ProductoDetalle() {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  
    const [producto, setProducto] = useState(null);

  useEffect(() => {
    async function obtenerProducto() {
      const productoRef = doc(db, "productos", id);
      const snapshot = await getDoc(productoRef);

      if (snapshot.exists()) {
        setProducto({
          id: snapshot.id,
          ...snapshot.data()
        });
      }
    }

    obtenerProducto();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <article className="producto-detalle">
      <div>
        <h3>{producto.nombre}</h3>
        <img 
        src={`/img/productos/${producto.nombre}.jpg`}
        alt={producto.nombre}
      />
      </div>

      <div className="producto-info">
        <p className="prod-detalle">{producto.detalle}</p>
        <p className="prod-precio">${producto.precio}</p>
        <button onClick={() => agregarAlCarrito(producto)}>
  Agregar al carrito
</button>
      </div>
    </article>
  );
}



