'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';

const categoryLabels = {
  'alam': 'Wisata Alam',
  'sejarah': 'Situs Sejarah',
  'budaya': 'Budaya',
  'kuliner-kopi': 'Kuliner',
};

const categoryIcons = {
  'alam': '🏞️',
  'sejarah': '⚛️',
  'budaya': '🎭',
  'kuliner-kopi': '🍽️',
};

export function DestinationCard({ destination }) {
  return (
    <Link href={`/destinasi/${destination.slug}`} className={styles.card} id={`card-dest-${destination.id}`}>
      <div className={styles.cardImage}>
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span className={`${styles.cardBadge} badge badge-${destination.category}`}>
          {categoryIcons[destination.category]} {categoryLabels[destination.category]}
        </span>
      </div>
      <div className={styles.cardBody}>

        <h3 className={styles.cardTitle}>{destination.name}</h3>
        <p className={styles.cardDesc}>{destination.shortDesc}</p>
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>🕐 {destination.hours}</span>
          <span className={styles.cardMetaItem}>💰 {destination.price}</span>
        </div>
      </div>
    </Link>
  );
}

export function CulinaryCard({ item }) {
  return (
    <div className={styles.card} id={`card-culinary-${item.id}`}>
      <div className={styles.cardImage}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span className={`${styles.cardBadge} badge badge-kuliner-kopi`}>
          {item.type}
        </span>
      </div>
      <div className={styles.cardBody}>

        <h3 className={styles.cardTitle}>{item.name}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        <div className={styles.cardHighlight}>
          <span className={styles.highlightLabel}>⭐ Menu Andalan</span>
          <p className={styles.highlightText}>{item.menuHighlight}</p>
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>🕐 {item.hours}</span>
          <span className={styles.cardMetaItem}>💰 {item.priceRange}</span>
        </div>
      </div>
    </div>
  );
}

export function AccommodationCard({ item }) {
  return (
    <div className={styles.card} id={`card-acc-${item.id}`}>
      <div className={styles.cardImage}>
        <div className={styles.placeholderImage}>
          <span>🏠</span>
          <p>{item.type}</p>
        </div>
        <span className={`${styles.cardBadge}`} style={{ background: 'rgba(45, 90, 61, 0.9)', color: '#D4EAD9' }}>
          {item.type}
        </span>
      </div>
      <div className={styles.cardBody}>

        <h3 className={styles.cardTitle}>{item.name}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        <div className={styles.facilities}>
          {item.facilities.slice(0, 4).map((f, i) => (
            <span key={i} className={styles.facilityTag}>{f}</span>
          ))}
          {item.facilities.length > 4 && (
            <span className={styles.facilityTag}>+{item.facilities.length - 4}</span>
          )}
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>💰 {item.priceRange}</span>
          <span className={styles.cardMetaItem}>🛏️ {item.rooms} kamar</span>
        </div>
        <div className={styles.cardActions}>
          <a href={`tel:${item.contact}`} className={styles.contactBtn}>
            📞 Hubungi
          </a>
          <span className={styles.distance}>{item.distanceToCenter}</span>
        </div>
      </div>
    </div>
  );
}

export function FacilityCard({ item }) {
  return (
    <div className={styles.facilityCard} id={`card-fac-${item.id}`}>
      <span className={styles.facilityIcon}>{item.icon}</span>
      <div>
        <span className={styles.facilityCat}>{item.category}</span>
        <h4 className={styles.facilityName}>{item.name}</h4>
        <p className={styles.facilityDesc}>{item.description}</p>
        <span className={styles.facilityAddr}>📍 {item.address}</span>
      </div>
    </div>
  );
}
