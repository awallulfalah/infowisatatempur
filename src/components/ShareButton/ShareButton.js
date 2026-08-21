'use client';

import { useState, useEffect } from 'react';
import styles from './ShareButton.module.css';

export default function ShareButton({ title, url }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(url || window.location.href);
  }, [url]);

  const shareTitle = title || 'Desa Wisata Tempur';

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareTitle} - ${shareUrl}`)}`,
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link berhasil disalin!');
    } catch {
      // fallback
    }
  };

  return (
    <div className={styles.shareBar} id="share-buttons">
      <span className={styles.shareLabel}>Bagikan:</span>
      <div className={styles.shareButtons}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareBtn}
            aria-label={`Share to ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button onClick={copyLink} className={styles.shareBtn} aria-label="Copy link">
          🔗
        </button>
      </div>
    </div>
  );
}
