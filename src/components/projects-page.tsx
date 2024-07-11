import { projects } from '@/libs/projects';
import ProjectCard from './project-card';

const ProjectsPage = () => {
  return (
    <section id="projects" className="text-white mb-20">
      <h3 className="font-semibold text-4xl text-center">Projects</h3>
      <div className="space-y-6 mt-16">
        {projects.map(project => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
