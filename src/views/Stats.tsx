import { stats } from '@/data/stats';
import { FC } from 'react';
import CountUp from 'react-countup';

const Stats: FC = () => {
  return (
    <section
      id="stats"
      className="w-full min-h-[306px] flex items-center justify-center gap-4 bg-accent-600"
    >
      <div className="flex flex-wrap items-stretch justify-center my-auto mx-8 py-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="w-[200px] h-fit flex flex-col items-center justify-center gap-2 p-4"
          >
            <stat.icon className="text-black/80 text-4xl" />
            <h1 className="text-4xl font-bold text-white">
              <CountUp
                end={stat.number}
                duration={8}
                enableScrollSpy
                scrollSpyDelay={500}
              />
              +
            </h1>
            <p className="text-white/80 uppercase font-bold text-center">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
