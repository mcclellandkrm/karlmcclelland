import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Single flexible schema shared by /work and /projects (CLAUDE_PROJECT_BRIEF.md
// nav lists both; the brief doesn't define what separates them, so entries
// self-assign via `section` rather than living in two duplicate schemas).
// See STRUCTURE_AUDIT.md §3–4.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      section: z.enum(['work', 'projects']).default('work'),
      category: z.array(z.string()).default([]),
      location: z.string().optional(),
      summary: z.string(),
      externalUrl: z.string().url().optional(),
      heroImage: image().optional(),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
          })
        )
        .default([]),
      quote: z
        .object({
          text: z.string(),
          attribution: z.string(),
          role: z.string().optional(),
        })
        .optional(),
      publishDate: z.coerce.date().default(() => new Date()),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
