import { Link } from "react-router";

function ProductCard(props) {
  return (
    <div className="product">
      <img 
        src={`/img/productos/${props.nombreProducto}.jpg`}
        alt={props.nombreProducto}
        className="product-img"
      />

      <p className="product-name">{props.nombreProducto}</p>
      <p className="product-details">{props.detallesProducto}</p>
      <p className="product-price">${props.precioProducto}</p>

      <Link to={`/producto/${props.id}`} className="view-button">
        Ver producto
      </Link>
    </div>
  );
}

export default ProductCard;

