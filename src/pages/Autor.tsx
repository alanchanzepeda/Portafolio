import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from '../styles/Autor.module.css';

const Autor = () => {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.card}>
        <div className={styles.avatar}>AS</div>
        <h1>Sobre el Autor</h1>

        <div className={styles.detail}>
          <span className={styles.label}>Nombre</span>
          <span className={styles.value}>Alan Sauriel</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Materia</span>
          <span className={styles.value}>Recursos y Necesidades de México</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Tipo de trabajo</span>
          <span className={styles.value}>Portafolio Virtual de Evidencias</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Año</span>
          <span className={styles.value}>2026</span>
        </div>

        <div className={styles.bio}>
          Estudiante comprometido con el aprendizaje sobre los recursos naturales y las necesidades
          económicas de México. Este portafolio virtual reúne los conocimientos adquiridos durante
          el curso, presentados de forma interactiva e innovadora para facilitar la comprensión
          de temas fundamentales para el desarrollo de nuestro país.
        </div>
      </div>
    </div>
  );
};

export default Autor;
