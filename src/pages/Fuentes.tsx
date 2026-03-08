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
            INEGI. (2023). <em>Estadísticas de población en México.</em> Instituto Nacional de Estadística y Geografía. Recuperado de https://www.inegi.org.mx
          </div>
          <div className={styles.ref}>
            SEMARNAT. (2022). <em>Recursos naturales en México: Informe de la situación del medio ambiente.</em> Secretaría de Medio Ambiente y Recursos Naturales. Recuperado de https://www.gob.mx/semarnat
          </div>
          <div className={styles.ref}>
            Banco Mundial. (2023). <em>Desarrollo económico en México: Indicadores y perspectivas.</em> Grupo Banco Mundial. Recuperado de https://www.bancomundial.org
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fuentes;
