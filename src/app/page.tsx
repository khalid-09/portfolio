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
    </>
  );
};

export default Page;
