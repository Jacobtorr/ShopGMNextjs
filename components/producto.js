import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/productos.module.css'

function Producto({producto}) {

  const { nombre, descripcion, imagen, precio, url } = producto;


  return (
    <div className={styles.producto}>
      <Image src={imagen.data.attributes.formats.small.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className={styles.enlace} href={`/tienda/${url}`}>
          Ver Producto
        </Link>

      </div>
    </div>
  )
}
export default Producto;