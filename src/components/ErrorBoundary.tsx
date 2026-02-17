// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Algo salió mal
            </h1>
            <p className="text-muted-foreground mb-6">
              Ocurrió un error inesperado. Por favor, intenta recargar la página.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <pre className="text-left text-xs bg-muted p-4 rounded mb-4 overflow-auto">
                {this.state.error.toString()}
              </pre>
            )}
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                size="lg"
              >
                Recargar página
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = "/"}
                size="lg"
              >
                Ir al inicio
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}