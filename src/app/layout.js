import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Info Wisata Tempur — Keajaiban Tersembunyi di Lereng Gunung Muria',
    template: '%s | Desa Wisata Tempur',
  },
  description: 'Jelajahi Desa Wisata Tempur di lereng Gunung Muria, Jepara. Nikmati kopi arabika Muria, sawah terasering, situs sejarah Candi Angin, dan keindahan alam pegunungan. Rencanakan kunjungan Anda sekarang.',
  keywords: ['Desa Tempur', 'wisata Jepara', 'kopi Muria', 'ekowisata', 'Gunung Muria', 'desa wisata', 'Jawa Tengah', 'agrowisata kopi'],
  openGraph: {
    title: 'Desa Wisata Tempur — Keajaiban Tersembunyi di Lereng Gunung Muria',
    description: 'Desa tersembunyi di lereng Gunung Muria dengan kopi arabika ekspor, sawah terasering, dan situs sejarah. Rencanakan kunjungan Anda.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Desa Wisata Tempur',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
