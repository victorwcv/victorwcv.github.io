import { FC } from 'react';

interface Props {
  icon: React.ReactNode;
  title: string;
  date: string;
  descriptioTitle: string;
  description: string;
}

const ResumeLineBlock: FC<Props> = ({
  icon,
  title,
  date,
  descriptioTitle,
  description,
}) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      <div className="col-span-1 lg:text-right text-left lg:pr-20 lg:pl-0 pl-20 pt-8 lg:border-l-0 border-l border-neutral-300">
        <h4 className="font-bold lg:text-xl text-base">{title}</h4>
        <p className="text-text-secondary lg:text-lg text-sm">{date}</p>
      </div>

      <div className="relative lg:col-span-2 col-span-1 pl-20 lg:pt-8 pt-5  border-l border-neutral-300">
        <h4 className="font-bold lg:text-lg text-base pb-4 ">
          {descriptioTitle}
        </h4>
        {/* line */}
        <div className="w-16 h-1 bg-neutral-400"></div>
        <p className="text-text-secondary py-4 lg:text-base text-sm ">
          {description}
        </p>
        {/* circle */}
        <div className="absolute size-12 rounded-full bg-accent-500 top-5 left-0 -translate-x-1/2 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ResumeLineBlock;
