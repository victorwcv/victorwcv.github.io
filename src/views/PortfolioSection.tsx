import ProjectSquare from '@/components/ProjectSquare';
import SectionLayout from '@/layouts/SectionLayout';
import { ProjectCategory } from '@/types';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { Icon } from '@/icons/icons';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Frontend',
    'Fullstack',
    'Mobile',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionLayout id="projects" className="bg-neutral-900 text-primary-light">
      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-sm text-center tracking-widest">
        PORTFOLIO
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        Check out some of my projects.
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 mb-5">
        <p className="lg:text-xl text-lg text-center  text-neutral-500 max-w-lg leading-relaxed">
          Explore the projects I've worked on, showcasing my skills, creativity,
          and dedication to building innovative and impactful web solutions.
        </p>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-accent-500 bg-opacity-20 text-accent-500 border border-accent-500'
                : 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-500 hover:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Projects */}
      <div className="max-w-5xl mx-auto pt-12 space-y-12">
        {filteredProjects.map((project) => (
          <ProjectSquare key={project.id} {...project} />
        ))}

        {/* Coming Soon Cards */}

        {[1].map((i) => (
          <div
            key={`coming-${i}`}
            className="bg-neutral-800 rounded-lg border border-neutral-700 border-dashed overflow-hidden group hover:border-accent-500 transition-all duration-300"
          >
            <div className="relative h-64 bg-neutral-900 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4 group-hover:bg-accent-500 group-hover:bg-opacity-10 transition-all duration-300">
                  <Icon.rocket
                    className="text-accent-500 group-hover:animate-pulse"
                    size={40}
                  />
                </div>
                <Icon.code
                  className="text-gray-700 mx-auto mb-2 group-hover:text-accent-500 transition-colors"
                  size={60}
                />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Coming Soon</h3>
              <p className="text-gray-400 mb-4">
                New exciting project in development. Stay tuned!
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-gray-500 text-xs">
                  React
                </span>
                <span className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-gray-500 text-xs">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-gray-500 text-xs">
                  ???
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State Message if no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Icon.code className="text-gray-700 mx-auto mb-4" size={80} />
            <p className="text-gray-400 text-lg mb-2">
              No projects found in this category yet.
            </p>
            <p className="text-gray-500 text-sm">
              Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default PortfolioSection;
