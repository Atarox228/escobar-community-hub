import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, User } from "lucide-react";

const articulos = [
  {
    title: "El futuro del transporte público en Escobar",
    author: "María González",
    date: "10 de febrero, 2026",
    excerpt: "Es momento de repensar cómo nos movemos en la ciudad. El transporte público no solo es una cuestión de movilidad, sino de equidad social y calidad de vida para todos los escobarenses.",
  },
  {
    title: "Educación y comunidad: un vínculo necesario",
    author: "Carlos Méndez",
    date: "5 de febrero, 2026",
    excerpt: "Las escuelas de nuestro partido necesitan más que infraestructura. Necesitan una comunidad comprometida con el aprendizaje y el desarrollo integral de nuestros jóvenes.",
  },
  {
    title: "Espacios verdes: patrimonio de todos",
    author: "Laura Fernández",
    date: "28 de enero, 2026",
    excerpt: "Los espacios verdes de Escobar son un tesoro que debemos proteger. En esta columna analizamos los desafíos actuales y las oportunidades para su preservación.",
  },
];

const EscobarPiensa = () => {
  return (
    <section id="escobar-piensa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escobar Piensa
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Opiniones y reflexiones de vecinos comprometidos con el futuro de nuestra ciudad.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articulos.map((a) => (
            <Card key={a.title} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-foreground">{a.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                  <span className="flex items-center gap-1"><User size={14} /> {a.author}</span>
                  <span className="flex items-center gap-1"><CalendarDays size={14} /> {a.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EscobarPiensa;
