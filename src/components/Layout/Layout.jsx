// src/components/Layout/Layout.jsx

import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={`${styles.container} ${isCollapsed ? styles.containerCollapsed : ''}`}>
      <div className={`${styles.sidebar} ${isMobileOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar 
          isCollapsed={isCollapsed} 
          onToggle={handleToggle}
          onMobileClose={() => setIsMobileOpen(false)}
        />
      </div>
      <div className={styles.header}>
        <Header onMobileMenuToggle={handleMobileToggle} />
      </div>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
