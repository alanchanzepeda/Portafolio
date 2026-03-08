import TopicCard from "../components/TopicCard";
import styles from "../styles/PageLayout.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RecursosNaturales = () => {

  return (
    <div className={styles.page}>
      
      <Link to="/" className={styles.backLink}>
      <ArrowLeft size={18} /> Volver al menú
      </Link>

      <div className={styles.header}>
        <h1 className={styles.greenTitle}>1. Recursos Naturales</h1>

        <p>
          Los recursos naturales son todos los elementos que proporciona la
          naturaleza y que el ser humano utiliza para satisfacer sus necesidades
          y desarrollar actividades económicas. Estos recursos constituyen la
          base del desarrollo económico de un país, ya que permiten producir
          bienes, generar energía y sostener la vida humana.
        </p>

        <p>
          En México, los recursos naturales incluyen suelos, agua, flora, fauna,
          minerales y energéticos. La disponibilidad y el aprovechamiento de
          estos recursos han influido históricamente en el desarrollo económico
          del país.
        </p>

        <p>
          El estudio de estos recursos forma parte de la geografía económica,
          disciplina que analiza cómo se distribuyen los recursos naturales y
          cómo influyen en las actividades productivas y en el desarrollo de las
          regiones.
        </p>

      </div>

      <div className={styles.content}>

        <TopicCard title="1.1 Recursos Renovables" color="green">

          <p>
            Los recursos renovables son aquellos que pueden regenerarse de
            manera natural en un periodo relativamente corto, siempre que su
            explotación sea racional y no exceda su capacidad de regeneración.
          </p>

          <p>
            Estos recursos son fundamentales para el desarrollo económico
            porque permiten sostener actividades productivas como la
            agricultura, la ganadería, la pesca y el aprovechamiento forestal.
          </p>

          <p>Entre los principales recursos renovables se encuentran:</p>

          <ul>
            <li><strong>Agua:</strong> indispensable para la vida, la agricultura, la industria y la generación de energía eléctrica.</li>
            <li><strong>Suelos:</strong> permiten el desarrollo de actividades agrícolas y ganaderas.</li>
            <li><strong>Flora:</strong> incluye bosques, selvas y vegetación que proporcionan madera, resinas y plantas medicinales.</li>
            <li><strong>Fauna:</strong> especies animales que pueden aprovecharse para alimentación, ganadería y turismo ecológico.</li>
          </ul>

          <p>
            México posee una gran diversidad de recursos renovables gracias a
            su variedad de climas, relieves y ecosistemas.
          </p>

        </TopicCard>


        <TopicCard title="1.2 Recursos No Renovables" color="orange">

          <p>
            Los recursos no renovables son aquellos que existen en cantidades
            limitadas y cuya regeneración tarda millones de años o no es posible
            en el tiempo humano.
          </p>

          <p>
            Estos recursos son esenciales para el desarrollo industrial y
            energético, pero su explotación excesiva puede provocar su
            agotamiento.
          </p>

          <p>Entre los principales recursos no renovables se encuentran:</p>

          <ul>
            <li><strong>Minerales metálicos:</strong> plata, oro, cobre, hierro, plomo y zinc.</li>
            <li><strong>Minerales no metálicos:</strong> azufre, sal, yeso, fosfatos y caliza.</li>
            <li><strong>Recursos energéticos:</strong> petróleo, gas natural, carbón mineral y uranio.</li>
          </ul>

          <p>
            México ha sido históricamente uno de los principales productores
            de plata en el mundo y el petróleo ha sido uno de los recursos
            estratégicos más importantes para la economía nacional.
          </p>

        </TopicCard>


        <TopicCard title="1.3 Problemas Ambientales" color="red">

          <p>
            El uso intensivo de los recursos naturales ha generado diversos
            problemas ambientales que afectan el equilibrio de los ecosistemas
            y el desarrollo sustentable del país.
          </p>

          <p>Entre los principales problemas ambientales se encuentran:</p>

          <ul>
            <li><strong>Contaminación:</strong> del aire, del agua y del suelo debido a actividades industriales, transporte y residuos urbanos.</li>
            <li><strong>Deforestación:</strong> provocada por la tala excesiva de bosques y selvas.</li>
            <li><strong>Sobreexplotación de recursos:</strong> como la pesca excesiva o el uso intensivo de agua.</li>
            <li><strong>Cambio climático:</strong> provocado por el aumento de gases de efecto invernadero.</li>
          </ul>

          <p>
            Estos problemas hacen necesaria la implementación de políticas
            de desarrollo sustentable que permitan proteger los recursos
            naturales y garantizar su disponibilidad para las futuras
            generaciones.
          </p>

        </TopicCard>


        <TopicCard title="1.4 Población" color="blue">

          <p>
            La población representa el recurso humano que participa en las
            actividades económicas y sociales de un país.
          </p>

          <p>
            En geografía económica se analizan aspectos como el crecimiento
            demográfico, la distribución de la población, la densidad
            poblacional y la población económicamente activa.
          </p>

          <p>
            El crecimiento de la población genera diversas consecuencias
            económicas y sociales, como la necesidad de crear más empleos,
            construir vivienda, ampliar los servicios de salud y mejorar
            los sistemas educativos.
          </p>

          <p>Dentro del estudio de la población también se analizan problemas sociales como:</p>

          <ul>
            <li><strong>Pobreza:</strong> situación en la que las personas no cuentan con ingresos suficientes para satisfacer sus necesidades básicas.</li>
            <li><strong>Desempleo:</strong> falta de trabajo para personas en edad y condiciones de trabajar.</li>
            <li><strong>Economía informal:</strong> actividades económicas que no están registradas ni reguladas por el Estado.</li>
          </ul>

          <p>
            Estos factores influyen directamente en el desarrollo económico
            y social de México.
          </p>

        </TopicCard>

      </div>

    </div>
  );
};

export default RecursosNaturales;
