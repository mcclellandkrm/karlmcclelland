export interface PortfolioItem {
  name: string;
  type: string;
  location: string;
  tourUrl: string;
  description: string;
}

// Add new tours here as they're shot — each entry drops straight into a PortfolioCard.
export const portfolioItems: PortfolioItem[] = [
  {
    name: 'Suitor Brothers',
    type: 'Menswear Retail',
    location: 'Belfast, UK',
    tourUrl: 'https://walkinto.in/easyembedview/-yHP0G_qIn-1xHwCz_58n',
    description: 'Premium menswear boutique. 360° walkthrough showcases curated collections and the fitting experience.',
  },
  {
    name: 'Wine Merchant',
    type: 'Specialist Retail',
    location: 'Dublin, Ireland',
    tourUrl: 'https://walkinto.in/easyembedview/bJE0A9kzD3bkgN0Cq1fDn',
    description: 'Curated wine collection. Walkthrough highlights rare vintages and expert recommendations.',
  },
];
