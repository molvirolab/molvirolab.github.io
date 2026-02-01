import { z, defineCollection } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // Short description for the card
    order: z.number().default(100),
    color: z.enum(['var(--accent-blue)', 'var(--accent-purple)', 'var(--accent-cyan)', 'var(--accent-pink)']).default('var(--accent-blue)'),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    email: z.string().optional(),
    website: z.string().optional(),
    order: z.number().default(100), // Lower numbers come first
    isPast: z.boolean().default(false),
    pastNames: z.array(z.string()).optional(), // For listing multiple past students in one file
  }),
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    link: z.string().url(),
    order: z.number().default(100),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // e.g., "FEBRUARY 2026"
    isHighlight: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = {
  'research': researchCollection,
  'team': teamCollection,
  'publications': publicationsCollection,
  'news': newsCollection,
  'projects': projectCollection,
};
