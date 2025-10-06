import { Wrench, Smartphone, Satellite, Shield, Zap, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Wrench,
      title: "Pemasangan Sensor",
      description: "Teknisi bersertifikat kami akan memasang modul sensor IoT di motor Anda. Proses cepat, tidak merusak, dan aman untuk semua jenis motor.",
      details: [
        "Instalasi memakan waktu 30-45 menit",
        "Tidak merusak kelistrikan motor",
        "Posisi sensor tersembunyi dan anti-tamper",
        "Garansi instalasi 1 tahun"
      ]
    },
    {
      icon: Smartphone,
      title: "Pairing Aplikasi",
      description: "Hubungkan sensor dengan aplikasi web melalui proses pairing yang mudah. Cukup scan QR code dan motor Anda siap terpantau.",
      details: [
        "Proses pairing hanya 2 menit",
        "Satu akun bisa mengelola multiple motor",
        "Akses dari browser mana saja",
        "Tidak perlu install aplikasi tambahan"
      ]
    },
    {
      icon: Satellite,
      title: "Monitoring Real-Time",
      description: "Sensor mulai mengirim data lokasi setiap detik ke server cloud. Pantau posisi motor Anda kapan saja, dari mana saja.",
      details: [
        "Update lokasi setiap 1 detik",
        "Akurasi GPS hingga 2.5 meter",
        "Riwayat perjalanan tersimpan otomatis",
        "Dashboard intuitif dan mudah dipahami"
      ]
    },
    {
      icon: Shield,
      title: "Deteksi Anomali",
      description: "Sistem AI kami secara otomatis mendeteksi aktivitas mencurigakan seperti pergerakan tanpa izin atau motor keluar dari zona aman.",
      details: [
        "Deteksi getaran saat parkir",
        "Alert otomatis geofencing",
        "Notifikasi pencabutan sensor",
        "Mode parkir pintar"
      ]
    },
    {
      icon: Bell,
      title: "Notifikasi Instan",
      description: "Dapatkan peringatan real-time melalui push notification dan email jika terdeteksi aktivitas mencurigakan.",
      details: [
        "Notifikasi kurang dari 2 detik",
        "Pilihan channel: push, email, SMS",
        "Kustomisasi level alert",
        "History notifikasi lengkap"
      ]
    },
    {
      icon: Zap,
      title: "Tindakan Proteksi",
      description: "Ambil tindakan langsung dengan remote cut off untuk mematikan mesin motor dari jarak jauh dalam kondisi darurat.",
      details: [
        "Eksekusi cut off dalam 3 detik",
        "Dapat diaktifkan dari mana saja",
        "Log semua aksi untuk audit",
        "Panic button untuk situasi darurat"
      ]
    }
  ];

  const faqs = [
    {
      q: "Berapa konsumsi daya sensor per hari?",
      a: "Sensor Maling Kapok dirancang ultra hemat energi dengan konsumsi daya standby < 5mA. Dalam mode normal, sensor hanya menggunakan sekitar 0.12Ah per hari, setara dengan 1-2% kapasitas baterai motor standar. Anda bisa parkir motor hingga berminggu-minggu tanpa khawatir aki tekor."
    },
    {
      q: "Seberapa akurat GPS tracker?",
      a: "GPS kami memiliki akurasi hingga ±2.5 meter dalam kondisi ideal (open sky). Di area urban dengan gedung tinggi, akurasi tetap terjaga di kisaran 5-10 meter. Kami menggunakan teknologi A-GPS dan kombinasi multi-satelit (GPS, GLONASS, Galileo) untuk akurasi optimal."
    },
    {
      q: "Jaringan apa yang didukung?",
      a: "Sensor mendukung 4G LTE, 3G, dan 2G sebagai fallback. Kami bekerjasama dengan seluruh operator Indonesia (Telkomsel, Indosat, XL, Tri, Smartfren) untuk memastikan koneksi stabil di seluruh wilayah. SIM card sudah tertanam dan biaya data sudah termasuk dalam paket berlangganan."
    },
    {
      q: "Bagaimana jika sensor rusak atau dicabut paksa?",
      a: "Sensor dilengkapi fitur anti-tamper yang akan mengirim notifikasi instan jika terdeteksi upaya perusakan atau pencabutan. Selain itu, semua paket dilindungi garansi 1 tahun, dan kami menyediakan layanan replacement cepat (24-48 jam) jika terjadi kerusakan."
    },
    {
      q: "Apakah remote cut off aman untuk motor?",
      a: "Ya, sangat aman. Remote cut off bekerja dengan memutus suplai listrik ke coil pengapian secara elektronik, sama seperti mematikan kunci kontak. Prosesnya tidak merusak komponen motor dan dapat diaktifkan kembali dengan mudah. Sistem juga memiliki failsafe untuk mencegah kesalahan aktivasi."
    },
    {
      q: "Berapa lama data tracking disimpan?",
      a: "Tergantung paket: Personal (30 hari), Fleet (90 hari), Enterprise (unlimited). Anda dapat mengakses dan export riwayat perjalanan kapan saja dalam rentang waktu tersebut. Data disimpan dengan enkripsi di server cloud kami yang tersertifikasi ISO 27001."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Cara Kerja Sistem
            </h1>
            <p className="text-lg text-muted-foreground">
              Teknologi canggih yang mudah dipahami. Perlindungan maksimal dengan proses yang sederhana.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-brand text-white font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                  <ul className="space-y-2 pt-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <span className="text-success mr-2">✓</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <Card className="p-8 bg-muted/30">
                    <step.icon className="w-24 h-24 mx-auto text-primary/20" />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Pertanyaan Teknis
            </h2>
            <p className="text-lg text-muted-foreground">
              Jawaban detail untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
