import { Eye, Users, Shield, BookOpen, TrendingUp, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valores = [
  { icon: Eye, title: "Transparencia", desc: "Gestionamos con honestidad y rendimos cuentas a la comunidad. Cada acción y decisión es pública y accesible para todos los vecinos." },
  { icon: Users, title: "Participación ciudadana", desc: "Promovemos espacios de diálogo y construcción colectiva donde cada vecino tiene voz y voto en las decisiones que nos afectan." },
  { icon: Shield, title: "Seguridad", desc: "Trabajamos por un Escobar más seguro, impulsando políticas preventivas y colaboración entre vecinos y autoridades." },
  { icon: BookOpen, title: "Cultura y educación", desc: "Fomentamos el acceso a la cultura y la educación como pilares fundamentales para el desarrollo de nuestra comunidad." },
  { icon: TrendingUp, title: "Desarrollo local", desc: "Impulsamos el crecimiento económico y social de Escobar, apoyando emprendedores locales y proyectos productivos." },
  { icon: Leaf, title: "Cuidado ambiental", desc: "Protegemos nuestros espacios verdes y promovemos prácticas sustentables para las generaciones futuras." },
];

const Valores = () => {
  return (
    <section id="valores" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Nuestros Valores
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {valores.map((v) => (
            <Card key={v.title} className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
