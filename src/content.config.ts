import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    location: z.string(),
    eventType: z.string(),
    description: z.string(),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['upcoming', 'past']),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['video', 'audio', 'link']),
    sourceUrl: z.string().url().optional(),
    description: z.string(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  events,
  media,
};
