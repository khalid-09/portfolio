import Link from 'next/link';

const MainPage = () => {
  return (
    <section className="h-svh flex px-7 items-center justify-center text-white">
      <div className="space-y-6 md:space-y-8  max-w-2xl mx-auto text-start md:text-center">
        <h1 className="font-bold text-5xl md:text-7xl text-gray-300">
          Hi, Khalid here{' '}
          <span className="text-stone-400">a web developer.</span>
        </h1>
        <p className="text-xl font-medium text-zinc-400">
          I build scalable and reliable web applications from stable backend and
          frontend libraries and frameworks.
        </p>
        <div>
          <Link
            href="https://drive.google.com/file/d/1GaySm63kSc1zM8Ip75vZJ-XMW9Z6weIq/view"
            className="border-2 border-slate-400/40 bg-slate-700/20 px-6 text-zinc-200 font-medium rounded-lg py-2"
          >
            See resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
