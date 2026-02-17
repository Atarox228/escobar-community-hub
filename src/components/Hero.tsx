import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-primary pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 text-center">
        <img
          src={logo}
          alt="Logo Movimiento Vecinal Escobar"
          className="mx-auto mb-8 h-32 w-32 rounded-full object-cover border-4 border-primary-foreground/20 shadow-xl"
        />
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
          {siteConfig.name}
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto italic">
          El disenso construye democracia
        </p>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto italic">
          Espacio de participación plural para la articulación entre vecinos e instituciones locales.
        </p>
      </div>
    </section>
  );
};

export default Hero;
