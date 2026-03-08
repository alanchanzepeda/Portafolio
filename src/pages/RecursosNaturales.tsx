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
        <p>
          Los recursos naturales son todos los elementos que proporciona la naturaleza y que el ser humano utiliza
          para satisfacer sus necesidades y desarrollar actividades económicas. Estos recursos constituyen la base
          del desarrollo económico de un país, ya que permiten producir bienes, generar energía y sostener la vida
          humana.
        </p>

        <p>
          En México existen diversos recursos naturales como los suelos, el agua, la flora, la fauna, los minerales
          y los recursos energéticos. El estudio de estos recursos forma parte de la geografía económica, disciplina
          que analiza su distribución en el territorio y su relación con las actividades productivas.
        </p>
      </div>

      <div className={styles.content}>
        
        <TopicCard title="1.1 Recursos Renovables" color="green" delay={0.1}>
          <p>
            Los recursos renovables son aquellos que pueden regenerarse de manera natural en un periodo relativamente
            corto, siempre que su explotación sea racional y no exceda su capacidad de regeneración.
          </p>

          <p>Entre los recursos renovables más importantes se encuentran:</p>

          <ul>
            <li>
              <strong>Agua:</strong> Es uno de los recursos más importantes para la vida y las actividades productivas.
              Se utiliza para consumo humano, agricultura, industria y generación de energía eléctrica. 
              En México los ríos se agrupan en tres vertientes principales: del Pacífico, del Golfo de México 
              y vertientes interiores.
            </li>

            <li>
              <strong>Suelos:</strong> Permiten el desarrollo de actividades agrícolas y ganaderas. Su calidad depende
              de factores como el clima, el relieve, la vegetación y la actividad humana. El uso inadecuado puede
              provocar problemas como erosión, desertificación y pérdida de fertilidad.
            </li>

            <li>
              <strong>Flora:</strong> Se refiere al conjunto de plantas y vegetación que existe en el territorio
              nacional. México posee una gran diversidad de ecosistemas como bosques, selvas, matorrales y
              pastizales, los cuales permiten el aprovechamiento de madera, plantas medicinales y productos agrícolas.
            </li>

            <li>
              <strong>Fauna:</strong> Está formada por las especies animales que habitan en el país. Muchas especies
              se utilizan para la alimentación, la ganadería, la investigación científica y el turismo ecológico.
              México es considerado uno de los países con mayor biodiversidad del mundo.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="1.2 Recursos No Renovables" color="orange" delay={0.2}>
          <p>
            Los recursos no renovables son aquellos que existen en cantidades limitadas y cuya regeneración tarda
            millones de años o no ocurre dentro del tiempo de vida humano. Su explotación ha sido fundamental
            para el desarrollo económico de México.
          </p>

          <ul>
            <li>
              <strong>Minerales metálicos:</strong> Entre los más importantes se encuentran la plata, el oro, el cobre,
              el hierro, el plomo y el zinc. México ha sido históricamente uno de los principales productores de
              plata en el mundo.
            </li>

            <li>
              <strong>Minerales no metálicos:</strong> Incluyen recursos utilizados principalmente en la industria y
              la construcción como el azufre, los fosfatos, la sal, el yeso y la caliza.
            </li>

            <li>
              <strong>Recursos energéticos:</strong> Son fundamentales para el funcionamiento de la economía moderna.
              Entre ellos destacan el petróleo, el gas natural, el carbón mineral y el uranio. El petróleo ha sido
              uno de los recursos estratégicos más importantes para la economía mexicana.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="1.3 Problemas Ambientales" color="red" delay={0.3}>
          <p>
            El uso intensivo de los recursos naturales ha provocado diversos problemas ambientales que afectan
            el desarrollo sustentable del país.
          </p>

          <ul>
            <li>
              <strong>Contaminación:</strong> Puede presentarse en el aire, el agua o el suelo. Es causada
              principalmente por industrias, transporte, residuos urbanos y actividades agrícolas.
            </li>

            <li>
              <strong>Deforestación:</strong> La tala excesiva de bosques provoca pérdida de biodiversidad,
              erosión del suelo y cambios en el clima.
            </li>

            <li>
              <strong>Sobreexplotación de recursos:</strong> Ocurre cuando los recursos se utilizan más rápido de lo
              que pueden regenerarse. Ejemplos de ello son la pesca excesiva, la explotación minera intensiva y
              el uso excesivo del agua.
            </li>

            <li>
              <strong>Cambio climático:</strong> Las actividades humanas generan gases de efecto invernadero que
              provocan cambios en el clima global, causando sequías, huracanes más intensos y aumento de la
              temperatura.
            </li>
          </ul>
        </TopicCard>

        <TopicCard title="1.4 Población y Recursos" color="blue" delay={0.4}>
          <p>
            La población es uno de los factores fundamentales del desarrollo económico, ya que representa
            el recurso humano que participa en la producción de bienes y servicios. En geografía económica
            se analizan aspectos como el crecimiento demográfico, la distribución de la población,
            la densidad poblacional y la población económicamente activa.
          </p>

          <ul>
            <li>
              <strong>Pobreza:</strong> Es la situación en la que las personas no cuentan con los ingresos
              suficientes para satisfacer sus necesidades básicas como alimentación, vivienda, salud y educación.
              Entre sus causas se encuentran la desigualdad económica, el bajo nivel educativo y la falta de
              oportunidades laborales.
            </li>

            <li>
              <strong>Desempleo:</strong> Se presenta cuando las personas no tienen trabajo a pesar de estar en
              condiciones de trabajar. Puede provocar pobreza, migración, inseguridad y desigualdad social.
            </li>

            <li>
              <strong>Economía informal:</strong> Incluye actividades económicas que no están registradas ni
              reguladas por el Estado, como el comercio ambulante o trabajos sin contrato. Aunque genera ingresos
              para muchas personas, también provoca problemas como falta de seguridad social y evasión fiscal.
            </li>
          </ul>
        </TopicCard>

      </div>
    </div>
  );
};

export default RecursosNaturales;
