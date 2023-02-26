import Layout from 'shopgm-next/components/layout';
import Producto from 'shopgm-next/components/producto';
import Post from 'shopgm-next/components/post';
import Torneo from 'shopgm-next/components/torneo';
import styles from '../styles/grid.module.css';

export default function Home({productos, posts, torneo}) {


  return (
    <Layout
      title={'Inicio'}
      description={'Tienda online, venta de productos gamer y mas'}
      >

        <main className='contenedor'>
          <h1 className='heading'>Inicio</h1>

          <div className={styles.grid}>
              {productos?.map( producto => (
                <Producto 
                  key={producto?.id}
                  producto={producto?.attributes}
                />
              ))}
            </div>
        </main>

        <section>
              <Torneo
                torneo={torneo.attributes}
              />
        </section>

        <section className='contenedor'>
          <h1 className='heading'>Blog</h1>

          <div className={styles.grid}>
              {posts?.map( post => (
                <Post 
                  key={post?.id}
                  post={post?.attributes}
                />
              ))}
            </div>
        </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const urlProductos = `${process.env.API_URL}/productos?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlTorneo = `${process.env.API_URL}/torneo?populate=imagen`;


  const [ resProductos, resPosts, resTorneo ] = await Promise.all([
    fetch(urlProductos),
    fetch(urlPosts),
    fetch(urlTorneo)

  ])

  const [{data: productos}, {data: posts}, {data: torneo} ] = await Promise.all([
    resProductos.json(),
    resPosts.json(),
    resTorneo.json()

  ])

  return {
    props: {
      productos,
      posts,
      torneo
    }
  }
}

