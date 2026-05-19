import TopicCard from "../components/TopicCard";
import styles from "../styles/PageLayout.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Subcompetencia3 = () => {
  return (
    <div className={styles.page}>

      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.blueTitle}>3. Economía y Finanzas Públicas</h1>

        <p>
          La economía nacional depende de diversos factores relacionados
          con el comercio, las finanzas internacionales y las decisiones
          gubernamentales. Estos elementos permiten analizar el desarrollo
          económico de México y comprender cómo influyen en la vida diaria
          de la población.
        </p>

        <p>
          El comercio exterior, la balanza de pagos, el gasto gubernamental
          y la inflación forman parte de los principales indicadores que
          permiten evaluar la situación económica de un país.
        </p>

      </div>

      <div className={styles.content}>

        <TopicCard title="3.1 Comercio Exterior" color="blue">

          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec"
            alt="Comercio Exterior"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            El comercio exterior consiste en el intercambio de bienes y
            servicios entre diferentes países. A través de las exportaciones
            e importaciones, las naciones pueden obtener productos,
            materias primas y tecnología que no producen internamente.
          </p>

          <p>
            México participa activamente en el comercio internacional
            gracias a acuerdos como el T-MEC, que fortalece las relaciones
            comerciales con Estados Unidos y Canadá.
          </p>

          <p>Entre los principales productos que México exporta se encuentran:</p>

          <ul>
            <li>Automóviles y autopartes</li>
            <li>Productos electrónicos</li>
            <li>Petróleo</li>
            <li>Productos agrícolas</li>
          </ul>

          <p>
            El comercio exterior contribuye al crecimiento económico,
            genera empleos y permite el desarrollo industrial del país.
          </p>

        </TopicCard>

        <TopicCard title="3.2 Balanza de Pagos" color="green">

          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="Balanza de pagos"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            La balanza de pagos es el registro contable de todas las
            transacciones económicas realizadas entre un país y el resto
            del mundo durante un periodo determinado.
          </p>

          <p>
            Este indicador incluye exportaciones, importaciones,
            inversiones extranjeras, turismo y movimientos financieros.
          </p>

          <p>La balanza de pagos se divide principalmente en:</p>

          <ul>
            <li><strong>Cuenta corriente:</strong> comercio de bienes y servicios.</li>
            <li><strong>Cuenta financiera:</strong> inversiones y movimientos de capital.</li>
            <li><strong>Reservas internacionales:</strong> recursos económicos del país.</li>
          </ul>

          <p>
            Una balanza de pagos equilibrada favorece la estabilidad
            económica y fortalece la moneda nacional.
          </p>

        </TopicCard>

        <TopicCard title="3.3 Gasto y Déficit Gubernamental" color="orange">

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
            alt="Gasto gubernamental"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            El gasto gubernamental es el dinero que utiliza el gobierno
            para financiar servicios públicos como educación, salud,
            seguridad, infraestructura y programas sociales.
          </p>

          <p>
            Cuando el gobierno gasta más dinero del que recauda mediante
            impuestos, se produce un déficit gubernamental.
          </p>

          <p>El gasto público puede destinarse a:</p>

          <ul>
            <li>Construcción de carreteras y hospitales</li>
            <li>Programas de apoyo social</li>
            <li>Educación pública</li>
            <li>Seguridad y administración pública</li>
          </ul>

          <p>
            Un déficit excesivo puede generar endeudamiento y afectar
            la estabilidad económica del país.
          </p>

        </TopicCard>

        <TopicCard title="3.4 Inflación y Deflación" color="red">

          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
            alt="Inflación"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "1rem",
              maxHeight: "280px",
              objectFit: "cover"
            }}
          />

          <p>
            La inflación es el aumento general de precios de bienes y
            servicios durante un periodo de tiempo. Esto provoca que
            el dinero pierda poder adquisitivo.
          </p>

          <p>
            La deflación es el fenómeno contrario, donde los precios
            disminuyen constantemente, lo que puede afectar la producción
            y el empleo.
          </p>

          <p>Las principales causas de inflación incluyen:</p>

          <ul>
            <li>Aumento en costos de producción</li>
            <li>Exceso de demanda</li>
            <li>Incremento en precios internacionales</li>
            <li>Problemas económicos globales</li>
          </ul>

          <p>
            El Banco de México implementa políticas monetarias para
            mantener la estabilidad de precios y controlar la inflación.
          </p>

        </TopicCard>

      </div>

    </div>
  );
};

export default Subcompetencia3;
