// src/pages/Dashboard/Dashboard.jsx

import StatsCard from '../../components/StatsCard/StatsCard';
import Table from '../../components/Table/Table';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const statsData = [
    {
      title: 'Total Revenue',
      value: 'Rp 124.500.000',
      change: '+12.5%',
      changeType: 'up',
      icon: '💰',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      changeType: 'up',
      icon: '🛒',
    },
    {
      title: 'Total Customers',
      value: '856',
      change: '+15.3%',
      changeType: 'up',
      icon: '👥',
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      changeType: 'down',
      icon: '📊',
    },
  ];

  const orderColumns = [
    { key: 'orderId', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'product', label: 'Product' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ];

  const orderData = [
    {
      orderId: '#ORD-001',
      customer: 'John Doe',
      product: 'Wireless Headphones',
      amount: 'Rp 1.250.000',
      status: 'Completed',
      date: '2024-01-15',
    },
    {
      orderId: '#ORD-002',
      customer: 'Jane Smith',
      product: 'Smart Watch',
      amount: 'Rp 3.500.000',
      status: 'Processing',
      date: '2024-01-14',
    },
    {
      orderId: '#ORD-003',
      customer: 'Bob Johnson',
      product: 'Laptop Stand',
      amount: 'Rp 450.000',
      status: 'Delivered',
      date: '2024-01-14',
    },
    {
      orderId: '#ORD-004',
      customer: 'Alice Williams',
      product: 'Mechanical Keyboard',
      amount: 'Rp 2.100.000',
      status: 'Pending',
      date: '2024-01-13',
    },
    {
      orderId: '#ORD-005',
      customer: 'Charlie Brown',
      product: 'USB-C Hub',
      amount: 'Rp 750.000',
      status: 'Completed',
      date: '2024-01-13',
    },
    {
      orderId: '#ORD-006',
      customer: 'Diana Prince',
      product: 'Webcam HD',
      amount: 'Rp 1.800.000',
      status: 'Cancelled',
      date: '2024-01-12',
    },
    {
      orderId: '#ORD-007',
      customer: 'Ethan Hunt',
      product: 'Gaming Mouse',
      amount: 'Rp 950.000',
      status: 'Completed',
      date: '2024-01-12',
    },
    {
      orderId: '#ORD-008',
      customer: 'Fiona Green',
      product: 'Monitor 27"',
      amount: 'Rp 4.200.000',
      status: 'Processing',
      date: '2024-01-11',
    },
  ];

  const customerColumns = [
    { key: 'customerId', label: 'Customer ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'totalOrders', label: 'Total Orders' },
    { key: 'totalSpent', label: 'Total Spent' },
    { key: 'status', label: 'Status' },
  ];

  const customerData = [
    {
      customerId: '#CUST-001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      totalOrders: '12',
      totalSpent: 'Rp 15.000.000',
      status: 'Active',
    },
    {
      customerId: '#CUST-002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      totalOrders: '8',
      totalSpent: 'Rp 8.500.000',
      status: 'Active',
    },
    {
      customerId: '#CUST-003',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      totalOrders: '5',
      totalSpent: 'Rp 4.200.000',
      status: 'Active',
    },
    {
      customerId: '#CUST-004',
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      totalOrders: '15',
      totalSpent: 'Rp 22.000.000',
      status: 'Active',
    },
    {
      customerId: '#CUST-005',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      totalOrders: '3',
      totalSpent: 'Rp 2.100.000',
      status: 'Inactive',
    },
    {
      customerId: '#CUST-006',
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      totalOrders: '20',
      totalSpent: 'Rp 35.000.000',
      status: 'Active',
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back! Here's what's happening with your store today.</p>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.buttonSecondary}`}>
            📥 Export
          </button>
          <button className={styles.button}>
            ➕ Add New Order
          </button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Orders</h2>
          <a href="#" className={styles.sectionLink}>
            View All →
          </a>
        </div>
        <Table title="Recent Orders" columns={orderColumns} data={orderData} />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top Customers</h2>
          <a href="#" className={styles.sectionLink}>
            View All →
          </a>
        </div>
        <Table title="Top Customers" columns={customerColumns} data={customerData} />
      </div>
    </div>
  );
};

export default Dashboard;
