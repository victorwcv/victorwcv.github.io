import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const SectionLayout: FC<Props> = ({ children, id, className = 'bg-white' }) => {
  return (
    <section className={`${className}`} id={id}>
      <div className="container mx-auto px-8 sm:py-28 py-20">{children}</div>
    </section>
  );
};

export default SectionLayout;
