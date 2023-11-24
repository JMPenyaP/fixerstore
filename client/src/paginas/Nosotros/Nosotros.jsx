import Footer from "../../components/Footer/Footer";
import './Nosotros.css';

export default function Nosotros() {
    return (
        <>
            <div className='global-container'>
                <div className='cabecera'>
                    <div className='titulo-cabecera'>
                        <div className='logo-cabecera'>
                            <img src="https://fixershoes.com/assets/logo-slogan.png" alt="Logo" width="100px" height="90px"/>
                        </div>
                        <div className='slogan-cabecera'>
                            Cuidado y Restauración de Calzado
                        </div>
                    </div>
                    <div>
                        <img src='https://fixershoes.com/assets/bg_nosotros3.jpg' alt="nosotros" width="100%" />
                    </div>
                </div>
                <div className="nosotros-container">
                    {/* <h1 className="titulo-seccion">Fixer Shoes</h1> */}
                    <div className="texto-importante">
                        <img src="https://fixershoes.com/assets/stan1.jpg" alt="Stand Fixer" className='imagen-derecha' />
                        <p>Somos una marca con 10 años de experiencia en el mercado Colombiano, En Fixer Shoes, no solo reparamos calzado, creamos obras maestras de comodidad y estilo. Con una meticulosa atención al detalle y una artesanía inigualable, cada par de zapatos es una fusión perfecta de moda y funcionalidad.</p>
                        <p>Nuestra pasión por la calidad se refleja en cada uno de nuestros productos, Fixer Shoes determinan una experiencia única en su calzado que se adapta a la necesidad de nuestros clientes.</p>
                        <p>Cuidamos el medio ambiente con nuestros servicios profesionales de limpieza y reparación de calzado.</p>
                        <p>Apoyando la economía circular, antes de reciclar lo mejor es reparar, dándole muchas oportunidades a tus artículos para que estén siempre Como Nuevos ! 🙂 Mas de 20.000 pares de zapatos reparados en 10 años!</p>
                        <div>
                            <img src="https://fixershoes.com/assets/logo-co-colombia.svg" alt="Economía circular" width="80px" /><span />
                            <img src="https://fixershoes.com/assets/reciclar.jpg" alt="Economía circular" width="80px" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="texto-importante">
                        <img src="https://fixershoes.com/assets/vitrina1.jpg" alt="Vitrina Fixer" className='imagen-izquierda' />
                        <h2>Misión:</h2>
                        <p>“Brindar servicios de calidad para el cuidado personal del calzado y tus pies.”</p>
                        <h2>Visión:</h2>
                        <p>Ser reconocidos por nuestro compromiso con las personas y con el planeta.</p>
                    </div>
                    <br />
                    <br />
                    <div className="texto-importante">
                        <img src="https://fixershoes.com/assets/puerta_fixer.jpg" alt="Puerta Fixer" className='imagen-derecha' />
                        <h3>Razón de ser:</h3>
                        <ul>
                            <li>Embellecer, reparar, restaurar todo tipo de calzado, cuidando el medio ambiente y la economía de las personas.</li>
                            <li>Desafiando la obsolescencia programada, apoyando la economía circular.</li>
                            <li>Reparar es cuidar</li>
                            <li>¡Inspiramos a cuidar tu mundo!</li>
                            <li>Cuidamos tu salud, cuidamos lo que más aprecias, cuidamos tu imagen, cuidamos tu economía (bolsillo), cuidamos de tu ambiente, cuidamos tus pasos.</li>
                        </ul>
                        <h3>Valores:</h3>
                        <ul>
                            <li>Respeto</li>
                            <li>Cumplimiento</li>
                            <li>Transparencia</li>
                            <li>Compromiso</li>
                            <li>Colaboración y trabajo en equipo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}