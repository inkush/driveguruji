import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['opinion', 'review', 'news', 'guide', 'data']),
    excerpt: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
    author: z.string().default('DriveGuruji'),
    tags: z.array(z.string()).optional(),
    keywords: z.string().optional(),
    schema: z.string().optional(),
  }),
});

export const collections = { articles };
