import { Users, Target } from "@/lib/icons";

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
              El Movimiento Vecinal Escobar es una organización de vecinos que entiende la política en su 
              sentido más antiguo y noble: como cosa pública (res publica). No nacimos para administrar cargos, 
              sino para custodiar el interés común,y defender lo que es de cada escobarense.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Creemos que una comunidad se construye desde la virtud cívica: responsabilidad, valentía, 
              honestidad y compromiso con el territorio que habitamos. Nuestra ciudad es un cuerpo vivo que se 
              cuida o se degrada según la conducta de sus ciudadanos.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nuestro movimiento apuesta a una gestión transparente, al conflicto de ideas sin odio, al pluralismo 
              real y al diálogo como práctica republicana: no para diluir diferencias, sino para ordenarlas al 
              servicio del bien común.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={28} />
              <h3 className="font-heading text-xl font-bold text-foreground">¿Por qué surgimos?</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Surgimos de una certeza simple y profunda:
              cuando los vecinos se retiran de la vida pública, la comunidad se vuelve rehén de intereses
              ajenos al bien común y se cae en intereses que no nos pertenecen.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              En Escobar, decidimos educar al ciudadano como actor político, no como espectador pasivo.
              Creemos en la comunidad como sujeto político, en la deliberación pública, en la construcción
              paciente de propuestas concretas y posibles, arraigadas en la realidad de nuestra bella ciudad.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nuestro objetivo es republicano en el sentido clásico:
              una comunidad justa en sus normas, segura en su orden y próspera en su horizonte, donde
              cada vecino sea un custodio activo de lo común.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
