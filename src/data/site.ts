export const site = {
  title: 'Developmental Cancer Genomics',
  tagline: 'Taking apart childhood cancer bit by bit',
  titleSuffix: 'Developmental Cancer Genomics @ CCRI',
  description:
    "Lab homepage of the Developmental Cancer Genomics group (Halbritter Lab) at St. Anna Children's Cancer Research Institute (CCRI) in Vienna.",
  url: 'https://cancerbits.github.io',
  labName: 'Developmental Cancer Genomics',
  piLabName: 'Florian Halbritter Lab',
  address: {
    institute: "St. Anna Children's Cancer Research Institute (CCRI)",
    street: 'Zimmermannplatz 10',
    city: '1090 Vienna, Austria',
    mapsUrl: 'https://goo.gl/maps/cpo8qsA4jBF2',
    photo: 'https://www.ccri.at/wp-content/uploads/2020/11/HausLNDK2014.jpg',
  },
  email: {
    // Rendered client-side by the ContactEmail component to keep it out of
    // static HTML and reduce (though not eliminate) scraping.
    user: 'florian.halbritter',
    domain: 'ccri.at',
  },
  host: {
    name: 'St. Anna Children’s Cancer Research Institute',
    url: 'https://science.ccri.at/',
    logo: '/images/logo-ccri.png',
  },
  social: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/cancerbits' },
    { label: 'Twitter / X', icon: 'twitter', url: 'https://twitter.com/cancerbits' },
    { label: 'Google Scholar', icon: 'google', url: 'https://scholar.google.at/citations?user=kvN5U0IAAAAJ' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/pub/florian-halbritter/70/79/4b7' },
    { label: 'ORCID', icon: 'orcid', url: 'https://orcid.org/0000-0003-2452-4784' },
  ],
  jobsUrl: 'https://www.ccri.at/job-openings/',
  copyrightYear: 2026,
  copyrightName: 'Florian Halbritter',
} as const;

export const nav: { label: string; href: string; icon?: string }[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Join us!', href: '/join/' },
  { label: 'People', href: '/people/' },
  { label: 'Research & Funding', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Contact', href: '/contact/' },
];
