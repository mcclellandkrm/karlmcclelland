import { getCollection } from 'astro:content';
import { sectors } from './sectors';

// Published case studies, newest first.
export async function getPublishedWork() {
  const entries = await getCollection('work', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

// Sectors that have at least one published entry, in sectors.ts order.
// Empty sectors are hidden rather than shown as "coming soon".
export async function getWorkBySector() {
  const entries = await getPublishedWork();
  return sectors
    .map((sector) => ({ ...sector, entries: entries.filter((entry) => entry.data.sector === sector.id) }))
    .filter((sector) => sector.entries.length > 0);
}
