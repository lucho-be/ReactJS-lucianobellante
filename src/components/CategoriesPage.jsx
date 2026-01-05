import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { Link } from "react-router";

function CategoriesPage() {
  const { categoriaNombre } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {

      const productosRef = collection(db, "productos");
      const q = query(
        productosRef,
        where("categoria", "==", categoriaNombre)
      );

      const snapshot = await getDocs(q);

      const productosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductos(productosData);
    }

    fetchProductos();
  }, [categoriaNombre]);

  return (
    <section className="categoria-productos">
      <h3 className="page-title">
        Categoría: {categoriaNombre}
      </h3>

      <div className="productos-container">
        {productos.map((producto) => (
    <div key={producto.id} className="product">
      <img
        src={`/img/productos/${producto.nombre}.jpg`}
        alt={producto.nombre}
        className="product-img"
      />

      <p className="product-name">{producto.nombre}</p>
      <p className="product-details">{producto.detalles}</p>
      <p className="product-price">${producto.precio}</p>

      <Link to={`/producto/${producto.id}`} className="view-button">
        Ver producto
      </Link>
    </div>
  ))}
      </div>
    </section>
  );
}

export default CategoriesPage;

