import { TreePine, AlertTriangle, Users, Factory, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuButton from '../components/MenuButton';
import heroImage from '../assets/hero-mexico.jpg';
import styles from '../styles/Home.module.css';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={heroImage} alt="Paisaje mexicano" className={styles.heroImage} />

      {/* BOTON AUTOR ARRIBA */}
      <div className={styles.authorButton} onClick={() => navigate("/autor")}>
        👤 Alan Sauriel
      </div>

      <header className={styles.header}>
        <h1>Enciclopedia Interactiva</h1>
        <p>Recursos y Necesidades de México</p>
      </header>

      <div className={styles.menuGrid}>
        <div className={styles.menuColumn}>
          <MenuButton
            label="Recursos Naturales"
            to="/recursos-naturales"
            icon={<TreePine size={22} />}
            color="green"
          />

          <MenuButton
            label="Problemas Ambientales"
            to="/recursos-naturales#problemas"
            icon={<AlertTriangle size={22} />}
            color="red"
          />

          <MenuButton
            label="Población"
            to="/recursos-naturales#poblacion"
            icon={<Users size={22} />}
            color="teal"
          />
        </div>

        <div className={styles.centerBadge}>
  <span className={styles.globeEmoji}>🌎</span>

  <div className={styles.planetTooltip}>
    México posee una gran diversidad de recursos naturales
  </div>
</div>

        <div className={styles.menuColumn}>
          <MenuButton
            label="Sectores Económicos"
            to="/sectores-economicos"
            icon={<Factory size={22} />}
            color="orange"
          />

          <MenuButton
            label="Educación"
            to="/sectores-economicos#educacion"
            icon={<GraduationCap size={22} />}
            color="yellow"
          />
        </div>
      </div>

      <footer className={styles.footer}>
        © 2026 Alan Sauriel — Portafolio Virtual de Evidencias
        <span
          className={styles.footerLink}
          onClick={() => navigate("/fuentes")}
        >
          Fuentes
        </span>
      </footer>

    </div>
  );
};

export default Home;