// src/components/Table/Table.jsx

import { useState } from 'react';
import styles from './Table.module.css';

const Table = ({ title, columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getStatusClass = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'completed' || statusLower === 'delivered' || statusLower === 'active') {
      return styles.statusSuccess;
    }
    if (statusLower === 'pending' || statusLower === 'processing') {
      return styles.statusWarning;
    }
    if (statusLower === 'cancelled' || statusLower === 'failed' || statusLower === 'inactive') {
      return styles.statusDanger;
    }
    return styles.statusSuccess;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={styles.th}
                  onClick={() => handleSort(column.key)}
                >
                  <div className={styles.thContent}>
                    {column.label}
                    <span
                      className={`${styles.sortIcon} ${
                        sortConfig.key === column.key ? styles.sortIconActive : ''
                      }`}
                    >
                      {sortConfig.key === column.key && sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currentData.map((row, index) => (
              <tr key={index} className={styles.tr}>
                {columns.map((column) => (
                  <td key={column.key} className={styles.td}>
                    {column.key === 'status' ? (
                      <span className={`${styles.status} ${getStatusClass(row[column.key])}`}>
                        <span className={styles.statusDot}></span>
                        {row[column.key]}
                      </span>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <div className={styles.pageInfo}>
          Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of {sortedData.length} entries
        </div>
        <div className={styles.pagination}>
          <div className={styles.pageButtons}>
            <button
              className={styles.pageButton}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            <button
              className={styles.pageButton}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
