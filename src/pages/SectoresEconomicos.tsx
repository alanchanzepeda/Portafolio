import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import bannerImg from '../assets/sectores-economicos.jpg';
import styles from '../styles/PageLayout.module.css';

const SectoresEconomicos = () => {
  return (
    <div className={styles.page}>
      <img src={bannerImg} alt="Sectores Económicos de México" className={styles.banner} />

      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.orangeTitle}>2. Sectores Económicos</h1>
        <p>Explora los sectores que impulsan la economía mexicana y su impacto en el desarrollo nacional.</p>
      </div>

      <div className={styles.content}>
        <TopicCard title="2.1 Desarrollo Agropecuario" color="green" delay={0.1}>
          <p>
            El sector agropecuario es la base de la alimentación y una fuente importante de empleo en México:
          </p>
          <ul>
            <li><strong>Agricultura:</strong> México es uno de los principales productores mundiales de aguacate, limón, jitomate, chile y maíz. Estados como Sinaloa, Jalisco y Michoacán lideran la producción agrícola.</li>
            <li><strong>Ganadería:</strong> La ganadería bovina se concentra en Veracruz, Jalisco y Chihuahua. México también es un importante productor de pollo y cerdo.</li>
            <li>El sector emplea a cerca del 12% de la población, aunque contribuye con solo el 3.5% del PIB, lo que refleja baja productividad y necesidad de modernización.</li>
          </ul>
        </TopicCard>

        <TopicCard title="2.2 Desarrollo Industrial" color="orange" delay={0.2}>
          <p>
            La industria es el motor de la economía mexicana y representa alrededor del 30% del PIB:
          </p>
          <ul>
            <li><strong>Industria manufacturera:</strong> México es una potencia en manufactura automotriz, electrónica y aeroespacial. Ciudades como Querétaro, Monterrey y Guadalajara son centros industriales clave.</li>
            <li><strong>Industria energética:</strong> Además del petróleo, México desarrolla proyectos de energía renovable. Las refinerías y plantas petroquímicas son fundamentales para el sector.</li>
            <li>Las maquiladoras en la frontera norte generan millones de empleos y son un eslabón importante en las cadenas globales de producción.</li>
          </ul>
        </TopicCard>

        <TopicCard title="2.3 Desarrollo de Servicios" color="blue" delay={0.3}>
          <p>
            El sector servicios es el más grande de la economía mexicana, representando más del 60% del PIB:
          </p>
          <ul>
            <li><strong>Transporte:</strong> México cuenta con una red de carreteras de más de 400,000 km, puertos marítimos estratégicos como Manzanillo y Lázaro Cárdenas, y aeropuertos internacionales en las principales ciudades.</li>
            <li><strong>Telecomunicaciones:</strong> El acceso a internet y telefonía móvil ha crecido significativamente, aunque persiste la brecha digital entre zonas urbanas y rurales.</li>
            <li><strong>Vivienda:</strong> El déficit habitacional sigue siendo un reto. Programas como INFONAVIT y FOVISSSTE buscan facilitar el acceso a vivienda digna.</li>
            <li><strong>Agua potable y alcantarillado:</strong> Aunque la cobertura nacional supera el 95%, comunidades rurales e indígenas aún carecen de acceso adecuado a estos servicios básicos.</li>
          </ul>
        </TopicCard>

        <TopicCard title="2.4 Educación" color="yellow" delay={0.4}>
          <p>
            La educación es un pilar fundamental para el desarrollo económico y social de México:
          </p>
          <ul>
            <li>México destina alrededor del 5% de su PIB a educación, con cobertura casi universal en educación básica.</li>
            <li>Sin embargo, la calidad educativa sigue siendo un reto. Las evaluaciones internacionales (PISA) muestran rezago en matemáticas, ciencias y lectura.</li>
            <li>La educación superior enfrenta desigualdad de acceso: mientras las zonas urbanas tienen múltiples universidades, las rurales tienen opciones limitadas.</li>
            <li>La formación técnica y profesional es clave para la competitividad industrial del país, con instituciones como CONALEP e IPN formando técnicos especializados.</li>
          </ul>
        </TopicCard>
      </div>
    </div>
  );
};

export default SectoresEconomicos;
