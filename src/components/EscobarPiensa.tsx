// src/components/sections/EscobarPiensa.tsx
const EscobarPiensa = () => {
  return (
    <section id="escobar-piensa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Escobar Piensa
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-body text-lg text-center text-muted-foreground leading-relaxed">
            Es una iniciativa para llevar filosofía, cine y literatura de forma libre y abierta 
            a los centros culturales del distrito.
          </p>
          
          <p className="font-body text-lg text-center text-muted-foreground leading-relaxed">
            Una propuesta cultural para fomentar el pensamiento crítico, el diálogo y el encuentro 
            comunitario, sin banderas partidarias.
          </p>
          
          <p className="font-body text-lg text-center text-primary font-semibold leading-relaxed">
            Porque la cultura es un derecho y una herramienta de libertad.
          </p>
          
          {/* Cita de Borges */}
          <blockquote className="border-l-4 border-accent pl-6 py-4 mt-8">
            <p className="font-body text-xl italic text-foreground mb-2">
              "La duda es uno de los nombres de la inteligencia."
            </p>
            <cite className="font-body text-sm text-muted-foreground not-italic">
              — Borges, J. L. (2007). Obras completas (Vol. IV). Emecé.
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default EscobarPiensa;