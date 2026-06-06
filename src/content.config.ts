import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    method: z.string().optional(),
    confidence: z.enum(["high", "medium", "low"]).default("high"),
  }),
});

export const collections = { research };
