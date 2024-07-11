import { skills } from '@/libs/skills';
import { MoveRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <section
      id="about"
      className="mb-32 p-6 md:p-12 space-y-5 rounded-xl bg-zinc-900 text-white"
    >
      <h3 className="text-4xl font-semibold">I build with,</h3>
      <p className="text-zinc-400 md:block hidden font-medium">
        I constantly learn new and exciting concepts in computer science and web
        development. I try applying these concepts to solve real-world problems.
        A few technologies I enjoy working with:
      </p>
      <p className="text-zinc-400 md:hidden block">
        Constantly learning new and exciting concepts to build.
      </p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {skills.map(({ skill }) => (
          <li
            key={skill}
            className="flex group font-medium transition cursor-pointer text-white items-center gap-3"
          >
            <MoveRight className="h-4 transition group-hover:scale-150 group-hover:text-red-600 text-red-400 w-4" />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutPage;
