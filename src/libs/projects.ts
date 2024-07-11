export const projects = [
  {
    title: 'Ink-Spire',
    description: 'A Blogging Platform',
    img: '/ink.png',
    link: 'https://ink-spire-sage.vercel.app/',
  },
  {
    title: 'Pocket-Flow',
    description: 'Finance tracking app.',
    img: '/pocket.png',
    link: 'https://pocket-flow-roan.vercel.app/',
  },
];

export interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
}
