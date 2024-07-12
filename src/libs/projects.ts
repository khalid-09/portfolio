export const projects = [
  {
    title: 'Ink-Spire',
    description: 'A Blogging Platform',
    img: '/ink.png',
    link: 'https://ink-spire-sage.vercel.app/',
    github: 'https://github.com/khalid-09/inkspire',
  },
  {
    title: 'Pocket-Flow',
    description: 'Finance tracking app.',
    img: '/pocket.png',
    link: 'https://pocket-flow-roan.vercel.app/',
    github: 'https://github.com/khalid-09/PocketFlow',
  },
  {
    title: 'The Wild Oasis',
    description: 'A cabin booking app.',
    img: '/oasis.png',
    link: null,
    github: 'https://github.com/khalid-09/The-Wild-Oasis',
  },
  {
    title: 'Nexbuy',
    description: 'A products list app.',
    img: '/nex.png',
    link: null,
    github: 'https://github.com/khalid-09/nexbuy',
  },
];

export interface Project {
  title: string;
  description: string;
  img: string;
  link: string | null;
  github: string;
}
