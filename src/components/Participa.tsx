import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

const Participa = () => {
  const [form, setForm] = useState({ nombre: "", localidad: "", telefono: "", voluntario: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
  };

  return (
    <section id="participa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Participá
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sumate al movimiento. Completá el formulario y formá parte del cambio.
        </p>
        <div className="max-w-lg mx-auto space-y-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="nombre" className="font-heading font-semibold text-foreground">Nombre</Label>
              <Input
                id="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="localidad" className="font-heading font-semibold text-foreground">Localidad</Label>
              <Input
                id="localidad"
                placeholder="Tu localidad"
                value={form.localidad}
                onChange={(e) => setForm({ ...form, localidad: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="telefono" className="font-heading font-semibold text-foreground">Teléfono</Label>
              <Input
                id="telefono"
                placeholder="Tu número de teléfono"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                required
              />
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="voluntario"
                checked={form.voluntario}
                onCheckedChange={(v) => setForm({ ...form, voluntario: !!v })}
              />
              <Label htmlFor="voluntario" className="font-body text-foreground cursor-pointer">
                ¿Querés ser voluntario/a?
              </Label>
            </div>
            <Button type="submit" size="lg" className="w-full font-heading font-bold">
              Enviar
            </Button>
          </form>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-heading font-bold gap-2">
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Contactanos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participa;
