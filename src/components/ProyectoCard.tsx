import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "@/lib/icons";
import { Proyecto } from "@/types/index";

interface ProyectoCardProps {
  proyecto: Proyecto;
}

export const ProyectoCard = ({ proyecto }: ProyectoCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background">
      <CardContent className="p-6 space-y-4">
        <div className="h-32 bg-primary/5 rounded-lg flex items-center justify-center mb-2">
          <span className="font-heading text-sm text-muted-foreground">
            Imagen del proyecto
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground">
          {proyecto.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {proyecto.desc}
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-heading font-semibold text-primary">
              {proyecto.status}
            </span>
            <span className="text-muted-foreground">{proyecto.progress}%</span>
          </div>
          <Progress value={proyecto.progress} className="h-2" />
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={14} /> {proyecto.location}
        </div>
      </CardContent>
    </Card>
  );
};