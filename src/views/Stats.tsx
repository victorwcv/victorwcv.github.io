import { stats } from '@/data/stats';
import SectionLayout from '@/layouts/SectionLayout';
import { FC, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Stats: FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect(); // Deja de observar después de la primera vez
        }
      },
      {
        threshold: 0.6, // 30% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <SectionLayout id="stats" className="bg-accent-600">
      <div
        ref={sectionRef}
        className="flex flex-wrap items-stretch justify-center gap-6"
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="md:w-[150px] w-[120px] h-fit flex flex-col items-center justify-center gap-1"
          >
            <stat.icon className="text-black/80 md:text-4xl text-3xl" />
            <h1 className="md:text-4xl text-2xl font-bold text-white">
              {hasAnimated ? (
                <CountUp end={stat.number} duration={7} />
              ) : (
                '0'
              )}
              +
            </h1>
            <p className="text-white/80 uppercase font-bold text-center md:text-base text-xs">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Stats;
