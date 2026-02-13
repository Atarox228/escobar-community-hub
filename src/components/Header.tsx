import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Valores", href: "#valores" },
  { label: "Escobar Piensa", href: "#escobar-piensa" },
  { label: "Escobar Impulsa", href: "#escobar-impulsa" },
  { label: "Participá", href: "#participa" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Movimiento Vecinal Escobar" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading text-lg font-bold text-primary-foreground hidden sm:inline">
            Movimiento Vecinal Escobar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-heading text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
