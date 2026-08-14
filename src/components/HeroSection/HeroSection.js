'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaText = 'Jelajahi Destinasi',
  ctaLink = '/destinasi',
  overlay = true,
  height = 'full', // 'full' | 'large' | 'medium'
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        heroRef.current.style.setProperty('--parallax-offset', `${rate}px`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heightClass = {
    full: styles.heroFull,
    large: styles.heroLarge,
    medium: styles.heroMedium,
  }[height];

  return (
    <section className={`${styles.hero} ${heightClass}`} ref={heroRef} id="hero-section">
      <div className={styles.heroBg}>
        <Image
          src={image}
          alt={title || 'Desa Wisata Tempur'}
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {overlay && <div className={styles.heroOverlay} />}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <div className={styles.decorLine} />
          <p className={styles.heroLabel}>Desa Wisata Tempur — Lereng Gunung Muria</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          {ctaText && (
            <div className={styles.heroCta}>
              <Link href={ctaLink} className="btn btn-gold" id="hero-cta">
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/tentang" className="btn btn-outline" id="hero-cta-secondary">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          )}
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}
