# SCDK — Programa Nacional Sipalki Chaiu Do Kwan

Sitio web estático del Programa Nacional de Formación **Sipalki Chaiu Do Kwan (SCDK)** — Argentina.

## Estructura

- `index.html` — Landing page principal y lector modal de publicaciones.
- `css/styles.css` — Estilos responsive y optimización móvil.
- `js/app.js` — Lógica interactiva (selector de etapas, niveles técnicos, buscador, filtros y constructor de WhatsApp).
- `data/posts.js` — Base de las 32 publicaciones del programa.
- `assets/` — Favicon e imágenes optimizadas.
- `_headers` — Cabeceras de seguridad y caché para Cloudflare Pages.

## Despliegue en Cloudflare Pages

1. Subir este repositorio a GitHub.
2. En **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**, seleccionar el repositorio.
3. Configurar el build así:
   - **Framework preset**: `None`
   - **Build command**: *(vacío)*
   - **Build output directory**: `/`
