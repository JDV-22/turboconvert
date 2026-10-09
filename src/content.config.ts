import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per tool and locale: src/content/tools/<locale>/<toolId>.md
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(), // short name used in UI, e.g. "PDF to Word"
    title: z.string().max(65), // <title>
    description: z.string().min(110).max(160), // meta description
    h1: z.string(),
    lead: z.string(), // one or two sentences under the H1
    /** Object of the drop title: "your PDF", "your images"… */
    what: z.string(),
    /** Verb phrase for "How to …" heading, e.g. "convert PDF to Word". */
    howTo: z.string(),
    steps: z.array(z.string()).min(3).max(6),
    /** Honest limitations shown in a "Good to know" box. */
    limits: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(110).max(160),
    h1: z.string().optional(),
    slug: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    tool: z.string().optional(), // related tool id for CTA
    category: z.enum(['pdf', 'image', 'document', 'video', 'audio', 'general']),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { tools, blog };
