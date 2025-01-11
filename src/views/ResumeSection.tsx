import Carrousel from '@/components/Carrousel';
import ResumeLineBlock from '@/components/ResumeLineBlock';
import { certificates } from '@/data/certificates';
import { Icon } from '@/icons/icons';
import SectionLayout from '@/layouts/SectionLayout';

const ResumeSection = () => {
  return (
    <SectionLayout id="resume" className="bg-zinc-100">
      {/* Title */}
      <h3 className="text-primary font-bold lg:text-base text-sm text-center tracking-widest">
        RESUME
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        More of my credentials.
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 pb-5">
        <p className="lg:text-xl text-lg text-center font-serif text-zinc-500 max-w-lg leading-relaxed">
          Learn about my professional experience and academic background that
          demonstrate my commitment and growth in software development over
          time.
        </p>
      </div>

      <div>
        {/* Work Experience */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-primary font-bold lg:text-xl text-base tracking-widest my-10">
            WORK EXPERIENCE
          </h3>

          <div className="grid grid-rows-3 max-w-4xl mx-auto">
            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title="Jr. Software Engineer"
              date="Sept. 2024 - Present"
              descriptioTitle="NTT DATA"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title="Web Developer"
              date="2023 - Present"
              descriptioTitle="Backend Developer"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title="Web Developer"
              date="2023 - Present"
              descriptioTitle="Frontend Developer"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />
          </div>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-primary font-bold lg:text-xl text-base tracking-widest mt-14 mb-10">
            EDUCATION
          </h3>

          <div className="grid grid-rows-3 max-w-4xl mx-auto">
            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title="Professional Certificate in Full Stack Web Development"
              date="Sept. 2023 - Aug. 2024"
              descriptioTitle="Massachusetts Institute of Technology - xPro"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title="Coursework in Electronic Engineering"
              date="Jan. 2020 - Jul. 2023"
              descriptioTitle="San Luis Gonzaga University"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title="Associate Degree in Industrial Electricity"
              date="2023 - Present"
              descriptioTitle="SENATI"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab cumque quasi eaque odio, accusamus eius, ipsa deserunt eum aliquid maxime harum minima debitis itaque. Incidunt laboriosam veritatis architecto natus."
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-primary font-bold lg:text-xl text-base tracking-widest mt-24 mb-16">
            CERTIFICATES
          </h3>
          <div className="w-full flex justify-center">
            <Carrousel items={certificates} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ResumeSection;
