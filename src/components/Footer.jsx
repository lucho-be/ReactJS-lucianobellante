export default function Footer() {
    return (
        <footer className="footer">
                <hr />
            <div className="footerRedes">
                <div>
                    <h4>Nuestras redes</h4>
                    <img src="/facebook.png" alt="facebook" className="iconoRedes" />
                    <img src="/whatsapp.png" alt="whatsapp" className="iconoRedes" />
                    <img src="/twitter.png" alt="twitter" className="iconoRedes" />
                </div>
                <div>
                    <h4>Suscribirse al blog</h4>
                    <p>No te pierdas nuestras novedades. Suscribite!</p>
                    <button>Suscribirse</button>
                </div>
            </div>
            <div className="copyright"><p>©2026. Luciano Bellante. Proyecto del curso React JS de Coderhouse.</p>
            </div>
        </footer>
    )
}