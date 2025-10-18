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