import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";

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
          Movimiento Vecinal Escobar
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto italic">
          Participación real. Comunidad activa. Gestión transparente.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground hover:border-2 hover:border-primary-foreground font-heading font-bold">
            <a href="#participa">Sumate</a>
          </Button>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground hover:border-2 hover:border-primary-foreground font-heading font-bold">
            <a href="#escobar-impulsa">Propuestas</a>
          </Button>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground hover:border-2 hover:border-primary-foreground font-heading font-bold">
            <a href="#contacto">Contacto</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
