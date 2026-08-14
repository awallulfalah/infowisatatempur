'use client';

import { useState, useEffect } from 'react';
import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Ridwan',
    origin: 'Jakarta',
    rating: 5,
    text: 'Desa Tempur benar-benar hidden gem! Pemandangannya luar biasa, kopinya juara. Saya dan keluarga menginap 3 malam dan masih ingin kembali. Warga desanya sangat ramah dan helpful.',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    origin: 'Singapura',
    rating: 5,
    text: 'The Muria Arabica coffee is world-class! The coffee tour at Kedai Ali was the highlight of our trip. The terraced rice fields reminded me of Bali but without the crowds. A truly authentic experience.',
    avatar: '👩‍💻',
  },
  {
    id: 3,
    name: 'Dewi Sartika',
    origin: 'Semarang',
    rating: 5,
    text: 'Sebagai fotografer landscape, Desa Tempur adalah surga! Sunrise di persawahan Punden dengan kabut tipis — moment yang tidak bisa dilupakan. Jembatan Pelangi juga sangat fotogenik.',
    avatar: '📸',
  },
  {
    id: 4,
    name: 'Budi Pratama',
    origin: 'Surabaya',
    rating: 4,
    text: 'Camping di perbukitan Desa Tempur malam hari langitnya penuh bintang! Tur jeep-nya juga seru banget. Tip: bawa jaket tebal karena malam bisa sangat dingin di ketinggian ini.',
    avatar: '🏕️',
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title">Apa Kata Mereka</h2>
          <hr className="gold-line" />
          <p className="section-subtitle">Pengalaman wisatawan yang telah mengunjungi Desa Tempur</p>
        </div>

        <div className={styles.testimonialCard}>
          <div className={styles.quoteIcon}>"</div>
          <div className={styles.stars}>
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className={styles.quote}>{current.text}</p>
          <div className={styles.author}>
            <span className={styles.avatar}>{current.avatar}</span>
            <div>
              <strong className={styles.authorName}>{current.name}</strong>
              <span className={styles.authorOrigin}>{current.origin}</span>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Testimoni ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
