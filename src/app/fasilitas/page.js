import Image from 'next/image';
import { FacilityCard } from '@/components/Card';
import facilities from '@/data/facilities.json';
import styles from './page.module.css';

export const metadata = {
  title: 'Fasilitas Penunjang',
  description: 'Informasi fasilitas penunjang di Desa Wisata Tempur: parkir, toilet umum, pusat informasi, layanan kesehatan, dan transportasi wisata.',
};

export default function FasilitasPage() {
  const categories = [...new Set(facilities.map(f => f.category))];

  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image src="/images/hero/hero-main.png" alt="Fasilitas Desa Tempur" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Informasi</span>
          <h1 className={styles.headerTitle}>Fasilitas Penunjang</h1>
          <p className={styles.headerSubtitle}>Informasi fasilitas yang tersedia untuk kenyamanan wisatawan di Desa Tempur</p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          {categories.map((cat) => (
            <div key={cat} className={styles.categoryGroup}>
              <h2 className={styles.categoryTitle}>{cat}</h2>
              <hr className="gold-line gold-line-left" />
              <div className={styles.grid}>
                {facilities.filter(f => f.category === cat).map((item) => (
                  <FacilityCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

          {/* Important Notice */}
          <div className={styles.notice}>
            <span className={styles.noticeIcon}>⚠️</span>
            <div>
              <h3 className={styles.noticeTitle}>Penting untuk Diketahui</h3>
              <ul className={styles.noticeList}>
                <li>ATM terdekat berada di Kecamatan Keling (±30 menit perjalanan). <strong>Bawa uang tunai yang cukup.</strong></li>
                <li>Sinyal internet tidak selalu stabil di daerah pegunungan. Download peta offline sebelum berangkat.</li>
                <li>Untuk keadaan darurat medis, rumah sakit terdekat di Kota Jepara (±2 jam perjalanan).</li>
                <li>Hubungi Pusat Informasi Wisata di Balai Desa untuk pemandu lokal dan reservasi.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
