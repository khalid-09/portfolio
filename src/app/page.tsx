import AboutPage from '@/components/about-page';
import MainPage from '@/components/main-page';

const Page = () => {
  return (
    <>
      <MainPage />

      <div className="max-w-7xl px-4 m-auto">
        <AboutPage />
      </div>
    </>
  );
};

export default Page;
