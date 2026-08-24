import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hindiTitle: z.string().optional(),
    moduleCode: z.enum(['M1-R5.1', 'M2-R5.1', 'M3-R5.1', 'M4-R5.1', 'CCC']),
    moduleName: z.string(),
    chapterNumber: z.number(),
    description: z.string(),
    keywords: z.array(z.string()),
    readingTime: z.string().default('10 min read'),
    lastUpdated: z.string().default('2026-08-24'),
    author: z.string().default('Mr. Aditya Pathak (Skilldotpy)'),
    marksWeightage: z.string().optional(),
    isHighPriority: z.boolean().default(true),
  }),
});

const syllabusCollection = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    hindiTitle: z.string(),
    totalMarks: z.number(),
    theoryMarks: z.number(),
    practicalMarks: z.number(),
    credits: z.number(),
    summary: z.string(),
  }),
});

export const collections = {
  notes: notesCollection,
  syllabus: syllabusCollection,
};
