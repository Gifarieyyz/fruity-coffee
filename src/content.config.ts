import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 

const beansCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/beans" }),
  schema: z.object({
    name: z.string(),
    origin: z.string(),
    process: z.string(),
    roaster: z.string(),
    notes: z.string(),
  })
});

// Koleksi baru khusus buat Resep Seduhan
const recipesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),          // Contoh: "Hario Switch Sweet & Juicy Recipe"
    dripper: z.string(),        // Contoh: "Hario Switch"
    ratio: z.string(),          // Contoh: "1:15 (15g : 225g)"
    waterTemp: z.string(),      // Contoh: "90°C"
    grindSize: z.string(),      // Contoh: "Medium-Fine (Click 14 Timemore S3)"
  })
});

export const collections = {
  'beans': beansCollection,
  'recipes': recipesCollection,
};