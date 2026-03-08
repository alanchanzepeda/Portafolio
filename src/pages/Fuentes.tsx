import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from '../styles/Fuentes.module.css';

const Fuentes = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={18} /> Volver al menú
        </Link>

        <h1 className={styles.title}>Fuentes de Consulta</h1>

        <div className={styles.list}>

          <div className={styles.ref}>
            Méndez Morales, J. S. (2012). <em>Problemas económicos de México y sustentabilidad</em> (7ª ed.). 
            McGraw-Hill / Interamericana Editores.
          </div>

          <div className={styles.ref}>
            Instituto Nacional de Estadística y Geografía (INEGI). (2023). 
            <em>Estadísticas de población en México.</em> Recuperado de https://www.inegi.org.mx
          </div>

          <div className={styles.ref}>
            Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT). (2022). 
            <em>Informe de la situación del medio ambiente en México.</em> Recuperado de https://www.gob.mx/semarnat
          </div>

          <div className={styles.ref}>
            Banco Mundial. (2023). 
            <em>Indicadores de desarrollo económico en México.</em> Recuperado de https://www.bancomundial.org
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fuentes;
