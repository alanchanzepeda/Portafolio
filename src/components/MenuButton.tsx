import { useNavigate } from "react-router-dom";
import styles from "../styles/MenuButton.module.css";

interface MenuButtonProps {
  label: string;
  to: string;
  icon: React.ReactNode;
  color: "green" | "blue" | "orange" | "yellow" | "teal" | "indigo" | "red";
}

const MenuButton = ({ label, to, icon, color }: MenuButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const [path, hash] = to.split("#");

    navigate(path);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      onClick={handleClick}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </button>
  );
};

export default MenuButton;
