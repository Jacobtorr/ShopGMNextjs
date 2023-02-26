import Layout from "shopgm-next/components/layout"
import Post from "shopgm-next/components/post";
import styles from "../styles/grid.module.css";

function Blog({posts}) {

  return (

    <Layout
      title={'Blog'}
      description={'Blog de musica, venta de productos gamer y mas'}
    >
      <article className="contenedor">
        <h1 className="heading">Blog</h1>
        
        <div className={styles.grid}>
          {posts?.map( post => (
            <Post 
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
        
      </article>

    </Layout>
  )
}
export default Blog

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const {data: posts} = await res.json();

  return {
    props: {
      posts
    }
  }
}

