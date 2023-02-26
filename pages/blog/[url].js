import Image from 'next/image';
import styles from '../../styles/blog.module.css';
import { formatearFecha } from '../../utils/helpers';
import Layout from '../../components/layout';

function Post({post}) {

    const {titulo, descripcion, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout
        title={titulo}
        description={`Entrada de blog ${titulo}`}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image className={styles.imagen} width={1000} height={400} src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{descripcion}</p>
            </div>
        </article>
    </Layout>
  )
}
export default Post

export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const {data} = await respuesta.json();

    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const { data: post } = await respuesta.json();

    return {
        props: {
            post
        }
    }
}

// export async function getServerSideProps ({query: {url}}) {

//     const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
//     const { data: post } = await respuesta.json();

//     return {
//         props: {
//             post
//         }
//     }
// }