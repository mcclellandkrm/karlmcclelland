import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { sectorIds } from './data/sectors';

// One collection for all case studies (/projects was folded into /work).
// Entries are grouped on /work by `sector` so a visitor can find a business
// like theirs; `services` lets what we do emerge through the work rather than
// leading with a services list (CLAUDE_PROJECT_BRIEF.md → Services).
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      sector: z.enum(sectorIds),
      services: z.array(z.string()).default([]),
      location: z.string().optional(),
      summary: z.string(),
      // One line on what the work did for the client.
      outcome: z.string().optional(),
      // Embeddable walkthrough URL (walkinto.in embed, Pano2VR export, Google Maps embed).
      walkthroughUrl: z.string().url().optional(),
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
