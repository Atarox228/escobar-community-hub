# Movimiento Vecinal Escobar

Sitio web oficial del **Movimiento Vecinal Escobar** — un espacio de participación plural para la articulación entre vecinos e instituciones locales del partido de Escobar, Buenos Aires.

> _"El disenso construye democracia"_

---

## 🌐 Demo

El sitio está desplegado en GitHub Pages. Una vez configurado el repositorio, será accesible desde la URL de GitHub Pages del proyecto.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 7
- **Estilos:** Tailwind CSS + shadcn/ui
- **Formularios:** React Hook Form + Zod
- **Routing:** React Router DOM v6
- **SEO:** React Helmet Async
- **Testing:** Vitest + Testing Library
- **CI/CD:** GitHub Actions → GitHub Pages

---

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes (logo, codexa)
├── components/      # Componentes de la UI
│   ├── ui/          # Componentes base de shadcn/ui
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── QuienesSomos.tsx
│   ├── Valores.tsx
│   ├── EscobarPiensa.tsx
│   ├── MujeresEscobarenses.tsx
│   ├── Participa.tsx
│   ├── Footer.tsx
│   └── ErrorBoundary.tsx
├── config/
│   └── site.ts      # Configuración global (nombre, contacto, redes)
├── data/
│   ├── navigation.ts
│   └── valores.ts
├── hooks/           # Hooks personalizados
├── lib/             # Utilidades e íconos
├── pages/
│   ├── Index.tsx    # Página principal
│   └── NotFound.tsx
└── types/           # Tipos TypeScript compartidos
```

---

## 🚀 Primeros pasos

### Requisitos

- Node.js 18+ (se recomienda instalar con [nvm](https://github.com/nvm-sh/nvm))
- npm

### Instalación

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_PROYECTO>

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:8080`.

---

## 📜 Scripts disponibles

| Comando           | Descripción                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Servidor de desarrollo con hot-reload    |
| `npm run build`   | Build de producción en `/dist`           |
| `npm run preview` | Previsualizar el build de producción     |
| `npm run lint`    | Ejecutar ESLint                          |
| `npm test`        | Ejecutar tests con Vitest                |
| `npm run test:watch` | Tests en modo interactivo            |

---

## ⚙️ Configuración

Toda la información de contacto y redes sociales se centraliza en `src/config/site.ts`:

```ts
export const siteConfig = {
  name: "Movimiento Vecinal Escobar",
  contact: {
    email: "...",
    phone: "...",
    whatsapp: "..."   // número sin espacios ni símbolos, ej: 5491100000000
  },
  social: {
    instagram: "...",
    facebook: "...",
    linkedin: "...",
    youtube: "..."
  }
}
```

---

## 📬 Formulario de contacto (WhatsApp)

La sección **Participá** genera un mensaje preformateado y abre WhatsApp Web con los datos del formulario. No requiere backend. La validación se realiza con Zod en el cliente.

---

## 🚢 Deploy

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions cada vez que se hace push a la rama `main`.

El workflow se encuentra en `.github/workflows/deploy.yml` y ejecuta:
1. Checkout del código
2. Instalación de dependencias (`npm ci`)
3. Build (`npm run build`)
4. Deploy del directorio `/dist` a la rama `gh-pages`

### Deploy manual

También se puede disparar manualmente desde la pestaña **Actions** del repositorio usando la opción _"workflow_dispatch"_.

---

## 🧪 Tests

```bash
npm test
```

Los tests están en `src/test/` y utilizan Vitest con jsdom como entorno.

---

## 🎨 Paleta de colores

El tema principal usa verde oscuro como color primario, definido en `src/index.css` mediante variables CSS de HSL.

| Token       | Valor HSL         | Uso                        |
|-------------|-------------------|----------------------------|
| `--primary` | `153 89% 14%`     | Fondo del header/footer    |
| `--secondary`| `150 30% 94%`    | Fondos de sección alternos |
| `--accent`  | `150 60% 30%`     | Íconos y destacados        |

---

## 🤝 Créditos

- Sitio desarrollado por [Codexa](https://wa.me/5491159045262)
- Movimiento Vecinal Escobar — Todos los derechos reservados © 2025
