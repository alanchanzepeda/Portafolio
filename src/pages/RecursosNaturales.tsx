import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import bannerImg from '../assets/recursos-naturales.jpg';
import styles from '../styles/PageLayout.module.css';

const RecursosNaturales = () => {
  return (
    <div className={styles.page}>
      <img src={bannerImg} alt="Recursos Naturales de México" className={styles.banner} />

      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.greenTitle}>1. Recursos Naturales</h1>
        <p>Conoce los recursos naturales de México, su importancia y los retos que enfrentamos.</p>
      </div>

      <div className={styles.content}>
        <TopicCard title="1.1 Recursos Renovables" color="green" delay={0.1}>
          <p>
            Los recursos renovables son aquellos que se pueden regenerar de forma natural en un período corto de tiempo.
            México cuenta con una gran diversidad de estos recursos:
          </p>
          <ul>
            <li><strong>Agua:</strong> México posee importantes ríos como el Grijalva-Usumacinta, el Papaloapan y el Balsas. Sin embargo, su distribución es desigual: el sureste concentra la mayor parte del agua, mientras que el norte enfrenta escasez.</li>
            <li><strong>Energía solar:</strong> El norte del país recibe una de las radiaciones solares más altas del mundo, lo que lo convierte en un sitio ideal para plantas de energía solar.</li>
            <li><strong>Viento:</strong> Regiones como el Istmo de Tehuantepec en Oaxaca son reconocidas mundialmente por su potencial eólico.</li>
            <li><strong>Bosques:</strong> México ocupa el 12° lugar mundial en superficie forestal, con bosques templados en la Sierra Madre y selvas tropicales en Chiapas y la Península de Yucatán.</li>
          </ul>
        </TopicCard>

        <TopicCard title="1.2 Recursos No Renovables" color="orange" delay={0.2}>
          <p>
            Son aquellos que existen en cantidades limitadas y no se regeneran a escala humana. Su explotación ha sido clave para la economía mexicana:
          </p>
          <ul>
            <li><strong>Petróleo:</strong> México fue uno de los mayores productores de petróleo del mundo. Cantarell y Ku-Maloob-Zaap son algunos de los yacimientos más importantes. PEMEX ha sido pilar de la economía nacional.</li>
            <li><strong>Minerales:</strong> México es el primer productor mundial de plata y también extrae oro, cobre, zinc y plomo, principalmente en estados como Zacatecas, Sonora y Chihuahua.</li>
            <li><strong>Gas natural:</strong> Utilizado en la industria y generación eléctrica, su producción se concentra en el sureste del país y en la cuenca de Burgos.</li>
          </ul>
        </TopicCard>

        <TopicCard title="1.3 Problemas Ambientales" color="red" delay={0.3}>
          <p>
            El crecimiento económico y poblacional ha generado serios problemas ambientales en México:
          </p>
          <ul>
            <li><strong>Contaminación:</strong> Las grandes ciudades como la CDMX y Monterrey enfrentan altos niveles de contaminación del aire. Los ríos y lagos también sufren contaminación por desechos industriales y urbanos.</li>
            <li><strong>Deforestación:</strong> Se estima que México pierde aproximadamente 150,000 hectáreas de bosque al año debido a la agricultura, ganadería y tala ilegal.</li>
            <li><strong>Cambio climático:</strong> México es vulnerable a fenómenos como huracanes más intensos, sequías prolongadas y aumento del nivel del mar en sus costas.</li>
            <li><strong>Sobreexplotación de recursos:</strong> Acuíferos sobreexplotados, pesca excesiva y minería sin regulación adecuada amenazan la sostenibilidad del país.</li>
          </ul>
        </TopicCard>

        <TopicCard title="1.4 Población y Recursos" color="blue" delay={0.4}>
          <p>
            La relación entre población y recursos es fundamental para entender los retos de desarrollo de México.
            Con más de 130 millones de habitantes, la demanda de recursos crece constantemente:
          </p>
          <ul>
            <li><strong>Pobreza:</strong> Según CONEVAL, cerca del 36% de la población vive en situación de pobreza, lo que limita su acceso a recursos básicos como alimentación, salud y vivienda.</li>
            <li><strong>Desempleo:</strong> Aunque la tasa oficial es baja (alrededor del 3%), el subempleo y la informalidad afectan a millones de mexicanos.</li>
            <li><strong>Economía informal:</strong> Más del 55% de la población económicamente activa trabaja en la informalidad, sin prestaciones ni seguridad social.</li>
          </ul>
        </TopicCard>
      </div>
    </div>
  );
};

export default RecursosNaturales;
