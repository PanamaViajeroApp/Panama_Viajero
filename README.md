# Panama Viajero

## Fase 1: Guia turistica PANAMA VIAJERO

Panama Viajero es un directorio enfocado en promover destinos turisticos de Panama mediante una experiencia Visual, interactiva y optimizada para la navegación por destinos turísticos. Esta fase se concentra en la guía turística digital (página web responsive), contenido multimedia e información sobre algunos destinos turísticos, divididos por provincia para facilitar la navegación del usuario. Además, incluye un formulario de prerregistro para el lanzamiento de la app.

## Objetivo de la Fase 1

- Presentar Panamá como destino turístico mediante una experiencia visual moderna.
- Permitir la exploración por provincias con rutas dedicadas (aún en discusión).
- Mostrar lugares destacados con imágenes, videos y mapas.
- Captar usuarios interesados mediante un formulario de prerregistro.

## Stack del proyecto

### Frontend

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- JavaScript (`.js`, `.jsx`)
- TypeScript en componentes puntuales (`.ts`, `.tsx`)
- CSS personalizado

### Backend

- Node.js
- Express 5
- TypeScript
- Zod para validacion
- Supabase como base de datos
- SQL para esquema inicial

## Tipografias utilizadas

- `InvisibleSans`
  - Archivo: `src/assets/fonts/Invisible-ExtraBold.otf`
  - Uso principal: titulos y encabezados de marca
- `TangoSans`
  - Archivo: `src/assets/fonts/TangoSans.ttf`
  - Uso: textos secundarios
- `TangoSansBold`
  - Archivo: `src/assets/fonts/TangoSans_Bold.ttf`
- `TangoSansItalic`
  - Archivo: `src/assets/fonts/TangoSans_Italic.ttf`
- `TangoSansBoldItalic`
  - Archivo: `src/assets/fonts/TangoSans_BoldItalic.ttf`
- `Inter`, `Segoe UI`, `system-ui`
  - Uso: cuerpo de texto y fallback

## Formatos de multimedia utilizados

### Imagenes

- `.svg`
  - Logos, mapas vectoriales, siluetas de provincias
- `.avif`
  - Imagenes optimizadas y posters visuales
- `.jpg`
  - Algunos recursos (Imagenes)
- `.pdf`
  - Politica de privacidad

### Videos

- `.mp4` codificacion `H.264`
  - Compatibilidad amplia con navegadores
- `.mp4` codificacion `AV1`
  - Mejor compresion para navegadores compatibles (Iphone)

## Caracteristicas principales de la Fase 1

- Home principal con banner y secciones diferidas
- Navegacion por provincias
- Rutas individuales por provincia
- Seccion visual de mapa dinamico
- Sugerencias o lugares turisticos destacados
- Seccion institucional
- Formulario de preregistro conectado a API
- Integracion con Supabase para almacenar registros (Hasta tener host y dominio)

## Estructura de trabajo

```text
/
│
├── /src
│   ├── /assets
│   │   ├── /components
│   │   ├── /fonts
│   │   ├── /img_test
│   │   ├── /srcProvincias
│   │   └── Política de privacidad.pdf
│   │
│   ├── /data
│   │   └── /panama
│   │       ├── /BocasDelToro
│   │       ├── /chiriqui
│   │       ├── /cocle
│   │       ├── /colon
│   │       ├── /comarca_guna_yala
│   │       ├── /darien
│   │       ├── /herrera
│   │       ├── /lossantos
│   │       ├── /panama
│   │       ├── /panama_oeste
│   │       └── /veraguas
│   │
│   ├── /layout
│   │   ├── /banner
│   │   ├── /counter
│   │   ├── /functions
│   │   ├── /map
│   │   ├── /preregister
│   │   └── /suggestion
│   │
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── /public
│   ├── /maps
│   └── /videos
│
├── /backend
│   ├── /src
│   │   ├── /config
│   │   ├── /lib
│   │   └── /modules
│   │       └── /registrations
│   ├── /supabase
│   ├── package.json
│   └── tsconfig.json
│
├── /dist
├── /_oversize_assets
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### ¿Qué contiene cada parte?

- `src/`
  - Contiene toda la aplicación frontend.
- `src/assets/`
  - Recursos visuales, tipografías, logos, componentes reutilizables y mapas SVG.
- `src/data/`
  - Datos y vistas organizadas por provincia.
- `src/layout/`
  - Secciones principales que construyen la página de inicio.
- `public/`
  - Recursos públicos como videos y mapas optimizados para mostrarse en producción.
- `backend/`
  - API del formulario de prerregistro y conexión con Supabase.
- `dist/`
  - Build final generado para producción.
- `_oversize_assets/`
  - Recursos pesados o archivos de apoyo fuera del flujo principal.

## Flujo funcional actual

1. El usuario entra al sitio.
2. Navega por la pagina principal o por una provincia.
3. Visualiza contenido multimedia y sugerencias turisticas.
4. Completa el preregistro.
5. El frontend envia la informacion al backend.
6. El backend valida y guarda los datos en Supabase.

## Consideraciones tecnicas para hosting

- El frontend puede compilarse como sitio estatico.
- El proyecto tambien depende de un backend Node.js para el formulario.
- El contenido multimedia es pesado, especialmente por el volumen de videos.
- El build actual ronda los `193 MB`, por lo que almacenamiento y ancho de banda importan.

## Fase 2: Pagina Oficial

La Fase 2 sera la Pagina Oficial, esta guia turistica sera anexada a esta a la Pagina Oficial. Esa fase se documentara mas adelante con su propia estructura, requerimientos y alcance funcional.

## Preregistro actual con Google Apps Script

El preregistro ya no necesita el backend Node.js para enviar formularios. Ahora el frontend manda los datos a Google Apps Script y ese script envia el correo a `ed.jimenez0012@gmail.com`.

### Configuracion

1. Crea un proyecto nuevo en Google Apps Script.
2. Pega el contenido de [google-apps-script/Code.gs](C:\Users\deept\Panama_Viajero\google-apps-script\Code.gs).
3. Despliega como Web App:
   - `Deploy` > `New deployment`
   - Tipo: `Web app`
   - `Execute as`: tu cuenta
   - `Who has access`: `Anyone`
4. Copia la URL final que termina en `/exec`.
5. Coloca esa URL en tu archivo `.env` como `VITE_APPS_SCRIPT_URL`.
6. Reinicia el frontend.

### Variable de entorno

```env
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TU_DEPLOYMENT_ID/exec
```

### Referencias oficiales

- [Web apps | Google Apps Script](https://developers.google.com/apps-script/guides/web)
- [MailApp | Google Apps Script](https://developers.google.com/apps-script/reference/mail/mail-app)
