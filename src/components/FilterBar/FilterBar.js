'use client';

import styles from './FilterBar.module.css';

export default function FilterBar({ filters, activeFilter, onFilterChange, label = 'Filter' }) {
  return (
    <div className={styles.filterBar} id="filter-bar">
      <span className={styles.filterLabel}>{label}:</span>
      <div className={styles.filterPills}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`${styles.filterPill} ${activeFilter === filter.value ? styles.active : ''}`}
            onClick={() => onFilterChange(filter.value)}
            id={`filter-${filter.value}`}
          >
            {filter.icon && <span>{filter.icon}</span>}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
