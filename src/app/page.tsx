import AboutPage from '@/components/about-page';
import MainPage from '@/components/main-page';
import ProjectsPage from '@/components/projects-page';

const Page = () => {
  return (
    <>
      <MainPage />
      <div className="max-w-7xl px-4 m-auto">
        <AboutPage />
        <div className="px-3">
          <ProjectsPage />
        </div>
      </div>
      <footer className="font-bold text-4xl mb-16 text-zinc-200 text-center">
        And that&apos;s all.
      </footer>
    </>
  );
};

export default Page;
