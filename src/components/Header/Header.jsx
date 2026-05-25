// src/components/Header/Header.jsx

import styles from './Header.module.css';

const Header = ({ onMobileMenuToggle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.mobileMenuButton} onClick={onMobileMenuToggle}>
          ☰
        </button>

        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbItem}>Home</span>
          <span>›</span>
          <span className={`${styles.breadcrumbItem} ${styles.breadcrumbCurrent}`}>
            Dashboard
          </span>
        </div>

        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search products, orders, customers..."
          />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton}>
          🔔
          <span className={styles.badge}>5</span>
        </button>

        <button className={styles.iconButton}>
          ✉️
          <span className={styles.badge}>12</span>
        </button>

        <button className={styles.userButton}>
          <div className={styles.userAvatar}>AD</div>
          <div className={styles.userDetails}>
            <span className={styles.userName}>Admin User</span>
            <span className={styles.userRole}>Administrator</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
