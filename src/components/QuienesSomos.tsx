import { Users, Target } from "lucide-react";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          ¿Quiénes Somos?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-accent" size={28} />
              <h3 className="font-heading text-xl font-bold text-foreground">¿Qué es el movimiento?</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              El Movimiento Vecinal Escobar es una organización comunitaria comprometida con el desarrollo sostenible y la participación ciudadana en el partido de Escobar. Nacimos como una respuesta a la necesidad de los vecinos de contar con una voz activa en las decisiones que afectan a nuestra comunidad.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Creemos en la gestión transparente, el diálogo permanente y la construcción colectiva de soluciones para los desafíos que enfrenta nuestra ciudad.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={28} />
              <h3 className="font-heading text-xl font-bold text-foreground">¿Por qué surgimos?</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Surgimos de la convicción de que los vecinos y vecinas de Escobar merecen ser protagonistas de su propio futuro. Ante la falta de espacios de participación genuina, decidimos organizarnos para generar propuestas concretas y viables.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nuestro objetivo es construir una comunidad más justa, segura y próspera, donde cada vecino pueda contribuir activamente al bienestar de todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
