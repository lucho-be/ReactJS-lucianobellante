import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase"; // ajustá la ruta si hace falta
import ProductCard from "./ProductCard";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function obtenerProductos() {
      const productosRef = collection(db, "productos");
      const snapshot = await getDocs(productosRef);

      const productosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductos(productosData);
    }

    obtenerProductos();
  }, []);

  return (
    <section className="productos">
      <h3>Nuestros productos</h3>

      <div className="productos-container">
        {productos.map(prod => (
          <ProductCard
            key={prod.id}
            id={prod.id}
            nombreProducto={prod.nombre}
            detallesProducto={prod.detalle}
            precioProducto={prod.precio}
          />

        ))}
      </div>
    </section>
  );
}

export default Productos;




