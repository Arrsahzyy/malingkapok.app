import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    units: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.userType) {
      toast.error("Mohon lengkapi semua field yang wajib diisi");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Demo request berhasil dikirim! Tim kami akan menghubungi Anda segera.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      userType: "",
      units: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Hubungi Kami
            </h1>
            <p className="text-lg text-muted-foreground">
              Tertarik dengan Maling Kapok? Isi form di bawah untuk jadwalkan demo atau konsultasi gratis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Demo</CardTitle>
                <CardDescription>
                  Isi form ini dan tim kami akan menghubungi Anda dalam 1x24 jam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+62 812-3456-7890"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="userType">Tipe Pengguna *</Label>
                    <Select value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tipe pengguna" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="fleet">Fleet / Armada</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="units">Jumlah Unit Motor</Label>
                    <Input
                      id="units"
                      type="number"
                      value={formData.units}
                      onChange={(e) => setFormData({...formData, units: e.target.value})}
                      placeholder="Contoh: 5"
                      min="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan (Opsional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Ceritakan kebutuhan Anda..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-brand hover:bg-gradient-brand-hover text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Request Demo
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@malingkapok.id" className="text-muted-foreground hover:text-primary">
                        info@malingkapok.id
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Untuk pertanyaan umum dan support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telepon</h3>
                      <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary">
                        +62 812-3456-7890
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Senin - Jumat, 09:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jakarta, Indonesia
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Kunjungi dengan perjanjian
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Jam Operasional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Senin - Jumat</span>
                    <span className="font-medium">09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabtu</span>
                    <span className="font-medium">09:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minggu & Libur</span>
                    <span className="font-medium">Tutup</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Support darurat 24/7 tersedia untuk pelanggan aktif
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
