import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import { DestinationCard } from '@/components/Card';
import TestimonialSection from '@/components/TestimonialSection';
import destinations from '@/data/destinations.json';
import styles from './page.module.css';

const features = [
  {
    icon: '☕',
    title: 'Kopi Arabika Muria',
    desc: 'Kopi arabika premium dari lereng Gunung Muria yang telah diekspor ke mancanegara. Rasakan langsung dari kebunnya.',
  },
  {
    icon: '🏞️',
    title: 'Sawah Terasering',
    desc: 'Hamparan sawah berundak yang memukau di ketinggian 800 - 1.100 mdpl dengan pemandangan 360 derajat.',
  },
  {
    icon: '🏛️',
    title: 'Situs Sejarah',
    desc: 'Jelajahi Candi Angin dan Sumur Batu, peninggalan masa lampau yang tersembunyi di tengah hutan pegunungan.',
  },
  {
    icon: '🌿',
    title: 'Ekowisata Autentik',
    desc: 'Pengalaman wisata yang menyatu dengan alam dan budaya lokal, jauh dari keramaian kota.',
  },
];

const stats = [
  { value: '800 - 1.100', label: 'mdpl ketinggian' },
  { value: '6+', label: 'destinasi wisata' },
  { value: '4+', label: 'penginapan' },
  { value: '∞', label: 'keindahan alam' },
];

export default function HomePage() {
  const featuredDestinations = destinations.filter(d => d.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        image="/images/hero/hero-main.png"
        title="Temukan Keajaiban Tersembunyi di Lereng Gunung Muria"
        subtitle="Desa Tempur — sebuah permata tersembunyi di perbukitan Jepara. Nikmati kopi arabika kelas dunia, sawah terasering memukau, dan kehangatan desa yang autentik."
        ctaText="Jelajahi Destinasi"
        ctaLink="/destinasi"
      />

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Desa Tempur */}
      <section className={`section ${styles.features}`} id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Kenapa Desa Tempur?</span>
            <h2 className="section-title">Pesona yang Tak Terlupakan</h2>
            <hr className="gold-line" />
            <p className="section-subtitle">
              Desa Tempur menawarkan pengalaman wisata yang berbeda — perpaduan unik antara alam, budaya, sejarah, dan cita rasa kopi terbaik Indonesia.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`section ${styles.aboutPreview}`} id="about-preview">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImages}>
              <div className={styles.aboutImageMain}>
                <Image
                  src="/images/destinations/sawah-terasering.png"
                  alt="Sawah terasering Desa Tempur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.aboutImageSecondary}>
                <Image
                  src="/images/culinary/kedai-kopi.png"
                  alt="Kopi Muria"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.aboutAccent}>
                <span className={styles.accentNumber}>30+</span>
                <span className={styles.accentText}>Tahun Tradisi Kopi</span>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className="section-label">Tentang Desa Tempur</span>
              <h2 className={styles.aboutTitle}>Desa Tersembunyi di Segitiga Emas Gunung Muria</h2>
              <hr className="gold-line gold-line-left" />
              <p className={styles.aboutText}>
                Terletak di lereng Gunung Muria pada ketinggian 800–1.100 mdpl, Desa Tempur dijuluki 
                &ldquo;Desa Tersembunyi&rdquo; karena dikelilingi perbukitan hijau yang asri. Desa ini berada 
                di perbatasan tiga kabupaten — Jepara, Pati, dan Kudus — yang dikenal sebagai &ldquo;Segitiga Emas&rdquo;.
              </p>
              <p className={styles.aboutText}>
                Keunggulan utama desa ini adalah kopi arabika Muria (Kopi Tempur) yang telah diekspor 
                ke mancanegara, sawah terasering yang memukau, sungai jernih, serta situs sejarah 
                seperti Candi Angin dan Candi Bubrah yang menyimpan misteri masa lampau.
              </p>
              <Link href="/tentang" className="btn btn-primary" id="about-cta">
                Selengkapnya Tentang Desa Tempur
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className={`section ${styles.destinationsSection}`} id="featured-destinations">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Destinasi Unggulan</span>
            <h2 className="section-title">Tempat yang Wajib Dikunjungi</h2>
            <hr className="gold-line" />
            <p className="section-subtitle">
              Destinasi pilihan yang paling populer di kalangan wisatawan Desa Tempur
            </p>
          </div>

          <div className={styles.destinationsGrid}>
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <Link href="/destinasi" className="btn btn-outline" id="view-all-destinations">
              Lihat Semua Destinasi
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className={styles.ctaSection} id="cta-final">
        <div className={styles.ctaBg}>
          <Image
            src="/images/destinations/camping-ground.png"
            alt="Camping ground Desa Tempur"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaContent}`}>
          <span className="section-label" style={{ color: '#E0C068' }}>Mulai Petualangan Anda</span>
          <h2 className={styles.ctaTitle}>Siap Menjelajahi Desa Tempur?</h2>
          <p className={styles.ctaText}>
            Rencanakan kunjungan Anda sekarang. Temukan destinasi, pilih penginapan, dan nikmati pengalaman wisata yang tak terlupakan.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/destinasi" className="btn btn-gold" id="cta-explore">
              Jelajahi Sekarang
            </Link>
            <Link href="/kontak" className="btn btn-outline" id="cta-contact" style={{ borderColor: '#E0C068', color: '#E0C068' }}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
