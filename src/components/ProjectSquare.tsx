import { ProjectCategory } from '@/types';
import { FC } from 'react';
import { Icon } from '@/data/icons';

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const ProjectSquare: FC<Props> = ({
  id,
  title,
  description,
  image,
  tech,
  github,
  demo,
  featured,
}) => {
  if (featured) {
    return (
      <div
        key={id}
        className="bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden hover:border-accent-500 transition-all duration-300 group"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-80 md:h-auto overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-accent-500 text-xs font-medium tracking-widest mb-3">
              FEATURED PROJECT
            </span>
            <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-accent-500 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {demo && (
                <a
                  href={demo}
                  className="px-6 py-3 border-2 border-accent-500 text-accent-500 rounded hover:bg-accent-500 hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  <Icon.externalLink size={18} />
                  View Project
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-600 text-gray-400 rounded hover:border-gray-500 hover:text-gray-300 transition-all duration-300 flex items-center gap-2"
                >
                  <Icon.github size={18} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      key={id}
      className="bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden hover:border-accent-500 transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-accent-500 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demo && (
            <a
              href={demo}
              className="text-accent-500 hover:text-cyan-300 transition-colors"
            >
              <Icon.externalLink size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Icon.github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSquare;
