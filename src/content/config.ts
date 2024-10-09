import { date } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

const faqCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    author: z.string(),
    degree: z.string(),
    tutor_type: z.string(),
    date: z.date()
  }),
});
const insightsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string().optional(),
    date: z.date(),
    image: z.string().optional()
  }),
});
const policyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});
const examsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    card1_image: z.string(),
    card1_title: z.string(),
  }),
});

export const collections = {
  faq: faqCollection,
  insights: insightsCollection,
  policy: policyCollection,
  exams: examsCollection,
};