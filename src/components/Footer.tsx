import logo from "@/assets/logo.jpeg";
import { Instagram, Facebook, Youtube,Linkedin, Mail, Phone } from "@/lib/icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & name */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full object-cover border-2 border-primary-foreground/20" />
            <span className="font-heading text-lg font-bold text-primary-foreground">
              {siteConfig.name}
            </span>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left space-y-3">
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">Contacto</h4>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail size={16} /> {siteConfig.contact.email}
            </a>
            <a href={`mailto:${siteConfig.contact.phone}`} className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone size={16} /> {siteConfig.contact.phone}
            </a>
          </div>

          {/* Social */}
          <div className="text-center md:text-right space-y-3">
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">Redes Sociales</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Youtube">
                <Youtube size={22} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Linkedin">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Movimiento Vecinal Escobar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
