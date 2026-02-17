import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  localidad: z.string().min(2, "La localidad es requerida"),
  telefono: z.string().regex(/^\+?[0-9\s-]+$/, "Teléfono inválido"),
  voluntario: z.boolean()
});

export type ContactFormData = z.infer<typeof contactSchema>;