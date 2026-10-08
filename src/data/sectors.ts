// Work is organised by the kind of business, so a visitor can find
// "someone like me" in one click. Proposed grouping of Karl's sector list —
// edit labels/order here; ids are used in content frontmatter and URLs.
export const sectors = [
  {
    id: 'hospitality',
    label: 'Restaurants, Bars & Hotels',
    examples: 'Restaurants, bars, hotels, suites',
  },
  {
    id: 'retail',
    label: 'Retail & Showrooms',
    examples: 'Shops, showrooms, kitchens, trade counters',
  },
  {
    id: 'automotive',
    label: 'Automotive',
    examples: 'Car showrooms and dealerships',
  },
  {
    id: 'commercial',
    label: 'Offices, Industry & Trade',
    examples: 'Offices, manufacturing, warehouses, workshops',
  },
  {
    id: 'leisure',
    label: 'Venues, Leisure & Sport',
    examples: 'Theatres, arenas, gyms, clubs, attractions',
  },
  {
    id: 'education',
    label: 'Education & Public Sector',
    examples: 'Schools, colleges, courts, public buildings',
  },
  {
    id: 'estates',
    label: 'Gardens, Estates & Weddings',
    examples: 'Country estates, gardens, wedding venues',
  },
  {
    id: 'residential',
    label: 'Residential & Property',
    examples: 'Developments, show homes, property marketing',
  },
] as const;

export type SectorId = (typeof sectors)[number]['id'];

export const sectorIds = sectors.map((sector) => sector.id) as [SectorId, ...SectorId[]];

export const sectorLabel = (id: SectorId) => sectors.find((sector) => sector.id === id)?.label ?? id;
