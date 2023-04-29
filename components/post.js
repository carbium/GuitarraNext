import Image from "next/future/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.module.css"


export default function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen Blog ${titulo}`} width={600} height={400}/>

            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>

                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        leer post
                    </a>
                </Link>
            </div>

        </article>

    )
}
