# Blog Personal

Sitio web y blog personal desarrollado con [Astro](https://astro.build/), diseñado para ser rápido, accesible, modular y fácil de mantener. Incluye gestión de artículos en Markdown, catálogo de proyectos, generación de feed RSS y soporte para modo claro/oscuro.

---

## Características

- ⚡ **Rendimiento ultra rápido:** Construido sobre Astro con arquitectura de islas de componentes.
- 📝 **Blog en Markdown:** Gestión de publicaciones mediante *Content Collections* (`src/content.config.ts` y `src/blog/`).
- 💼 **Sección de Proyectos:** Páginas dinámicas para mostrar proyectos y portafolio (`/projects/[project]`).
- 🌓 **Modo Oscuro / Claro:** Alternador de tema integrado (`ThemeIcon.astro`).
- 📡 **Feed RSS:** Generación automática de feed para lectores de noticias (`/rss.xml`).
- 🎨 **Estilos modulares:** Configuración con soporte para Tailwind CSS y estilos globales (`global.css`).
- 📱 **Diseño responsivo:** Menú adaptable para dispositivos móviles[cite: 1].

---

## Estructura del Proyecto

```text
Blog-Personal/
├── public/                 # Archivos estáticos (favicon, sprites SVG, imágenes)
├── src/
│   ├── blog/               # Artículos y publicaciones en Markdown
│   ├── components/         # Componentes reutilizables (Header, Footer, Menu, etc.)
│   ├── layouts/            # Plantillas base y layouts para posts
│   ├── pages/              # Rutas y páginas del sitio (index, blog, projects, rss)
│   ├── scripts/            # Scripts del cliente (interactividad, menú móvil)
│   ├── styles/             # Estilos globales y utilidades CSS
│   └── content.config.ts   # Configuración y esquemas de colecciones de contenido
├── astro.config.mjs        # Configuración principal de Astro
├── package.json            # Dependencias y scripts del proyecto
├── pnpm-lock.yaml          # Bloqueo de versiones de paquetes
├── tsconfig.json           # Configuración de TypeScript
└── tareas.md               # Notas de desarrollo y tareas pendientes
