import { useNavigate } from 'react-router-dom';
import styles from '../styles/MenuButton.module.css';

interface MenuButtonProps {
  label: string;
  to: string;
  icon: React.ReactNode;
  color: 'green' | 'blue' | 'orange' | 'yellow' | 'teal' | 'indigo' | 'red';
}

const MenuButton = ({ label, to, icon, color }: MenuButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      onClick={() => navigate(to)}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </button>
  );
};

export default MenuButton;