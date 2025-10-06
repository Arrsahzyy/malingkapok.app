import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Personal",
      price: "199.000",
      period: "/bulan",
      description: "Untuk pengguna motor pribadi",
      features: [
        "1 unit motor",
        "GPS tracking real-time",
        "Geofencing 3 zona",
        "Riwayat 30 hari",
        "Notifikasi email & push",
        "Remote cut off",
        "Support 24/7"
      ],
      popular: false
    },
    {
      name: "Fleet",
      price: "899.000",
      period: "/bulan",
      description: "Untuk armada ojek & bisnis kecil",
      features: [
        "Hingga 10 unit motor",
        "GPS tracking real-time",
        "Geofencing unlimited",
        "Riwayat 90 hari",
        "Notifikasi prioritas",
        "Remote cut off",
        "Dashboard analytics",
        "API access",
        "Dedicated support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Untuk perusahaan & institusi",
      features: [
        "Unit motor unlimited",
        "GPS tracking real-time",
        "Geofencing unlimited",
        "Riwayat unlimited",
        "Notifikasi prioritas",
        "Remote cut off",
        "Dashboard analytics advanced",
        "API access penuh",
        "White-label solution",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Harga & Paket
            </h1>
            <p className="text-lg text-muted-foreground">
              Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket sudah termasuk hardware sensor.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-brand text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
                    </span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-gradient-brand hover:bg-gradient-brand-hover text-white' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/kontak">
                      {plan.price === "Custom" ? "Hubungi Sales" : "Pilih Paket"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Semua paket sudah termasuk hardware sensor, instalasi, dan garansi 1 tahun
            </p>
            <p className="text-sm text-muted-foreground">
              Harga belum termasuk PPN 11%. Pembayaran dapat dilakukan bulanan atau tahunan (diskon 15%)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Apakah ada biaya instalasi terpisah?",
                a: "Tidak. Semua paket sudah termasuk instalasi sensor oleh teknisi bersertifikat di lokasi Anda."
              },
              {
                q: "Bagaimana jika saya ingin upgrade paket?",
                a: "Anda dapat upgrade paket kapan saja. Selisih biaya akan dihitung secara prorata."
              },
              {
                q: "Apakah ada komitmen kontrak jangka panjang?",
                a: "Tidak ada kontrak jangka panjang. Anda dapat berhenti berlangganan kapan saja dengan pemberitahuan 30 hari."
              },
              {
                q: "Apakah sensor bisa dipindah ke motor lain?",
                a: "Ya, sensor dapat dipindahkan. Hubungi support kami untuk jadwal reinstalasi."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
