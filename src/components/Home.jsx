import { NavLink } from "react-router"
import Productos from "./Productos"

function Home() {
    return (
        <>
            <img src="/img/home-img.png" alt="imagen principal" className="home-img" />
            <div className="home-text">
                <h1>Expertos en paisajismo
                </h1>
                <p>Sitio Verde es más que un simple vivero. Somos un oasis donde la naturaleza se encuentra con el diseño. Nuestra misión es llevar la belleza y la tranquilidad de los jardines a tus espacios interiores y exteriores.</p>
                <NavLink to="/productos" className={"home-button"}>Productos y servicios</NavLink>
            </div>
            <section className="home-info">
                <div className="home-info-text">
                    <h3>¿Por qué elegirnos?</h3>
                    <div className="info-container">
                        <h5>Personalizacion</h5>
                        <p>Nuestra pasión es crear jardines únicos que reflejen tu estilo y personalidad. Con años de experiencia, te ofrecemos soluciones personalizadas para cualquier espacio. ilmagina tu jardín ideal y nosotros lo hacemos realidad!</p>
                    </div>
                    <div className="info-container">
                        <h5>Naturaleza y bienestar</h5>
                        <p>Con nuestro paisajismo, conectarás con la naturaleza y mejorarás tu calidad de vida. Diseños personalizados, plantas de alta calidad y un equipo de expertos te esperan.</p>
                    </div>
                    <div className="info-container">
                        <h5>Equipo de profesionales</h5>
                        <p>Buscamos la excelencia en cada proyecto. Materiales de primera calidad, mano de obra experta y un servicio al cliente excepcional nos distinguen.</p>
                    </div>
                    <div className="info-container">
                        <h5>Sostenibilidad</h5>
                        <p>Un jardín hermoso y sostenible es posible. Nuestros diseños incorporan plantas nativas, sistemas de riego eficientes y prácticas respetuosas con el medio ambiente. ¡Contribuye a un mundo más verde con nosotros!</p>
                    </div>
                </div>
                <div className="home-info-img">
                    <img src="/img/info.jpeg" alt="jardinero" />
                </div>
            </section>
            <section className="productos">
                <h3>Nuestros productos</h3>
                    <Productos/>
            </section>
        </>
    )
}
export default Home