import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Produk", path: "/produk" },
    { label: "Cara Kerja", path: "/cara-kerja" },
    { label: "Demo", path: "/demo" },
    { label: "Harga", path: "/harga" },
    { label: "Kontak", path: "/kontak" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/asset/iconmalingkapok.PNG" alt="Maling Kapok Logo" className="h-8 w-8 object-contain" />
          <span className="font-heading text-xl font-bold">Maling Kapok</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary font-semibold"
                  : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" size="sm">
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-brand hover:bg-gradient-brand-hover text-white font-semibold">
            <Link to="/demo">Minta Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/kontak" onClick={() => setIsMenuOpen(false)}>
                  Hubungi Kami
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-gradient-brand hover:bg-gradient-brand-hover text-white font-semibold">
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  Minta Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
