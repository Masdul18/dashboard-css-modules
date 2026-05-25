// src/App.jsx

// import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
};

export default App;
