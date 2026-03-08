import styles from '../styles/TopicCard.module.css';

interface TopicCardProps {
  title: string;
  children: React.ReactNode;
  color?: 'green' | 'blue' | 'orange' | 'yellow' | 'red';
  delay?: number;
}

const TopicCard = ({ title, children, color = 'green', delay = 0 }: TopicCardProps) => {
  return (
    <div
      className={`${styles.card} ${styles[color]}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default TopicCard;
