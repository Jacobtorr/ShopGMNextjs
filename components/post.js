import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css"

function Post({post}) {

    const { titulo, descripcion, imagen, publishedAt, url } = post;

  return (
    <article className={styles.post}>
    <Image className={styles.imagen} width={600} height={600} src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`}/>

    <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{descripcion}</p>
        
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
    </div>
</article>
  )
}
export default Post;