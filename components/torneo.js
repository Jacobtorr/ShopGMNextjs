import styles from '../styles/torneo.module.css';

function Torneo({torneo}) {

    const {contenido, imagen, titulo } = torneo;

  return (
    <section className={`${styles.torneo} torneo`}>

        <style jsx="true">{`
            .torneo {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / 7)),url(${imagen.data.attributes.url});
            }
        `}</style>
       

        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className="heading_two">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}
export default Torneo