// Herramientas de React
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// Estilos
import styles from '../styles/header.module.css';

function Header() {

  const router = useRouter();

  return (
    <>
    <header className={styles.header}>
        <div className={`contenedor`}>
      
            <div className={styles.flex}>
              <Link href={'/'}>
                  <h1>Shop<span>GM</span> <FontAwesomeIcon icon={faGamepad} /></h1>
              </Link>

              <div className={styles.iconos}>
                <p><a href='#'><FaInstagram /></a></p>
                <p><a href='#'><FaFacebook /></a></p>
                <p><a href='#'><FaTwitter /></a></p>
              </div>

            </div>
        </div>
        

    </header>
    <div className={styles.barra}>
      <Link href="/"><h2>ShopGM <FontAwesomeIcon icon={faGamepad} /></h2></Link>
      <nav className={styles.navegacion}>
          <Link href='/' className={router.pathname === '/' ? styles.active : ''}> 
          Inicio
          </Link>
          <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}> 
          Nosotros
          </Link>
          <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}> 
          Tienda
          </Link>
          <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}> 
          Blog
          </Link>
          <Link href='/carrito'> 
          <Image src="/../public/img/carrito.png" width={22} height={20} alt="Imagen Carrito"/>
          </Link>
        </nav>

    </div>

   </>
  )
}
export default Header