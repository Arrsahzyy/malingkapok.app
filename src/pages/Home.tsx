import { Link } from "react-router-dom";
import { Shield, Zap, MapPin, Radio, Bell, Lock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-security.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Hemat Energi",
      description: "Konsumsi daya ultra rendah. Sensor pintar hanya aktif saat dibutuhkan, menghemat baterai motor Anda."
    },
    {
      icon: MapPin,
      title: "GPS Real-Time",
      description: "Pelacakan lokasi akurat setiap detik. Pantau posisi motor Anda kapan saja, di mana saja."
    },
    {
      icon: Radio,
      title: "Remote Cut Off",
      description: "Matikan mesin motor jarak jauh melalui aplikasi web. Cegah pencurian dengan satu sentuhan."
    },
    {
      icon: Bell,
      title: "Notifikasi Instan",
      description: "Dapatkan peringatan langsung saat motor bergerak tanpa izin atau keluar dari zona aman."
    },
    {
      icon: Lock,
      title: "Anti Tamper",
      description: "Deteksi otomatis jika sensor dirusak atau dicabut. Sistem keamanan berlapis untuk perlindungan maksimal."
    },
    {
      icon: Shield,
      title: "Enkripsi Data",
      description: "Komunikasi end-to-end encryption. Data lokasi dan kontrol motor Anda terlindungi penuh."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Motor Pribadi",
      description: "Ketenangan pikiran untuk motor kesayangan Anda."
    },
    {
      icon: TrendingUp,
      title: "Armada Ojek",
      description: "Pantau dan amankan seluruh armada dari satu dashboard."
    },
    {
      icon: Shield,
      title: "Kampus & Kos",
      description: "Solusi keamanan untuk area parkir bersama."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10"></div>
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium animate-bounce-in hover:scale-105 transition-transform cursor-default">
                Teknologi Keamanan Motor Terdepan
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Amankan Motor Anda Sejak Detik Pertama
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Sensor hemat energi dan GPS real-time. Deteksi ancaman, lacak posisi, dan hentikan mesin jarak jauh.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-brand hover:bg-gradient-brand-hover text-white font-semibold text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto transition-smooth hover-lift animate-glow"
                >
                  <Link to="/demo">Mulai Sekarang</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto transition-smooth hover-lift">
                  <Link to="/cara-kerja">Pelajari Lebih Lanjut</Link>
                </Button>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
                <div className="text-center sm:text-left group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-primary transition-transform group-hover:scale-110">99.8%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Uptime</div>
                </div>
                <div className="text-center sm:text-left group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-primary transition-transform group-hover:scale-110">&lt;0.5s</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Response</div>
                </div>
                <div className="text-center sm:text-left group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-primary transition-transform group-hover:scale-110">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right hidden md:block">
              <img 
                src={heroImage} 
                alt="Security System" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift transition-smooth animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              Keunggulan Maling Kapok
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Teknologi canggih yang dirancang khusus untuk keamanan motor di Indonesia
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              Cara Kerja Sistem
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Proses sederhana, perlindungan maksimal
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Pemasangan", desc: "Pasang sensor di motor Anda oleh teknisi bersertifikat" },
              { step: "02", title: "Pairing", desc: "Hubungkan sensor dengan aplikasi web dalam hitungan menit" },
              { step: "03", title: "Monitoring", desc: "Pantau lokasi dan status motor real-time 24/7" },
              { step: "04", title: "Proteksi", desc: "Sistem otomatis deteksi dan lindungi motor Anda" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-2 sm:space-y-3 group cursor-default animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-brand text-white font-bold text-lg sm:text-xl mb-2 transition-transform group-hover:scale-110 group-hover:rotate-12 animate-bounce-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  {item.step}
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg transition-colors group-hover:text-primary">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              Solusi untuk Berbagai Kebutuhan
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all hover-lift group cursor-default animate-scale-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <useCase.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="font-semibold text-lg sm:text-xl mb-2 transition-colors group-hover:text-primary">{useCase.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 animate-fade-in">
        <div className="container px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-brand p-8 sm:p-12 md:p-16 text-center text-white animate-gradient-shift hover:shadow-2xl transition-shadow">
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold animate-scale-up">
                Siap Melindungi Motor Anda?
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Bergabunglah dengan ribuan pengguna yang telah mempercayai Maling Kapok untuk keamanan motor mereka.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto hover-lift transition-smooth">
                  <Link to="/demo">Jadwalkan Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-primary font-semibold transition-all w-full sm:w-auto hover-lift">
                  <Link to="/harga">Lihat Harga</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
