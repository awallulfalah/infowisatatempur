'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CulinaryCard } from '@/components/Card';
import FilterBar from '@/components/FilterBar';
import culinary from '@/data/culinary.json';
import styles from './page.module.css';

const typeFilters = [
  { value: 'all', label: 'Semua', icon: '✨' },
  { value: 'Kedai Kopi', label: 'Kedai Kopi', icon: '☕' },
  { value: 'Kedai Kopi & Edukasi', label: 'Edukasi Kopi', icon: '🎓' },
  { value: 'Warung Makan', label: 'Warung Makan', icon: '🍽️' },
  { value: 'Restoran', label: 'Restoran', icon: '🍲' },
];

export default function KulinerPage() {
  const [activeType, setActiveType] = useState('all');

  const filtered = culinary.filter((item) =>
    activeType === 'all' || item.type === activeType
  );

  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image src="/images/culinary/kedai-kopi.png" alt="Kuliner Desa Tempur" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Cita Rasa</span>
          <h1 className={styles.headerTitle}>Kuliner</h1>
          <p className={styles.headerSubtitle}>Nikmati kelezatan masakan tradisional Jawa dan kopi arabika Muria yang legendaris</p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <FilterBar filters={typeFilters} activeFilter={activeType} onFilterChange={setActiveType} label="Jenis" />
          <div className={styles.grid}>
            {filtered.map((item) => (
              <CulinaryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
