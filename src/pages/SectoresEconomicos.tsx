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
        <p>
          Los sectores económicos agrupan las actividades productivas que permiten generar bienes y servicios
          para satisfacer las necesidades de la población. En México se distinguen tres sectores principales:
          el sector primario, el sector secundario y el sector terciario.
        </p>

        <p>
          El desarrollo equilibrado de estos sectores es fundamental para el crecimiento económico del país,
          ya que cada uno cumple funciones distintas dentro del sistema productivo y contribuye a generar empleo,
          riqueza y bienestar social.
        </p>
      </div>

      <div className={styles.content}>

        <TopicCard title="2.1 Desarrollo Agropecuario" color="green" delay={0.1}>
          <p>
            El sector agropecuario pertenece al sector primario de la economía y se encarga de obtener
            directamente los recursos de la naturaleza. Incluye actividades como la agricultura,
            la ganadería, la pesca y la explotación forestal.
          </p>

          <p>
            Este sector es fundamental porque produce alimentos para la población, genera materias primas
            para la industria y proporciona empleo a millones de personas, especialmente en zonas rurales.
          </p>

          <ul>
            <li>
              <strong>Agricultura:</strong> México produce una gran variedad de cultivos como maíz, frijol,
              trigo, chile, jitomate, aguacate y café. Estados como Sinaloa, Jalisco, Michoacán y Veracruz
              destacan por su producción agrícola.
            </li>

            <li>
              <strong>Ganadería:</strong> Incluye la cría de ganado bovino, porcino, ovino y aves.
              La producción ganadera es importante para el abastecimiento de carne, leche y otros productos.
            </li>

            <li>
              <strong>Pesca y explotación forestal:</strong> Estas actividades permiten obtener recursos
              como pescado, mariscos y madera, que son utilizados tanto para el consumo como para
              actividades industriales.
            </li>

            <li>
              A pesar de su importancia, el sector agropecuario enfrenta problemas como baja productividad,
              falta de tecnología, desigualdad en la distribución de tierras y dependencia de las
              condiciones climáticas.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="2.2 Desarrollo Industrial" color="orange" delay={0.2}>
          <p>
            El sector industrial pertenece al sector secundario de la economía y se encarga de transformar
            las materias primas en productos elaborados o semielaborados mediante procesos industriales.
          </p>

          <p>
            El desarrollo industrial es importante porque genera empleo, impulsa el crecimiento económico
            y aumenta el valor agregado de los productos.
          </p>

          <ul>
            <li>
              <strong>Industria extractiva:</strong> Incluye actividades como la minería y la extracción
              de petróleo y gas natural, que permiten obtener recursos energéticos y minerales.
            </li>

            <li>
              <strong>Industria de transformación:</strong> Convierte las materias primas en productos
              industriales como automóviles, alimentos procesados, maquinaria, productos electrónicos
              y textiles.
            </li>

            <li>
              <strong>Industria energética:</strong> Produce energía necesaria para el funcionamiento
              de la economía, incluyendo electricidad y combustibles.
            </li>

            <li>
              Entre los principales problemas del sector industrial se encuentran la dependencia
              tecnológica, la concentración industrial en pocas regiones del país y la contaminación ambiental.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="2.3 Desarrollo de Servicios" color="blue" delay={0.3}>
          <p>
            El sector servicios pertenece al sector terciario de la economía y se caracteriza por
            ofrecer actividades que no producen bienes materiales, pero que satisfacen diversas
            necesidades de la población.
          </p>

          <p>
            En México, este sector ha crecido considerablemente y actualmente representa una gran parte
            de la economía nacional.
          </p>

          <ul>
            <li>
              <strong>Transporte:</strong> Permite el movimiento de personas y mercancías mediante
              diferentes medios como transporte terrestre, marítimo, aéreo y ferroviario.
              Su desarrollo facilita el comercio y la integración económica del país.
            </li>

            <li>
              <strong>Telecomunicaciones:</strong> Incluyen servicios como telefonía, internet,
              radio y televisión. Son fundamentales para la comunicación, el acceso a la información
              y el desarrollo tecnológico.
            </li>

            <li>
              <strong>Vivienda:</strong> La vivienda es una necesidad básica de la población.
              El desarrollo de este sector implica la construcción de casas, el crecimiento urbano
              y la provisión de servicios básicos para las familias.
            </li>

            <li>
              <strong>Agua potable y alcantarillado:</strong> Estos servicios son fundamentales para
              la salud pública y el bienestar social, ya que permiten prevenir enfermedades y mejorar
              la calidad de vida de la población.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="2.4 Educación" color="yellow" delay={0.4}>
          <p>
            La educación es uno de los factores más importantes para el desarrollo económico y social
            de un país. Un sistema educativo eficiente permite formar recursos humanos calificados,
            mejorar la productividad y fomentar la innovación.
          </p>

          <p>
            En México, la educación es considerada un derecho fundamental y es responsabilidad del Estado
            garantizar el acceso a la educación básica para toda la población.
          </p>

          <ul>
            <li>
              La educación contribuye a mejorar las oportunidades laborales y a reducir la pobreza.
            </li>

            <li>
              Un mayor nivel educativo permite desarrollar habilidades y conocimientos que favorecen
              el crecimiento económico.
            </li>

            <li>
              Sin embargo, el sistema educativo enfrenta desafíos como la desigualdad educativa,
              la falta de infraestructura en algunas regiones y el abandono escolar.
            </li>

            <li>
              El fortalecimiento del sistema educativo es fundamental para lograr un desarrollo
              sustentable y equitativo en el país.
            </li>
          </ul>
        </TopicCard>

      </div>
    </div>
  );
};

export default SectoresEconomicos;
