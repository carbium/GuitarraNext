import Image from "next/future/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

export default function Guitarra({guitarra}) {
  const { descripcion, imagen, precio, nombre, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.small.url} alt={`imagen guitarra ${nombre}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
              ver producto
          </a>
        </Link>
      </div>
    </div>
  )
}
