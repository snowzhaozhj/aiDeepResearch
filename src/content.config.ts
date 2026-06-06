import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "evaluation",
      "frameworks",
      "protocols",
      "observability",
      "toolchain",
    ]),
    tags: z.array(z.string()).default([]),
    status: z
      .enum(["active", "deprecated", "acquired", "emerging"])
      .default("active"),
    confidence: z.enum(["high", "medium", "low"]).default("medium"),
    date: z.coerce.date(),
    repo: z.string().url().optional(),
    stars: z.number().optional(),
    summary: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    covers: z.array(z.string()).default([]),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    method: z.string().optional(),
    confidence: z.enum(["high", "medium", "low"]).default("high"),
  }),
});

export const collections = { tools, guides, reports };
