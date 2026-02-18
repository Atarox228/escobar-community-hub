  import logo from "@/assets/logo.jpeg";
  import codexaLogo from "@/assets/codexa.jpeg";
  import { Instagram, Facebook, Youtube,Linkedin, Mail, Phone } from "@/lib/icons";
  import { siteConfig } from "@/config/site";

  const Footer = () => {
    return (
      <footer id="contacto" className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 items-start">

            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary-foreground/20"
              />
              <span className="font-heading text-lg font-bold text-primary-foreground">
                {siteConfig.name}
              </span>
            </div>

            {/* Contacto */}
            <div className="text-center md:text-left space-y-3">
              <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">
                Contacto
              </h4>

              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/70">
                <Mail size={16} />
                {siteConfig.contact.email}
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/70">
                <Phone size={16} />
                {siteConfig.contact.phone}
              </div>

            </div>

            {/* Hecho por */}
            <div className="flex flex-col items-center space-y-3">
              <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">
                Pagina hecha por
              </h4>

              <a
                  href="https://wa.me/5491159045262"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img
                  src={codexaLogo}
                  alt="Codexa"
                  className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs text-primary-foreground/60 group-hover:text-primary-foreground transition-colors mt-2">
                  Codexa
                </span>
              </a>
            </div>

            {/* Redes */}
            <div className="text-center md:text-right space-y-3">
              <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">
                Redes Sociales
              </h4>

              <div className="flex justify-center md:justify-end gap-4">
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={22} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook size={22} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube size={22} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={22} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
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
