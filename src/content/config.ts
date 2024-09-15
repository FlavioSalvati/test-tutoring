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

export const collections = {
  faq: faqCollection
};