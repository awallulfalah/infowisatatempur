'use client';

import { useState } from 'react';
import MapEmbed from '@/components/MapEmbed';
import destinations from '@/data/destinations.json';
import culinary from '@/data/culinary.json';
import accommodations from '@/data/accommodations.json';
import facilities from '@/data/facilities.json';
import styles from './page.module.css';

const categories = [
  { value: 'all', label: 'Semua', icon: '📍' },
  { value: 'destinasi', label: 'Destinasi', icon: '🏞️' },
  { value: 'kuliner', label: 'Kuliner', icon: '☕' },
  { value: 'akomodasi', label: 'Akomodasi', icon: '🏠' },
  { value: 'fasilitas', label: 'Fasilitas', icon: '🅿️' },
];

export default function PetaPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allMarkers = [
    ...destinations.map(d => ({ ...d, markerType: 'destinasi' })),
    ...culinary.map(d => ({ ...d, markerType: 'kuliner' })),
    ...accommodations.map(d => ({ ...d, markerType: 'akomodasi' })),
    ...facilities.map(d => ({ ...d, markerType: 'fasilitas' })),
  ];

  const filteredMarkers = activeCategory === 'all'
    ? allMarkers
    : allMarkers.filter(m => m.markerType === activeCategory);

  return (
    <>
      <section className={styles.pageHeaderCompact}>
        <h1 className={styles.pageTitle}>🗺️ Peta Interaktif</h1>
        <p className={styles.pageSubtitle}>Semua titik destinasi, kuliner, penginapan, dan fasilitas dalam satu peta</p>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Kategori</h3>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`${styles.filterBtn} ${activeCategory === cat.value ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat.value)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>
                    {cat.value === 'all' ? allMarkers.length : allMarkers.filter(m => m.markerType === cat.value).length}
                  </span>
                </button>
              ))}
            </div>

            <div className={styles.locationList}>
              <h3 className={styles.filterTitle}>Lokasi ({filteredMarkers.length})</h3>
              <div className={styles.locations}>
                {filteredMarkers.map((marker, i) => (
                  <div key={i} className={styles.locationItem}>
                    <span className={styles.locationIcon}>
                      {marker.icon || (marker.markerType === 'destinasi' ? '🌿' : marker.markerType === 'kuliner' ? '☕' : marker.markerType === 'akomodasi' ? '🏠' : '📍')}
                    </span>
                    <div>
                      <strong className={styles.locationName}>{marker.name}</strong>
                      {marker.zone && <span className={styles.locationZone}>Zona {marker.zone}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapArea}>
            <MapEmbed
              markers={filteredMarkers}
              center={[-6.597389610687036, 110.8887523403629]}
              zoom={15}
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
}
