'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/destinasi', label: 'Destinasi' },
  { href: '/akomodasi', label: 'Akomodasi' },
  { href: '/fasilitas', label: 'Fasilitas' },
  { href: '/peta', label: 'Peta' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="main-header">
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <Image src="/logo.png" alt="Logo Desa Tempur" width={44} height={44} className={styles.logoImage} priority />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Desa Tempur</span>
            <span className={styles.logoTagline}>Wisata Alam Muria</span>
          </div>
        </Link>

        <ul className={`${styles.navLinks} ${isMobileOpen ? styles.navLinksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                id={`nav-link-${link.href.replace('/', '') || 'home'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.searchToggle}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
            id="search-toggle"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isSearchOpen && (
        <div className={styles.searchBar} id="search-bar">
          <div className={styles.searchContainer}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Cari destinasi, kuliner, atau penginapan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              autoFocus
              id="search-input"
            />
            <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className={styles.searchClose}>
              ✕
            </button>
          </div>
        </div>
      )}

      {isMobileOpen && <div className={styles.overlay} onClick={() => setIsMobileOpen(false)} />}
    </header>
  );
}
