import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";

const proyectos = [
  {
    title: "Plaza Comunitaria Barrio Norte",
    desc: "Construcción de una nueva plaza con juegos infantiles, espacios verdes y área de ejercicios para toda la familia en el Barrio Norte de Escobar.",
    status: "En ejecución",
    progress: 65,
    location: "Barrio Norte",
  },
  {
    title: "Programa de Reciclaje Vecinal",
    desc: "Implementación de puntos verdes y campañas de concientización para promover el reciclaje y la separación de residuos en origen.",
    status: "Planificación",
    progress: 30,
    location: "Todo Escobar",
  },
  {
    title: "Iluminación LED Casco Histórico",
    desc: "Reemplazo de luminarias tradicionales por tecnología LED en el casco histórico, mejorando la seguridad y reduciendo el consumo energético.",
    status: "En ejecución",
    progress: 80,
    location: "Centro",
  },
];

const EscobarImpulsa = () => {
  return (
    <section id="escobar-impulsa" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escobar Impulsa
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proyectos comunitarios que transforman nuestra ciudad.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {proyectos.map((p) => (
            <Card key={p.title} className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="h-32 bg-primary/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-heading text-sm text-muted-foreground">Imagen del proyecto</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-heading font-semibold text-primary">{p.status}</span>
                    <span className="text-muted-foreground">{p.progress}%</span>
                  </div>
                  <Progress value={p.progress} className="h-2" />
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={14} /> {p.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EscobarImpulsa;
