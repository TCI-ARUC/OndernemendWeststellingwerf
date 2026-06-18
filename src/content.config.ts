import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Nieuwsartikelen als Markdown. Tekstschrijvers bewerken alleen deze bestanden.
const nieuws = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nieuws' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),          // bv. "Terugblik", "Vereniging" — kleur wordt afgeleid
    excerpt: z.string(),           // korte samenvatting voor de kaart
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false), // het uitgelichte artikel bovenaan /nieuws
    image: z.string().optional(),  // pad onder /public, bv. /img/nieuws/safari.jpg
  }),
});

// Agenda-items als Markdown (tot de koppeling met het ledensysteem).
const agenda = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agenda' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),          // bv. "Netwerkborrel" — kleur wordt afgeleid
    excerpt: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),   // bv. "17:00 — 20:00"
    location: z.string().optional(),
    signup: z.string().optional(), // aanmeld-URL; ontbreekt → "Meer info"
  }),
});

export const collections = { nieuws, agenda };
