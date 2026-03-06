import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    trackSlug: z.string(),
    courseSlug: z.string(),
    moduleSlug: z.string(),
    lessonSlug: z.string(),
    title: z.string(),
    summary: z.string(),
    durationMinutes: z.number().int().positive(),
    objectives: z.array(z.string()),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = {
  lessons,
};
