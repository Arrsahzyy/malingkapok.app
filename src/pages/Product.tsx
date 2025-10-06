import { Shield, Cpu, Battery, Wifi, Cloud, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import sensorImage from "@/assets/sensor-module.jpg";

const Product = () => {
  const sensorSpecs = [
    { label: "Dimensi", value: "45mm x 35mm x 15mm" },
    { label: "Konsumsi Daya", value: "< 5mA standby" },
    { label: "GPS Akurasi", value: "±2.5 meter" },
    { label: "Konektivitas", value: "4G LTE / GPS / GSM" },
    { label: "Anti Tamper", value: "Yes, dengan notifikasi" },
    { label: "Waterproof", value: "IP67" }
  ];

  const appFeatures = [
    {
      icon: Shield,
      title: "Geofencing Pintar",
      description: "Buat zona aman custom. Dapatkan alert otomatis saat motor keluar dari area yang ditentukan."
    },
    {
      icon: Cloud,
      title: "Riwayat Perjalanan",
      description: "Lacak dan review rute perjalanan motor hingga 90 hari ke belakang dengan detail lengkap."
    },
    {
      icon: Lock,
      title: "Remote Immobilizer",
      description: "Matikan mesin motor jarak jauh dalam kondisi darurat. Kontrol penuh di tangan Anda."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Produk Maling Kapok
            </h1>
            <p className="text-lg text-muted-foreground">
              Kombinasi hardware sensor pintar dan software aplikasi web untuk keamanan motor terpadu
            </p>
          </div>
        </div>
      </section>

      {/* Sensor Module Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Cpu className="w-4 h-4" />
                <span>Hardware</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Modul Sensor IoT
              </h2>
              <p className="text-lg text-muted-foreground">
                Sensor kompak dengan teknologi terdepan. Dirancang khusus untuk kondisi iklim dan jalan Indonesia.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {sensorSpecs.map((spec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold mt-1">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Battery className="w-5 h-5 text-success" />
                  <span>Hemat Energi</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Wifi className="w-5 h-5 text-success" />
                  <span>Koneksi Stabil</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Anti Rusak</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={sensorImage} 
                alt="Modul sensor IoT Maling Kapok untuk keamanan motor" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web App Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mx-auto">
              <Cloud className="w-4 h-4" />
              <span>Software</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Aplikasi Web Pelacakan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dashboard lengkap untuk monitoring dan kontrol motor Anda dari mana saja
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Fitur Aplikasi Lengkap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Monitoring Real-Time</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Lokasi GPS akurat hingga 2.5 meter</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Status motor (parkir/bergerak)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Kecepatan dan arah pergerakan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Riwayat perjalanan detail</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Keamanan & Kontrol</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Remote engine cut off</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Notifikasi push & email instan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Mode parkir otomatis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Panic button darurat</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield className="w-16 h-16 mx-auto text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Keamanan Data Terjamin
            </h2>
            <p className="text-lg text-muted-foreground">
              Kami menggunakan enkripsi end-to-end untuk semua komunikasi data. Lokasi dan kontrol motor Anda 
              terlindungi dengan standar keamanan banking-grade.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-xl border border-border">
                <h4 className="font-semibold mb-2">Enkripsi AES-256</h4>
                <p className="text-sm text-muted-foreground">Data terenkripsi di setiap lapisan transmisi</p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <h4 className="font-semibold mb-2">RBAC</h4>
                <p className="text-sm text-muted-foreground">Role-based access control untuk multi-user</p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <h4 className="font-semibold mb-2">ISO 27001</h4>
                <p className="text-sm text-muted-foreground">Sertifikasi keamanan informasi internasional</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
