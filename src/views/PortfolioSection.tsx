import SectionLayout from '@/layouts/SectionLayout';

const PortfolioSection = () => {
  return (
    <SectionLayout id="portfolio">
      {/* Title */}
      <h3 className="text-primary font-bold lg:text-base text-sm text-center tracking-widest">
        PORTFOLIO
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        Check out some of my projects.
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 mb-5">
        <p className="lg:text-xl text-lg text-center font-serif text-zinc-500 max-w-lg leading-relaxed">
          Explore the projects I've worked on, showcasing my skills, creativity,
          and dedication to building innovative and impactful web solutions.
        </p>
      </div>
    </SectionLayout>
  );
};

export default PortfolioSection;
