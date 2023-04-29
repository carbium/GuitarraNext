import Image from "next/future/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, Tienda de Música'}
    >
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
              <Image alt="imagen sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800}/>

              <div>
                  <p>¡Bienvenido a nuestra tienda de guitarras eléctricas!
                    En nuestra tienda, nos apasiona la música y las guitarras eléctricas son nuestra especialidad. Nos dedicamos a ofrecer una amplia gama de guitarras eléctricas para satisfacer las necesidades de todo tipo de músicos, desde principiantes hasta profesionales.</p>
                    
                  <p>En nuestra tienda, valoramos la calidad y la satisfacción del cliente por encima de todo. Nos esforzamos por ofrecer productos de alta calidad a precios competitivos y estamos comprometidos con brindar un servicio excepcional al cliente. Nuestro objetivo es hacer que tu experiencia de compra sea lo más fácil y agradable posible.
                    Gracias por visitar nuestra tienda de guitarras eléctricas. Esperamos poder ayudarte a encontrar la guitarra perfecta para ti y ser parte de tu viaje musical.</p>
              </div>

            </div>

        </main>
    </Layout>
  )
}

export default Nosotros