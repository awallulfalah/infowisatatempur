'use client';

import { useState } from 'react';
import Image from 'next/image';
import MapEmbed from '@/components/MapEmbed';
import styles from './page.module.css';

const routes = [
  {
    from: 'Kota Jepara',
    distance: '±65 km',
    duration: '±2.5 jam',
    route: 'Jepara → Keling → Tempur',
    detail: 'Jalan utama melalui Kecamatan Keling. Jalan aspal baik hingga kecamatan, lalu jalan desa yang cukup menantang dengan beberapa tanjakan tajam. Disarankan menggunakan kendaraan bertenaga tinggi.',
    icon: '🚗',
  },
  {
    from: 'Kota Kudus',
    distance: '±55 km',
    duration: '±2 jam',
    route: 'Kudus → Gebog → Rahtawu → Tempur',
    detail: 'Rute melalui jalur lereng Gunung Muria bagian timur. Pemandangan sepanjang perjalanan sangat indah. Kondisi jalan bervariasi, beberapa ruas sempit dan berkelok.',
    icon: '🚗',
  },
  {
    from: 'Kota Pati',
    distance: '±60 km',
    duration: '±2 jam',
    route: 'Pati → Cluwak → Gunungwungkal → Tempur',
    detail: 'Rute alternatif dari arah timur melalui jalur perbukitan. Jalan relatif baik namun berkelok-kelok dengan tanjakan cukup tajam di beberapa titik.',
    icon: '🚗',
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(
      `Halo, saya ${formData.name} (${formData.email}).\n\n${formData.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image src="/images/destinations/jembatan-pelangi.png" alt="Kontak" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Hubungi Kami</span>
          <h1 className={styles.headerTitle}>Kontak & Cara ke Lokasi</h1>
          <p className={styles.headerSubtitle}>Informasi rute perjalanan dan cara menghubungi pengelola Desa Wisata Tempur</p>
        </div>
      </section>

      {/* Routes */}
      <section className={`section ${styles.routesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Rute Perjalanan</span>
            <h2 className="section-title">Cara Menuju Desa Tempur</h2>
            <hr className="gold-line" />
            <p className="section-subtitle">Desa Tempur dapat dicapai dari tiga kota terdekat</p>
          </div>

          <div className={styles.routesGrid}>
            {routes.map((route, i) => (
              <div key={i} className={styles.routeCard}>
                <div className={styles.routeHeader}>
                  <span className={styles.routeIcon}>{route.icon}</span>
                  <div>
                    <h3 className={styles.routeFrom}>Dari {route.from}</h3>
                    <div className={styles.routeStats}>
                      <span>📏 {route.distance}</span>
                      <span>⏱️ {route.duration}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.routePath}>
                  <span className={styles.routeLabel}>Rute:</span>
                  <span>{route.route}</span>
                </div>
                <p className={styles.routeDetail}>{route.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <span className="section-label">Kontak</span>
              <h2 className={styles.contactTitle}>Hubungi Pengelola Desa Wisata</h2>
              <hr className="gold-line gold-line-left" />
              
              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <span>📍</span>
                  <div>
                    <strong>Alamat</strong>
                    <p>Desa Tempur, Kec. Keling, Kab. Jepara, Jawa Tengah 59453</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span>📞</span>
                  <div>
                    <strong>Telepon / WhatsApp</strong>
                    <p>0812-3456-7890 (Pak Lurah)<br />0856-7890-1234 (Pusat Info)</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>info@desatempur.id</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <span>🕐</span>
                  <div>
                    <strong>Pusat Informasi Wisata</strong>
                    <p>Buka setiap hari: 08.00 - 16.00 WIB<br />Balai Desa Tempur</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialBtn}>📸 Instagram</a>
                <a href="#" className={styles.socialBtn}>📘 Facebook</a>
                <a href="#" className={styles.socialBtn}>📺 YouTube</a>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Kirim Pesan</h3>
              <p className={styles.formDesc}>Punya pertanyaan? Kirim pesan dan kami akan merespons melalui WhatsApp.</p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="nama@email.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Pesan</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  💬 Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={`section ${styles.mapSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Lokasi</span>
            <h2 className="section-title">Temukan Kami di Peta</h2>
            <hr className="gold-line" />
          </div>
          <MapEmbed
            markers={[{ name: 'Desa Wisata Tempur', coordinates: [-6.5590, 110.6920], zone: 'Pusat Desa', shortDesc: 'Desa Wisata Tempur, Kec. Keling, Kab. Jepara' }]}
            center={[-6.5590, 110.6920]}
            zoom={14}
            height="400px"
          />
        </div>
      </section>
    </>
  );
}
