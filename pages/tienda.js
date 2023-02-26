import Layout from "shopgm-next/components/layout";
import Producto from "shopgm-next/components/producto";
import styles from '../styles/grid.module.css'

function Tienda({productos}) {


  return (
    <Layout
      title="Tienda Online"
      description="Tienda Online de Articulos de computacion"
    >
        <main className="contenedor">
          <h1 className="heading">Tienda</h1>

          <div className={styles.grid}>
              {productos?.map( producto => (
                <Producto 
                  key={producto?.id}
                  producto={producto?.attributes}
                />
              ))}
            </div>
        </main>
    </Layout>
  )
}
export default Tienda;


export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/productos?populate=imagen`);
  const {data: productos} = await res.json();

  return {
    props: {
      productos
    }
  }
}
