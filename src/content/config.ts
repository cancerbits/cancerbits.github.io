import { defineCollection, z } from 'astro:content';

// ---------------------------------------------------------------------------
// People — current team members. One markdown file per person; the body
// (if any) is unused today but is available for future bios.
// ---------------------------------------------------------------------------
const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // Accepts either an absolute URL (most photos are hosted on ccri.at)
    // or a site-relative path such as `/images/foo.png`.
    photo: z.string().optional(),
    order: z.number().default(99),
    links: z
      .object({
        github: z.string().url().optional(),
        googleScholar: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        orcid: z.string().url().optional(),
        twitter: z.string().url().optional(),
        researchgate: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .default({}),
    placeholder: z.boolean().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Publications — one entry per paper/preprint. `authorsHtml` intentionally
// allows a small amount of inline markup (`<u>` for lab members, `<sup>`
// for equal-contribution marks) to match standard bibliography conventions.
// ---------------------------------------------------------------------------
const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    authorsHtml: z.string(),
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    doi: z.string().url().optional(),
    section: z.enum(['preprint', 'main', 'other']),
    highlighted: z.boolean().default(false),
    order: z.number(),
    links: z.array(linkSchema).default([]),
  }),
});

// ---------------------------------------------------------------------------
// Funding — currently active grants shown on the Research & Funding page.
// ---------------------------------------------------------------------------
const funding = defineCollection({
  type: 'data',
  schema: z.object({
    funder: z.string(),
    logo: z.string(),
    description: z.string(),
    links: z.array(linkSchema).default([]),
    order: z.number().default(99),
  }),
});

// ---------------------------------------------------------------------------
// Projects — highlighted past/ongoing research projects.
// ---------------------------------------------------------------------------
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
    links: z.array(linkSchema).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { people, publications, funding, projects };
