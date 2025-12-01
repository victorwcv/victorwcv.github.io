import { stats } from '@/data/stats';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

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
    <div className="bg-accent-500 py-20 shadow-xl">
      <div
        ref={sectionRef}
        className="flex flex-wrap items-stretch justify-center gap-6"
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="md:w-[150px] w-[120px] h-fit flex flex-col items-center justify-center gap-1 text-white"
          >
            <stat.icon className="md:text-4xl text-3xl text-accent-900" />
            <h1 className="md:text-4xl text-2xl font-bold">
              {hasAnimated ? (
                <CountUp end={stat.number} duration={7} />
              ) : (
                '0'
              )}
              +
            </h1>
            <p className="uppercase font-bold text-center md:text-base text-xs">
              {t(`stats.${stat.title}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
