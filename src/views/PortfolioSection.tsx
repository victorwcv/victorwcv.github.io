import ProjectSquare from '@/components/ProjectSquare';
import SectionLayout from '@/layouts/SectionLayout';

const PortfolioSection = () => {
  const handleClick = () => {
    window.open('https://github.com/victorwcv', '_blank');
  };

  return (
    <SectionLayout id="portfolio">
      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-sm text-center tracking-widest">
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
      {/* Projects */}
      <div className="max-w-5xl mx-auto pt-12 hover:cursor-pointer">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <ProjectSquare
              imgSrc="https://picsum.photos/id/206/900/400"
              height="lg:h-[700px] h-[400px]"
              projectName="Project 1"
              projectDescription="Description 1"
              onclick={handleClick}
            />
            <ProjectSquare
              imgSrc="https://picsum.photos/id/217/900/400"
              height="lg:h-[500px] h-[400px]"
              projectName="Project 2"
              projectDescription="Description 2"
              onclick={handleClick}
            />

            <ProjectSquare
              imgSrc="https://picsum.photos/id/218/900/400"
              height="lg:h-[500px] h-[400px]"
              projectName="Project 3"
              projectDescription="Description 3"
              onclick={handleClick}
            />
          </div>

          <div className="col-span-1">
            <ProjectSquare
              imgSrc="https://picsum.photos/id/219/900/400"
              height="lg:h-[500px] h-[450px]"
              projectName="Project 4"
              projectDescription="Description 4"
              onclick={handleClick}
            />

            <ProjectSquare
              imgSrc="https://picsum.photos/id/230/900/400"
              height="lg:h-[500px] h-[450px]"
              projectName="Project 5"
              projectDescription="Description 5"
              onclick={handleClick}
            />

            <ProjectSquare
              imgSrc="https://picsum.photos/id/221/900/400"
              height="lg:h-[700px] h-[450px]"
              projectName="Project 6"
              projectDescription="Description 6"
              onclick={handleClick}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PortfolioSection;
