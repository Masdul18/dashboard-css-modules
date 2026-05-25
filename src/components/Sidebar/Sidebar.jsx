// src/components/Sidebar/Sidebar.jsx

import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isCollapsed, onToggle, onMobileClose }) => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <button className={styles.mobileClose} onClick={onMobileClose}>
        ✕
      </button>

      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🛍️</span>
          <span className={styles.logoText}>E-Commerce</span>
        </div>
        <button className={styles.toggleButton} onClick={onToggle}>
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navLink} ${activeLink === item.id ? styles.navLinkActive : ''}`}
            onClick={() => handleLinkClick(item.id)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navText}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.user}>
          <div className={styles.userAvatar}>AD</div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Admin User</div>
            <div className={styles.userRole}>Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
