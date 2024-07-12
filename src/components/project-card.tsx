'use client';

import { Project } from '@/libs/projects';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({
  project: { title, img, description, link, github },
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
      viewport={{ once: true }}
      className="bg-zinc-900 border border-gray-500/30 p-2 rounded-xl"
    >
      <div className="relative h-56  rounded-xl overflow-hidden w-full">
        <Image src={img} alt={title} fill className="object-cover absolute" />
      </div>
      <div className="px-2 space-y-2 pt-3">
        <div className="flex items-center justify-between">
          {link && (
            <Link
              href={link}
              className="flex items-center gap-2 hover:translate-x-2 transition"
            >
              <LinkIcon className="w-4 h-4 " />
              <span className="font-semibold">{title}</span>
            </Link>
          )}
          {link === null && <p className="font-semibold">{title}</p>}
          <div>
            <Link href={github}>
              <GitHubLogoIcon className="h-5 w-5 hover:scale-110 transition " />
            </Link>
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
