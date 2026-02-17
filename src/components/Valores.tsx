import { Card, CardContent } from "@/components/ui/card";
import { valores } from "@/data/valores";

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
