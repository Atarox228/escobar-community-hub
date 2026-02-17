// src/components/sections/Participa.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

// Schema de validación
const contactSchema = z.object({
  nombre: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  localidad: z.string()
    .min(2, "La localidad debe tener al menos 2 caracteres")
    .max(50, "La localidad no puede exceder 50 caracteres"),
  telefono: z.string()
    .regex(/^[\d\s\+\-()]+$/, "El teléfono solo puede contener números, espacios, +, - y paréntesis")
    .min(8, "El teléfono debe tener al menos 8 dígitos"),
  voluntario: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Participa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      localidad: "",
      telefono: "",
      voluntario: false,
    },
  });

  const voluntarioValue = watch("voluntario");

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Aquí irá tu lógica de envío (API, email, etc.)
      console.log("Datos del formulario:", data);
      
      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mostrar toast de éxito
      toast.success("¡Gracias por tu interés!", {
        description: "Nos pondremos en contacto pronto.",
      });
      
      // Resetear formulario
      reset();
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Por favor, intenta nuevamente.",
      });
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nombre */}
            <div>
              <Label htmlFor="nombre" className="font-heading font-semibold text-foreground">
                Nombre <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nombre"
                placeholder="Tu nombre completo"
                {...register("nombre")}
                className={errors.nombre ? "border-destructive" : ""}
              />
              {errors.nombre && (
                <p className="text-sm text-destructive mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            {/* Localidad */}
            <div>
              <Label htmlFor="localidad" className="font-heading font-semibold text-foreground">
                Localidad <span className="text-destructive">*</span>
              </Label>
              <Input
                id="localidad"
                placeholder="Tu localidad"
                {...register("localidad")}
                className={errors.localidad ? "border-destructive" : ""}
              />
              {errors.localidad && (
                <p className="text-sm text-destructive mt-1">
                  {errors.localidad.message}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <Label htmlFor="telefono" className="font-heading font-semibold text-foreground">
                Teléfono <span className="text-destructive">*</span>
              </Label>
              <Input
                id="telefono"
                placeholder="Tu número de teléfono"
                {...register("telefono")}
                className={errors.telefono ? "border-destructive" : ""}
              />
              {errors.telefono && (
                <p className="text-sm text-destructive mt-1">
                  {errors.telefono.message}
                </p>
              )}
            </div>

            {/* Voluntario */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="voluntario"
                checked={voluntarioValue}
                onCheckedChange={(checked) => setValue("voluntario", !!checked)}
              />
              <Label 
                htmlFor="voluntario" 
                className="font-body text-foreground cursor-pointer"
              >
                ¿Querés ser voluntario/a?
              </Label>
            </div>

            {/* Botón de envío */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-heading font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>

          {/* Botón de WhatsApp */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-heading font-bold gap-2"
            >
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
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