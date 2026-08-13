import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/productos' }),
  schema: z.object({
    categoria: z.enum([
      'pastilla',
      'corporea',
      'lona',
      'calcomanias',
      'gorras',
      'llaveros',
      'remeras',
    ]),
    titulo: z.string(),
    imagen: z.string(),
    // Pastilla
    medida: z.string().optional(),
    bifaz: z.boolean().optional(),
    luminoso: z.boolean().optional(),
    // Corpórea
    material: z.enum(['acrilico', 'chapa', 'polifan']).optional(),
    iluminacion: z.enum(['con-luz', 'sin-luz']).optional(),
    tipoLuz: z.enum(['retroiluminado', 'frontal']).optional(),
    // Lona
    tipoLona: z.enum(['front', 'back']).optional(),
    // Merchandising (calcomanías, gorras, llaveros, remeras)
    variante: z.string().optional(),
  }),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/proyectos' }),
  schema: z.object({
    imagen: z.string(),
    descripcion: z.string().optional(),
    fecha: z.string().optional(),
  }),
});

const nosotros = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/nosotros' }),
  schema: z.object({
    titulo: z.string(),
    texto: z.string(),
    imagenes: z.array(z.string()).optional(),
  }),
});

export const collections = { productos, proyectos, nosotros };
