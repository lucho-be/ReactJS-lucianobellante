import ProductCard from "./ProductCard";

function Productos() {
  const productos = [
  {
    id: 1,
    nombre: 'Zamioculcas',
    detalle: 'Planta Zamioculcas (ZZ) en Maceta de Cerámica',
    precio: 4500,
    categoria: 'plantas'
  },
  {
    id: 2,
    nombre: 'Kokedama',
    detalle: 'Kokedama de Lirio de la Paz con Bandeja de Madera',
    precio: 6800,
    categoria: 'plantas'
  },
  {
    id: 3,
    nombre: 'Jarrón Lágrima',
    detalle: 'Jarrón de Vidrio Lágrima con Soporte de Metal y Base de Mármol',
    precio: 5200,
    categoria: 'macetas'
  },
  {
    id: 4,
    nombre: 'Cactus',
    detalle: 'Trío de Cactus Variados en Maceta Blanca',
    precio: 3900,
    categoria: 'plantas'
  },
  {
    id: 5,
    nombre: 'Potus Colgante',
    detalle: 'Planta Potus Colgante en Maceta Beige',
    precio: 4200,
    categoria: 'plantas'
  },
  {
    id: 6,
    nombre: 'Maceta',
    detalle: 'Maceta de Cerámica Negra Mate Vacía',
    precio: 2500,
    categoria: 'macetas'
  },
  {
    id: 7,
    nombre: 'Sansevieria',
    detalle: 'Planta Sansevieria (Lengua de Suegra) en Maceta Texturizada',
    precio: 4800,
    categoria: 'plantas'
  },
  {
    id: 8,
    nombre: 'Set Herramientas',
    detalle: 'Set de 4 Herramientas de Jardinería (Pala, Rastrillo, Tijeras, Marcador)',
    precio: 3500,
    categoria: 'herramientas'
  },
  {
    id: 9,
    nombre: 'Pilea Peperomioides',
    detalle: 'Planta Pilea Peperomioides (Planta del Dinero China)',
    precio: 4100,
    categoria: 'plantas'
  },
  {
    id: 10,
    nombre: 'Jarrón Cilíndrico',
    detalle: 'Jarrón de Vidrio Cilíndrico con Soporte de Metal y Base de Mármol',
    precio: 5500,
    categoria: 'macetas'
  }
]

  return (
    <section className="productos">
      <h3>Nuestros productos</h3>
      <div className="productos-container">
      {productos.map(prod => (
        <ProductCard
          key={prod.id}
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



