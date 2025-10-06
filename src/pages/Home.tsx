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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Teknologi Keamanan Motor Terdepan
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Amankan Motor Anda Sejak Detik Pertama
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Sensor hemat energi dan GPS real-time. Deteksi ancaman, lacak posisi, dan hentikan mesin jarak jauh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-brand hover:bg-gradient-brand-hover text-white font-semibold text-base px-8 h-12"
                >
                  <Link to="/demo">Minta Demo Gratis</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
                  <Link to="/cara-kerja">Lihat Cara Kerja</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">99.8%</div>
                  <div className="text-sm text-muted-foreground">Akurasi GPS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">&lt;1s</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Sistem keamanan motor Maling Kapok dengan GPS tracker dan sensor IoT" 
                className="relative rounded-2xl shadow-2xl w-full h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Keunggulan Maling Kapok
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknologi canggih yang dirancang khusus untuk keamanan motor di Indonesia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Cara Kerja Sistem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proses sederhana, perlindungan maksimal
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Pemasangan", desc: "Pasang sensor di motor Anda oleh teknisi bersertifikat" },
              { step: "02", title: "Pairing", desc: "Hubungkan sensor dengan aplikasi web dalam hitungan menit" },
              { step: "03", title: "Monitoring", desc: "Pantau lokasi dan status motor real-time 24/7" },
              { step: "04", title: "Proteksi", desc: "Sistem otomatis deteksi dan lindungi motor Anda" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand text-white font-bold text-xl mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Solusi untuk Berbagai Kebutuhan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all">
                <useCase.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-xl mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-16 text-center text-white">
            <div className="relative z-10 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Siap Melindungi Motor Anda?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan pengguna yang telah mempercayai Maling Kapok untuk keamanan motor mereka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/demo">Jadwalkan Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
