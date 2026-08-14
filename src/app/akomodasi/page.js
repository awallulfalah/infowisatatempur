'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AccommodationCard } from '@/components/Card';
import FilterBar from '@/components/FilterBar';
import accommodations from '@/data/accommodations.json';
import styles from './page.module.css';

const typeFilters = [
  { value: 'all', label: 'Semua', icon: '✨' },
  { value: 'Homestay', label: 'Homestay', icon: '🏠' },
  { value: 'Penginapan', label: 'Penginapan', icon: '🏨' },
  { value: 'Lodge', label: 'Lodge', icon: '🏡' },
];

const priceFilters = [
  { value: 'all', label: 'Semua Harga', icon: '💰' },
  { value: 'budget', label: '< Rp 200.000', icon: '💵' },
  { value: 'mid', label: 'Rp 200.000 - 350.000', icon: '💳' },
  { value: 'premium', label: '> Rp 350.000', icon: '💎' },
];

export default function AkomodasiPage() {
  const [activeType, setActiveType] = useState('all');
  const [activePrice, setActivePrice] = useState('all');

  const filtered = accommodations.filter((item) => {
    const typeMatch = activeType === 'all' || item.type === activeType;
    let priceMatch = true;
    if (activePrice === 'budget') priceMatch = item.priceMin < 200000;
    else if (activePrice === 'mid') priceMatch = item.priceMin >= 200000 && item.priceMin <= 350000;
    else if (activePrice === 'premium') priceMatch = item.priceMin > 350000;
    return typeMatch && priceMatch;
  });

  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image src="/images/hero/hero-main.png" alt="Akomodasi Desa Tempur" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Menginap</span>
          <h1 className={styles.headerTitle}>Akomodasi</h1>
          <p className={styles.headerSubtitle}>Temukan penginapan nyaman di tengah keindahan alam pegunungan Desa Tempur</p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className={styles.filters}>
            <FilterBar filters={typeFilters} activeFilter={activeType} onFilterChange={setActiveType} label="Tipe" />
            <FilterBar filters={priceFilters} activeFilter={activePrice} onFilterChange={setActivePrice} label="Harga" />
          </div>
          <div className={styles.grid}>
            {filtered.map((item) => (
              <AccommodationCard key={item.id} item={item} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className={styles.empty}>
              <span>🏠</span>
              <p>Tidak ada akomodasi yang cocok dengan filter Anda.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
