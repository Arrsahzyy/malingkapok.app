import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img src="/iconmalingkapok.png" alt="Maling Kapok Logo" className="h-8 w-8 object-contain" />
              <span className="font-heading text-xl font-bold">Maling Kapok</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sistem keamanan proaktif hemat energi. Lacak dan hentikan curanmor real-time.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Produk */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Produk</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/produk" className="hover:text-primary transition-colors inline-block">
                  Modul Sensor
                </Link>
              </li>
              <li>
                <Link to="/produk" className="hover:text-primary transition-colors inline-block">
                  Aplikasi Web
                </Link>
              </li>
              <li>
                <Link to="/cara-kerja" className="hover:text-primary transition-colors inline-block">
                  Cara Kerja
                </Link>
              </li>
              <li>
                <Link to="/harga" className="hover:text-primary transition-colors inline-block">
                  Harga & Paket
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Perusahaan</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/tentang" className="hover:text-primary transition-colors inline-block">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors inline-block">
                  Blog & Update
                </Link>
              </li>
              <li>
                <Link to="/karir" className="hover:text-primary transition-colors inline-block">
                  Karir
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-primary transition-colors inline-block">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary/70" />
                <span>Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-primary/70" />
                <a href="mailto:info@malingkapok.id" className="hover:text-primary transition-colors">
                  info@malingkapok.id
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-primary/70" />
                <a href="tel:+6281234567890" className="hover:text-primary transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Maling Kapok. Semua hak dilindungi.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/kebijakan-privasi" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-layanan" className="hover:text-primary transition-colors">
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
