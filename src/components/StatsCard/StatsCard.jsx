// src/components/StatsCard/StatsCard.jsx

import styles from './StatsCard.module.css';

const StatsCard = ({ title, value, change, changeType, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.icon}>{icon}</div>
      </div>

      <div className={styles.body}>
        <div className={styles.value}>{value}</div>

        <div className={styles.footer}>
          <span className={`${styles.change} ${changeType === 'up' ? styles.changeUp : styles.changeDown}`}>
            <span className={styles.changeIcon}>{changeType === 'up' ? '↑' : '↓'}</span>
            {change}
          </span>
          <span className={styles.changeText}>vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
