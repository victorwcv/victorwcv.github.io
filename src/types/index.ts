export type ProjectCategory = 'All' | 'Frontend' | 'Fullstack' | 'Mobile';

export interface Project {
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

export interface CarouselItem {
  id: number;
  src: string;
  title: string;
  link?: string;
  description?: string;
  tags?: string[];
}