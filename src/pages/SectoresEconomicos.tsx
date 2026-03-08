import TopicCard from "../components/TopicCard";
import styles from "../styles/PageLayout.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SectoresEconomicos = () => {
  return (
      <div className={styles.page}>

      <Link to="/" className={styles.backLink}>
      <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.orangeTitle}>2. Sectores Económicos</h1>

        <p>
          Los sectores económicos agrupan las actividades productivas que
          permiten generar bienes y servicios para satisfacer las
          necesidades de la población. Estas actividades constituyen
          la base del funcionamiento de la economía de un país.
        </p>

        <p>
          En México, las actividades económicas se dividen en tres grandes
          sectores: el sector primario, el sector secundario y el sector
          terciario. Cada uno cumple una función específica dentro del
          sistema productivo.
        </p>

        <p>
          El desarrollo equilibrado de estos sectores es fundamental para
          lograr el crecimiento económico, generar empleo, mejorar la
          calidad de vida de la población y promover el desarrollo
          regional.
        </p>

      </div>

      <div className={styles.content}>

        <TopicCard title="2.1 Desarrollo Agropecuario" color="green">

          <p>
            El sector agropecuario forma parte del sector primario de la
            economía y se encarga de obtener directamente los recursos
            de la naturaleza.
          </p>

          <p>
            Este sector incluye actividades relacionadas con la producción
            de alimentos y materias primas necesarias para otras industrias.
          </p>

          <p>Entre las principales actividades agropecuarias se encuentran:</p>

          <ul>
            <li><strong>Agricultura:</strong> cultivo de productos como maíz, frijol, trigo, café, caña de azúcar y frutas.</li>
            <li><strong>Ganadería:</strong> cría de animales para la producción de carne, leche y otros derivados.</li>
            <li><strong>Pesca:</strong> captura de especies marinas para consumo humano y comercialización.</li>
            <li><strong>Explotación forestal:</strong> aprovechamiento de recursos de los bosques.</li>
          </ul>

          <p>
            A pesar de su importancia, el sector agropecuario enfrenta
            problemas como la baja productividad, el uso limitado de
            tecnología, la desigualdad en la distribución de tierras y
            la dependencia de las condiciones climáticas.
          </p>

        </TopicCard>


        <TopicCard title="2.2 Desarrollo Industrial" color="orange">

          <p>
            El sector industrial pertenece al sector secundario de la
            economía y se encarga de transformar las materias primas en
            productos elaborados o semielaborados mediante procesos
            industriales.
          </p>

          <p>
            Este sector es fundamental porque permite aumentar el valor
            de los recursos naturales y generar productos que pueden
            comercializarse tanto en el mercado nacional como en el
            internacional.
          </p>

          <p>Las principales ramas de la industria incluyen:</p>

          <ul>
            <li><strong>Industria extractiva:</strong> minería y extracción de petróleo y gas.</li>
            <li><strong>Industria de transformación:</strong> fabricación de alimentos, textiles, maquinaria y productos tecnológicos.</li>
            <li><strong>Industria energética:</strong> producción de energía eléctrica y combustibles.</li>
          </ul>

          <p>
            Entre los problemas que enfrenta el sector industrial se
            encuentran la dependencia tecnológica, la concentración
            industrial en ciertas regiones del país y los impactos
            ambientales derivados de la producción.
          </p>

        </TopicCard>


        <TopicCard title="2.3 Desarrollo de Servicios" color="blue">

          <p>
            El sector servicios pertenece al sector terciario de la
            economía y se caracteriza por ofrecer actividades que no
            producen bienes materiales, pero que satisfacen necesidades
            importantes de la población.
          </p>

          <p>
            Este sector ha crecido considerablemente en México y
            actualmente representa una gran parte de la economía
            nacional.
          </p>

          <p>Entre los servicios más importantes se encuentran:</p>

          <ul>
            <li>Comercio</li>
            <li>Turismo</li>
            <li>Transporte</li>
            <li>Comunicaciones</li>
            <li>Salud</li>
            <li>Educación</li>
          </ul>

        </TopicCard>


        <TopicCard title="2.3.1 Transporte" color="blue">

          <p>
            El transporte permite el desplazamiento de personas y
            mercancías entre diferentes regiones del país.
          </p>

          <p>
            El desarrollo de un sistema de transporte eficiente facilita
            el comercio, la integración económica y el desarrollo
            regional.
          </p>

          <p>Los principales tipos de transporte son:</p>

          <ul>
            <li>Transporte terrestre</li>
            <li>Transporte marítimo</li>
            <li>Transporte aéreo</li>
            <li>Transporte ferroviario</li>
          </ul>

        </TopicCard>


        <TopicCard title="2.3.2 Telecomunicaciones" color="blue">

          <p>
            Las telecomunicaciones permiten la transmisión de información
            a través de diferentes medios tecnológicos.
          </p>

          <p>Entre los principales servicios se encuentran:</p>

          <ul>
            <li>Telefonía</li>
            <li>Internet</li>
            <li>Radio</li>
            <li>Televisión</li>
          </ul>

          <p>
            Las telecomunicaciones son fundamentales para el desarrollo
            económico moderno porque facilitan la comunicación, el
            comercio y el acceso a la información.
          </p>

        </TopicCard>


        <TopicCard title="2.3.3 Vivienda" color="blue">

          <p>
            La vivienda es una de las necesidades básicas de la población
            y forma parte importante del desarrollo urbano.
          </p>

          <p>
            El crecimiento de la población genera una mayor demanda de
            viviendas, lo que impulsa la construcción y el desarrollo
            de infraestructura urbana.
          </p>

          <p>
            El acceso a vivienda adecuada contribuye a mejorar la calidad
            de vida de las familias y al desarrollo social del país.
          </p>

        </TopicCard>


        <TopicCard title="2.3.4 Agua potable y alcantarillado" color="blue">

          <p>
            El acceso al agua potable y a sistemas de alcantarillado es
            fundamental para la salud pública y el bienestar de la
            población.
          </p>

          <p>
            Estos servicios permiten prevenir enfermedades, mejorar la
            higiene y garantizar condiciones de vida adecuadas.
          </p>

          <p>
            A pesar de los avances, aún existen regiones del país donde
            el acceso a estos servicios es limitado, especialmente en
            zonas rurales.
          </p>

        </TopicCard>


        <TopicCard title="2.4 Educación" color="yellow">

          <p>
            La educación es uno de los factores más importantes para el
            desarrollo económico y social de un país.
          </p>

          <p>
            Un sistema educativo eficiente permite formar recursos
            humanos calificados, mejorar la productividad y fomentar
            la innovación.
          </p>

          <p>Entre los beneficios de la educación se encuentran:</p>

          <ul>
            <li>Mejorar las oportunidades laborales</li>
            <li>Reducir la pobreza</li>
            <li>Promover el desarrollo tecnológico</li>
            <li>Fortalecer el crecimiento económico</li>
          </ul>

          <p>
            Sin embargo, el sistema educativo mexicano enfrenta retos
            como la desigualdad educativa, la falta de infraestructura
            en algunas regiones y el abandono escolar.
          </p>

        </TopicCard>

      </div>

    </div>
  );
};

export default SectoresEconomicos;
