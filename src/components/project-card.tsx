import { Project } from '@/libs/projects';
import { GitHubLogoIcon, Link1Icon } from '@radix-ui/react-icons';
import { Link2Icon, LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({
  project: { title, img, description, link },
}: ProjectCardProps) => {
  return (
    <div className="bg-zinc-900 border border-gray-500/30 p-2 rounded-xl">
      <div className="relative h-56  rounded-xl overflow-hidden w-full">
        <Image src={img} alt={title} fill className="object-cover absolute" />
      </div>
      <div className="px-2 space-y-2 pt-3">
        <div className="flex items-center justify-between">
          <Link
            href={link}
            className="flex items-center gap-2 hover:translate-x-2 transition"
          >
            <LinkIcon className="w-4 h-4 " />
            <span className="font-semibold">{title}</span>
          </Link>
          <div>
            <Link href="">
              <GitHubLogoIcon className="h-5 w-5 hover:scale-110 transition " />
            </Link>
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
