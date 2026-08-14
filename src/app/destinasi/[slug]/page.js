import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import destinations from '@/data/destinations.json';
import Gallery from '@/components/Gallery';
import ShareButton from '@/components/ShareButton';
import MapEmbed from '@/components/MapEmbed';
import styles from './page.module.css';

const categoryLabels = {
  'alam': 'Wisata Alam',
  'sejarah': 'Situs Sejarah',
  'budaya': 'Budaya',
  'kuliner-kopi': 'Kuliner',
};

export async function generateStaticParams() {
  return destinations.map((dest) => ({ slug: dest.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: 'Destinasi Tidak Ditemukan' };
  return {
    title: dest.name,
    description: dest.shortDesc,
  };
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  const currentIndex = destinations.findIndex((d) => d.slug === slug);
  const prevDest = currentIndex > 0 ? destinations[currentIndex - 1] : null;
  const nextDest = currentIndex < destinations.length - 1 ? destinations[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src={dest.image} alt={dest.name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/destinasi" className={styles.backLink}>
            ← Kembali ke Destinasi
          </Link>
          <span className={`badge badge-${dest.category}`}>
            {categoryLabels[dest.category]}
          </span>
          <h1 className={styles.heroTitle}>{dest.name}</h1>
          <div className={styles.heroMeta}>
            <span>📍 Zona {dest.zone}</span>
            <span>🕐 {dest.hours}</span>
            <span>💰 {dest.price}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={`section ${styles.content}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>Deskripsi</h2>
              <hr className="gold-line gold-line-left" />
              {dest.description.map((paragraph, i) => (
                <p key={i} className={styles.paragraph}>{paragraph}</p>
              ))}

              {/* Gallery */}
              <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Galeri Foto</h2>
              <hr className="gold-line gold-line-left" />
              <Gallery images={dest.gallery} columns={2} />

              {/* Share */}
              <div className={styles.shareSection}>
                <ShareButton title={dest.name} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Info Card */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Informasi Kunjungan</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>📍 Lokasi</span>
                  <span className={styles.infoValue}>Zona {dest.zone}, Desa Tempur</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🕐 Jam Operasional</span>
                  <span className={styles.infoValue}>{dest.hours}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>💰 Biaya</span>
                  <span className={styles.infoValue}>{dest.price}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>🏷️ Kategori</span>
                  <span className={styles.infoValue}>{categoryLabels[dest.category]}</span>
                </div>
              </div>

              {/* Tips */}
              <div className={styles.tipsCard}>
                <h3 className={styles.infoTitle}>💡 Tips Kunjungan</h3>
                <p className={styles.tipsText}>{dest.tips}</p>
              </div>

              {/* Map */}
              <div className={styles.mapCard}>
                <h3 className={styles.infoTitle}>🗺️ Lokasi di Peta</h3>
                <MapEmbed
                  markers={[dest]}
                  center={dest.coordinates}
                  zoom={16}
                  height="250px"
                />
              </div>
            </aside>
          </div>

          {/* Navigation */}
          <div className={styles.navBar}>
            {prevDest ? (
              <Link href={`/destinasi/${prevDest.slug}`} className={styles.navLink}>
                <span className={styles.navDirection}>← Sebelumnya</span>
                <span className={styles.navName}>{prevDest.name}</span>
              </Link>
            ) : <div />}
            {nextDest ? (
              <Link href={`/destinasi/${nextDest.slug}`} className={`${styles.navLink} ${styles.navRight}`}>
                <span className={styles.navDirection}>Selanjutnya →</span>
                <span className={styles.navName}>{nextDest.name}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}
