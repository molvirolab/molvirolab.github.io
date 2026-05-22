import { defineCollection, z } from 'astro:content';

// Configuration for Active Team Members
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().optional(),
    order: z.number().optional(),
  }),
});

// Configuration for Alumni Members
const alumniCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'team': teamCollection,
  'alumni': alumniCollection,
};
