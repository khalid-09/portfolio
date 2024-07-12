import { projects } from '@/libs/projects';
import ProjectCard from './project-card';
import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <section id="projects" className="text-white mb-20">
      <h3 className="font-semibold text-4xl text-center">Projects</h3>
      <div className="mt-16 grid gap-5 md:grid-cols-2 grid-cols-1 ">
        {projects.map(project => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="flex justify-end mt-3">
        <Link
          href="https://github.com/khalid-09"
          className="font-medium bg-zinc-900 px-5 py-2 rounded-full"
        >
          View All...
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;
