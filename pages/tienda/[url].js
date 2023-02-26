import { useState } from "react";
import Image from "next/image";
import Layout from "shopgm-next/components/layout";
import styles from '../../styles/productos.module.css'

function Producto({producto, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0);
    const { nombre, imagen, descripcion, precio } = producto[0].attributes;

    function handleSubmit(e) {
        e.preventDefault();

        if(cantidad < 1) {
            alert('Cantidad no valida');
            return;
        }

        // Construir Objeto
        const productoSeleccionado = {
            id: producto[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando la informacion al Context
        agregarCarrito(productoSeleccionado);
    }


  return (
    <Layout 
        title={`Producto ${nombre}`}
        description={`Producto Gamer de alta gama con un bajo precio`}
    >
        <div className={styles.producto}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form 
                    className={styles.formulario}
                    onSubmit={handleSubmit} 
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        id="cantidad"
                        onChange={e => setCantidad(e.target.value)}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value="Agregar al Carrito" />
                </form>

            </div>
        </div>
  </Layout>
  )
}
export default Producto;

export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.API_URL}/productos`)
    const {data} = await respuesta.json();

    const paths = data.map(producto => ({
        params: {
            url: producto.attributes.url
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/productos?filters[url]=${url}&populate=imagen`);
    const { data: producto } = await respuesta.json();

    return {
        props: {
            producto
        }
    }
}