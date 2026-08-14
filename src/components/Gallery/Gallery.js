'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery({ images, columns = 3 }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className={styles.gallery} style={{ '--cols': columns }} id="gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className={styles.galleryItem}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={img.src || img}
              alt={img.alt || `Galeri foto ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.galleryOverlay}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>✕</button>
          <Image
            src={images[lightboxIndex].src || images[lightboxIndex]}
            alt={images[lightboxIndex].alt || 'Foto galeri'}
            width={1200}
            height={800}
            style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto' }}
          />
        </div>
      )}
    </>
  );
}
