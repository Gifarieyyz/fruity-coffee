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

const recipesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    dripper: z.string(),
    ratio: z.string(),
    waterTemp: z.string(),
    grindSize: z.string(),
  })
});

export const collections = {
  'beans': beansCollection,
  'recipes': recipesCollection,
};