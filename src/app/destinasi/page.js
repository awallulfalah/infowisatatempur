'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DestinationCard } from '@/components/Card';
import FilterBar from '@/components/FilterBar';
import destinations from '@/data/destinations.json';
import styles from './page.module.css';

const categoryFilters = [
  { value: 'all', label: 'Semua Kategori', icon: '✨' },
  { value: 'alam', label: 'Wisata Alam', icon: '🌿' },
  { value: 'sejarah', label: 'Situs Sejarah', icon: '🏛️' },
  { value: 'kuliner', label: 'Kuliner', icon: '🍽️' },
];

export default function DestinasiPage() {

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDestinations = destinations.filter((d) => {
    const categoryMatch = activeCategory === 'all' || d.category?.toLowerCase().includes(activeCategory.toLowerCase());
    return categoryMatch;
  });

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image
            src="/images/destinations/jembatan-pelangi.png"
            alt="Destinasi Wisata Desa Tempur"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Jelajahi</span>
          <h1 className={styles.headerTitle}>Destinasi Wisata</h1>
          <p className={styles.headerSubtitle}>
            Temukan destinasi menakjubkan di Desa Tempur — dari alam pegunungan hingga situs bersejarah
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className={styles.filters}>
            <FilterBar
              filters={categoryFilters}
              activeFilter={activeCategory}
              onFilterChange={setActiveCategory}
              label="Kategori"
            />
          </div>

          <p className={styles.resultCount}>
            Menampilkan {filteredDestinations.length} dari {destinations.length} destinasi
          </p>

          {filteredDestinations.length > 0 ? (
            <div className={styles.grid}>
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <span>🔍</span>
              <p>Tidak ada destinasi yang cocok dengan filter Anda.</p>
              <button onClick={() => { setActiveCategory('all'); }} className="btn btn-outline">
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
