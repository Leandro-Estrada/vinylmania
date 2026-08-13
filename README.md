# Vinylmania — sitio base (Astro + Decap CMS)

Sitio estático de prueba: home, productos (con filtros cruzados), proyectos, nosotros y contacto.
Sin base de datos, sin WordPress. Deploy en Netlify, gratis.

## Antes de subir

1. Reemplazá el número de WhatsApp placeholder `5491100000000` en:
   - `src/layouts/Layout.astro` (botón flotante)
   - `src/pages/contacto.astro`
2. Las fotos en `public/images/` son placeholders grises — reemplazalas por fotos reales (mismo nombre de archivo, o cambiá las rutas en `src/content/productos/*.json` y `src/content/proyectos/*.json`).

## Probarlo en Netlify (deploy en git, recomendado)

1. Subí esta carpeta a un repo de GitHub (privado o público, da igual).
2. Entrá a app.netlify.com → "Add new site" → "Import an existing project" → conectá el repo.
3. Build settings (Netlify ya los detecta por `netlify.toml`, pero por las dudas):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. En 1-2 minutos el sitio está online en una URL tipo `nombre-random.netlify.app`.
5. Después podés apuntar el dominio `vinylmania.com.ar` desde Netlify → Domain settings.

## Habilitar el panel de edición (/admin) para el cliente

Esto es lo que le permite al cliente subir fotos sin depender de vos:

1. En el dashboard del sitio en Netlify: Site configuration → Identity → Enable Identity.
2. En Identity → Registration: dejalo en "Invite only" (así solo entra quien vos invites).
3. Activá Git Gateway (dentro de Identity → Services) — esto es lo que le permite a Decap escribir commits en tu repo sin que el cliente tenga cuenta de GitHub.
4. En Identity → Invite users, mandale la invitación al email del cliente. Le va a llegar un mail para definir su contraseña.
5. El cliente entra a vinylmania.com.ar/admin, pone su usuario/contraseña, y ya puede cargar productos, proyectos y editar el texto de Nosotros.

Cada vez que guarda algo en el panel, se genera un commit en el repo → Netlify recompila solo → el sitio se actualiza en 1-2 minutos.

## Estructura de contenido (lo que edita el cliente)

- `src/content/productos/*.json` — un archivo por producto. Campos: categoría, título, imagen, y según la categoría: medida (pastilla) / material + iluminación + tipo de luz (corpórea) / tipo (lona).
- `src/content/proyectos/*.json` — un archivo por foto de trabajo realizado. Feed simple, sin categorizar.
- `src/content/nosotros/nosotros.json` — un solo archivo con título, texto y fotos del taller.

## Desarrollo local

```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```
