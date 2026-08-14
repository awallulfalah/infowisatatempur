import Image from 'next/image';
import Gallery from '@/components/Gallery';
import styles from './page.module.css';

export const metadata = {
  title: 'Tentang Desa Tempur',
  description: 'Kenali Desa Wisata Tempur, desa tersembunyi di lereng Gunung Muria, Jepara. Sejarah, lokasi geografis, keunikan kopi arabika Muria, dan potensi ekowisata.',
};

export default function TentangPage() {
  const galleryImages = [
    '/images/hero/hero-main.png',
    '/images/destinations/sawah-terasering.png',
    '/images/destinations/jembatan-pelangi.png',
    '/images/culinary/kedai-kopi.png',
    '/images/destinations/candi-angin.png',
    '/images/destinations/camping-ground.png',
  ];

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image
            src="/images/destinations/sawah-terasering.png"
            alt="Desa Tempur"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Tentang</span>
          <h1 className={styles.headerTitle}>Desa Wisata Tempur</h1>
          <p className={styles.headerSubtitle}>
            Desa tersembunyi di lereng Gunung Muria yang menyimpan keajaiban alam, sejarah, dan cita rasa kopi terbaik
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container container-narrow">
          <div className={styles.introContent}>
            <span className="section-label">Sejarah & Geografi</span>
            <h2>Desa Tersembunyi di Segitiga Emas</h2>
            <hr className="gold-line gold-line-left" />
            <p>
              Desa Tempur terletak di Kecamatan Keling, Kabupaten Jepara, Jawa Tengah. Berada di 
              lereng Gunung Muria pada ketinggian 800–1.100 meter di atas permukaan laut, desa ini 
              dijuluki &ldquo;Desa Tersembunyi&rdquo; karena dikelilingi oleh perbukitan hijau yang rindang.
            </p>
            <p>
              Secara geografis, Desa Tempur berada di kawasan &ldquo;Segitiga Emas&rdquo; — perbatasan 
              tiga kabupaten yaitu Jepara, Pati, dan Kudus. Posisi strategis ini menjadikan Desa Tempur 
              sebagai penghubung tiga wilayah di lereng Gunung Muria, sekaligus memiliki keberagaman 
              budaya dan tradisi yang unik.
            </p>
            <p>
              Masyarakat Desa Tempur mayoritas bermata pencaharian sebagai petani kopi, padi, dan 
              cengkeh. Kehidupan desa yang masih asri dan tradisional menjadi daya tarik tersendiri 
              bagi wisatawan yang mencari pengalaman otentik jauh dari hiruk-pikuk perkotaan.
            </p>
          </div>
        </div>
      </section>

      {/* Keunikan */}
      <section className={`section ${styles.keunikan}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Keunikan</span>
            <h2 className="section-title">Apa yang Membuat Desa Tempur Istimewa</h2>
            <hr className="gold-line" />
          </div>

          <div className={styles.keunikanGrid}>
            <div className={styles.keunikanCard}>
              <div className={styles.keunikanImage}>
                <Image
                  src="/images/culinary/kedai-kopi.png"
                  alt="Kopi Arabika Muria"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.keunikanBody}>
                <span className={styles.keunikanIcon}>☕</span>
                <h3>Kopi Arabika Muria</h3>
                <p>
                  Kopi Tempur (Kopi Muria) adalah kopi arabika premium yang tumbuh di ketinggian 
                  ideal di lereng Gunung Muria. Dengan karakter rasa yang khas — body medium, keasaman 
                  cerah, aroma floral dan hints cokelat — kopi ini telah berhasil menembus pasar ekspor 
                  internasional. Proses pengolahan masih dilakukan secara tradisional oleh petani lokal.
                </p>
              </div>
            </div>

            <div className={styles.keunikanCard}>
              <div className={styles.keunikanImage}>
                <Image
                  src="/images/destinations/candi-angin.png"
                  alt="Situs Sejarah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.keunikanBody}>
                <span className={styles.keunikanIcon}>🏛️</span>
                <h3>Situs Sejarah Kuno</h3>
                <p>
                  Desa Tempur menyimpan peninggalan sejarah berupa Candi Angin, Candi Bubrah, dan 
                  Situs Sumur Batu yang diduga berasal dari era Hindu-Buddha. Situs-situs ini tersebar 
                  di beberapa dukuh dan dikelilingi hutan, menambah nuansa mistis dan petualangan 
                  bagi para pengunjung yang menjelajahinya.
                </p>
              </div>
            </div>

            <div className={styles.keunikanCard}>
              <div className={styles.keunikanImage}>
                <Image
                  src="/images/destinations/sawah-terasering.png"
                  alt="Ekowisata"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.keunikanBody}>
                <span className={styles.keunikanIcon}>🌿</span>
                <h3>Ekowisata Berkelanjutan</h3>
                <p>
                  Desa Tempur mengusung konsep ekowisata yang menjaga kelestarian alam dan 
                  memberdayakan masyarakat lokal. Wisatawan dapat trekking di persawahan, belajar 
                  bercocok tanam, mengikuti tur kebun kopi, atau sekadar menikmati ketenangan alam 
                  pegunungan yang masih asri dan jauh dari polusi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Galeri</span>
            <h2 className="section-title">Keindahan Desa Tempur</h2>
            <hr className="gold-line" />
          </div>
          <Gallery images={galleryImages} columns={3} />
        </div>
      </section>
    </>
  );
}
