import { Link } from "react-router";

function Categories() {
  return (
    <>
      <h3 className="page-title">Categorias</h3>

      <div className="categorias">
        <Link to="/categoria/plantas" className="categoria-card">
          <img src="/img/categorias/plantas.png" alt="Plantas" />
          <h4>Plantas</h4>
        </Link>

        <Link to="/categoria/macetas" className="categoria-card">
          <img src="/img/categorias/macetas.png" alt="Macetas" />
          <h4>Macetas & Floreros</h4>
        </Link>

        <Link to="/categoria/herramientas" className="categoria-card">
          <img src="/img/categorias/herramientas.png" alt="Herramientas" />
          <h4>Herramientas</h4>
        </Link>
      </div>
    </>
  );
}

export default Categories;
  