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
        <div className={styles.avatar}>AC</div>
        <h1>Sobre el Autor</h1>

        <div className={styles.detail}>
          <span className={styles.label}>Nombre</span>
          <span className={styles.value}>Alan Sauriel Chan Zepeda</span>
        </div>

        <div className={styles.detail}>
          <span className={styles.label}>Universidad</span>
          <span className={styles.value}>
            Universidad Autónoma de Campeche — Facultad de Ingeniería
          </span>
        </div>

        <div className={styles.detail}>
          <span className={styles.label}>Carrera</span>
          <span className={styles.value}>Ingeniería en Sistemas Computacionales</span>
        </div>

        <div className={styles.detail}>
          <span className={styles.label}>Materia</span>
          <span className={styles.value}>Recursos y Necesidades de México</span>
        </div>

        <div className={styles.detail}>
          <span className={styles.label}>Profesor</span>
          <span className={styles.value}>Julio C. García Fajardo</span>
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
          Este portafolio virtual de evidencias fue desarrollado como actividad final del curso
          <strong> “Recursos y Necesidades de México”</strong>, con el objetivo de integrar y presentar
          de manera organizada los conocimientos adquiridos durante el semestre.

          <br /><br />

          A lo largo de este proyecto se analizan distintos temas relacionados con los recursos
          naturales del país, los problemas ambientales, la población y los sectores económicos
          que conforman la estructura productiva de México. La información presentada busca
          explicar de manera clara cómo estos elementos influyen en el desarrollo económico
          y social del país.

          <br /><br />

          Este trabajo también tiene como propósito demostrar la aplicación de herramientas
          tecnológicas en la presentación del conocimiento, utilizando una página web interactiva
          como medio para organizar y comunicar la información de forma visual, clara y accesible.

          <br /><br />

          De esta manera, el portafolio no solo funciona como una recopilación de evidencias
          académicas del curso, sino también como un ejercicio práctico que integra el análisis
          de la realidad económica de México con el uso de tecnologías digitales.
        </div>
      </div>
    </div>
  );
};

export default Autor;
