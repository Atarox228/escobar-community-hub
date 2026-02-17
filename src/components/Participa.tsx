import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/config/site";

// Schema de validación
const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  localidad: z
    .string()
    .min(2, "La localidad debe tener al menos 2 caracteres")
    .max(50, "La localidad no puede exceder 50 caracteres"),
  telefono: z
    .string()
    .regex(
      /^[\d\s\+\-()]+$/,
      "Solo puede contener números, espacios, +, - y paréntesis"
    )
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

  const onSubmit = (data: ContactFormData) => {
    // Construir el mensaje para WhatsApp
    const mensaje = [
      "🏘️ *Movimiento Vecinal Escobar*",
      "Nueva consulta desde el sitio web:",
      "",
      `👤 *Nombre:* ${data.nombre}`,
      `📍 *Localidad:* ${data.localidad}`,
      `📞 *Teléfono:* ${data.telefono}`,
      `🙋 *Quiere ser voluntario/a:* ${data.voluntario ? "Sí" : "No"}`,
    ].join("\n");

    // Codificar el mensaje y armar la URL
    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, "_blank", "noopener,noreferrer");

    // Resetear el formulario
    reset();
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
              <Label
                htmlFor="nombre"
                className="font-heading font-semibold text-foreground"
              >
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
              <Label
                htmlFor="localidad"
                className="font-heading font-semibold text-foreground"
              >
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
              <Label
                htmlFor="telefono"
                className="font-heading font-semibold text-foreground"
              >
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
                onCheckedChange={(checked) =>
                  setValue("voluntario", !!checked)
                }
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
              className="w-full font-heading font-bold gap-2"
              disabled={isSubmitting}
            >
              <MessageCircle size={20} />
              {isSubmitting ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Participa;