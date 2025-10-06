import { useState } from "react";
import { MapPin, Play, Pause, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [motorStatus, setMotorStatus] = useState<"active" | "immobilized">("active");

  const handleCutOff = () => {
    if (motorStatus === "active") {
      setMotorStatus("immobilized");
      toast.success("Remote cut off berhasil! Mesin motor telah dimatikan.");
    } else {
      setMotorStatus("active");
      toast.success("Motor berhasil diaktifkan kembali.");
    }
  };

  const mockRoute = [
    { lat: -6.2088, lng: 106.8456, time: "08:00", speed: 0 },
    { lat: -6.2100, lng: 106.8470, time: "08:15", speed: 35 },
    { lat: -6.2150, lng: 106.8500, time: "08:30", speed: 40 },
    { lat: -6.2200, lng: 106.8550, time: "08:45", speed: 30 },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Demo Interaktif
            </h1>
            <p className="text-lg text-muted-foreground">
              Coba sendiri fitur-fitur Maling Kapok dengan simulasi pelacakan real-time dan kontrol jarak jauh
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Peta Pelacakan Real-Time</span>
                  </CardTitle>
                  <CardDescription>
                    Simulasi tracking motor selama 24 jam terakhir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Map Placeholder */}
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <MapPin className="w-16 h-16 mx-auto text-primary animate-pulse-glow" />
                        <div>
                          <p className="font-semibold">Demo Map View</p>
                          <p className="text-sm text-muted-foreground">
                            Integrasi Mapbox akan ditampilkan di sini
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Route Overlay */}
                    <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                        <span className="text-sm font-medium">Motor Aktif</span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Lokasi: Jakarta Selatan</p>
                        <p>Kecepatan: 35 km/jam</p>
                        <p>Status: {motorStatus === "active" ? "Berjalan" : "Immobilized"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Playback Controls */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentTime(0)}
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <div className="flex-1">
                        <Slider
                          value={[currentTime]}
                          onValueChange={(value) => setCurrentTime(value[0])}
                          max={100}
                          step={1}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {Math.floor(currentTime / 4)}:00
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Geser slider atau klik play untuk melihat replay perjalanan 24 jam
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Route History */}
              <Card>
                <CardHeader>
                  <CardTitle>Riwayat Perjalanan</CardTitle>
                  <CardDescription>Data perjalanan motor hari ini</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockRoute.map((point, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                        <div className="flex-shrink-0 w-12 text-center">
                          <span className="text-sm font-medium">{point.time}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Lat:</span> {point.lat}, 
                            <span className="font-medium ml-2">Lng:</span> {point.lng}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-sm text-muted-foreground">{point.speed} km/h</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Control Panel */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Remote Control</span>
                  </CardTitle>
                  <CardDescription>
                    Kontrol motor secara jarak jauh
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleCutOff}
                    className={`w-full ${
                      motorStatus === "active" 
                        ? "bg-warning hover:bg-warning/90" 
                        : "bg-success hover:bg-success/90"
                    } text-white font-semibold`}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {motorStatus === "active" ? "Cut Off Mesin" : "Aktifkan Motor"}
                  </Button>

                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2 text-sm">Status Motor</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mesin:</span>
                        <span className={`font-medium ${motorStatus === "active" ? "text-success" : "text-warning"}`}>
                          {motorStatus === "active" ? "Aktif" : "Off"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sinyal:</span>
                        <span className="font-medium text-success">Kuat</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Baterai:</span>
                        <span className="font-medium">12.4V</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground p-3 rounded bg-muted/50">
                    <p className="font-medium mb-1">💡 Tips Demo:</p>
                    <ul className="space-y-1">
                      <li>• Klik "Cut Off Mesin" untuk simulasi emergency stop</li>
                      <li>• Gunakan slider untuk replay rute</li>
                      <li>• Fitur real-time hanya tersedia di aplikasi production</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geofencing</CardTitle>
                  <CardDescription>Zona aman yang sudah dibuat</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">🏠 Rumah</span>
                      <span className="text-xs text-success">Aktif</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Radius 500m dari lokasi rumah</p>
                  </div>
                  <div className="p-3 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">🏢 Kantor</span>
                      <span className="text-xs text-success">Aktif</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Radius 300m dari lokasi kantor</p>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    + Tambah Zona Baru
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-brand text-white border-none">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-semibold">Tertarik dengan fitur ini?</h3>
                  <p className="text-sm opacity-90">
                    Jadwalkan demo lengkap dengan tim kami untuk melihat semua fitur dalam aksi
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    Jadwalkan Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
