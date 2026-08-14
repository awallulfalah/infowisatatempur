import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="main-footer">
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <Image src="/logo.png" alt="Logo Desa Tempur" width={48} height={48} className={styles.logoImage} />
                <div>
                  <h3 className={styles.brandName}>Desa Wisata Tempur</h3>
                  <p className={styles.brandTagline}>Keajaiban Tersembunyi di Lereng Gunung Muria</p>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Desa wisata di Kecamatan Keling, Kabupaten Jepara, Jawa Tengah. 
                Terletak di ketinggian 800–1.100 mdpl, terkenal dengan kopi arabika Muria, 
                sawah terasering, dan situs sejarah.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Instagram" id="footer-instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook" id="footer-facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube" id="footer-youtube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a href="https://wa.me/6281234567890" className={styles.socialLink} aria-label="WhatsApp" id="footer-whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Jelajahi</h4>
              <ul className={styles.footerLinks}>
                <li><Link href="/destinasi">Destinasi Wisata</Link></li>
                <li><Link href="/kuliner">Kuliner</Link></li>
                <li><Link href="/akomodasi">Akomodasi</Link></li>
                <li><Link href="/fasilitas">Fasilitas</Link></li>
                <li><Link href="/peta">Peta Interaktif</Link></li>
              </ul>
            </div>

            {/* Info */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Informasi</h4>
              <ul className={styles.footerLinks}>
                <li><Link href="/tentang">Tentang Desa Tempur</Link></li>
                <li><Link href="/kontak">Cara ke Lokasi</Link></li>
                <li><Link href="/kontak">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Kontak</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>Desa Tempur, Kec. Keling,<br />Kab. Jepara, Jawa Tengah</span>
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <span>0812-3456-7890</span>
                </div>
                <div className={styles.contactItem}>
                  <span>✉️</span>
                  <span>info@desatempur.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>© 2026 Desa Wisata Tempur. Dikelola oleh Pokdarwis Desa Tempur.</p>
            <p className={styles.credit}>Dibuat Oleh KKN UNISNU XXI Untuk Desa Wisata Tempur</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
