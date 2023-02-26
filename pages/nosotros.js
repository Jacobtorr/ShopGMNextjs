import Image from 'next/image'
import Layout from 'shopgm-next/components/layout'
import styles from '../styles/nosotros.module.css'


function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Conoce sobre nosotros'}
    >
        <main className='contenedor'>
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image src="/../public/img/news_02.jpg" width={600} height={600} alt='Imagen Nosotros'/>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vero vitae, magni maiores numquam dolor cum est quam rem atque fugiat ex inventore accusamus expedita dicta sed labore optio odit quia illum nemo? Magnam facilis repellendus unde fuga nemo rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eaque!</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vero vitae, magni maiores numquam dolor cum est quam rem atque fugiat ex inventore accusamus expedita dicta sed labore optio odit quia illum nemo? Magnam facilis repellendus unde fuga nemo rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eaque!</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
export default Nosotros