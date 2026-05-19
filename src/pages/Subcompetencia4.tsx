import TopicCard from "../components/TopicCard";
import styles from "../styles/PageLayout.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Subcompetencia4 = () => {
  return (
    <div className={styles.page}>

      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.orangeTitle}>4. Política y Organización del Estado</h1>

        <p>
          La organización política de México se encuentra establecida en
          la Constitución Política de los Estados Unidos Mexicanos.
          A través de ella se definen los derechos de los ciudadanos,
          la estructura del gobierno y el funcionamiento democrático
          del país.
        </p>

        <p>
          La situación política y los partidos políticos influyen
          directamente en las decisiones económicas, sociales y
          administrativas que afectan a toda la población.
        </p>

      </div>

      <div className={styles.content}>

        <TopicCard title="4.1 Constitución Política de los E.U.M" color="orange">

          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
            alt="Constitución Política"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            La Constitución Política de los Estados Unidos Mexicanos es
            la ley suprema del país. Fue promulgada en 1917 y establece
            los derechos y obligaciones de los ciudadanos, así como la
            organización del gobierno mexicano.
          </p>

          <p>
            La Constitución garantiza derechos fundamentales como:
          </p>

          <ul>
            <li>Derecho a la educación</li>
            <li>Libertad de expresión</li>
            <li>Derecho a la salud</li>
            <li>Derecho al trabajo</li>
          </ul>

          <p>
            También establece la división de poderes:
          </p>

          <ul>
            <li>Poder Ejecutivo</li>
            <li>Poder Legislativo</li>
            <li>Poder Judicial</li>
          </ul>

        </TopicCard>

        <TopicCard title="4.2 La Situación Política en México" color="blue">

          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9"
            alt="Situación política"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            La situación política de México está relacionada con el
            funcionamiento del gobierno, la participación ciudadana
            y las decisiones tomadas por las autoridades.
          </p>

          <p>
            Entre los principales temas políticos actuales se encuentran:
          </p>

          <ul>
            <li>Democracia y participación ciudadana</li>
            <li>Seguridad pública</li>
            <li>Economía nacional</li>
            <li>Programas sociales</li>
            <li>Transparencia gubernamental</li>
          </ul>

          <p>
            La estabilidad política es importante para atraer inversiones,
            generar empleo y promover el desarrollo del país.
          </p>

        </TopicCard>

        <TopicCard title="4.3 Los Partidos Políticos" color="red">

          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
            alt="Partidos políticos"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            Los partidos políticos son organizaciones que representan
            diferentes ideas, propuestas e ideologías para gobernar
            el país.
          </p>

          <p>
            En México, los partidos participan en elecciones para elegir
            presidentes, gobernadores, diputados y otros representantes.
          </p>

          <p>Entre las funciones de los partidos políticos destacan:</p>

          <ul>
            <li>Representar a la ciudadanía</li>
            <li>Promover propuestas de gobierno</li>
            <li>Participar en procesos electorales</li>
            <li>Impulsar leyes y reformas</li>
          </ul>

          <p>
            El sistema político mexicano es democrático y permite la
            participación de diversos partidos políticos.
          </p>

        </TopicCard>

      </div>

    </div>
  );
};

export default Subcompetencia4;
