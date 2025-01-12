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
              description="In my role as a Jr. Software Engineer, I have worked on the development and maintenance of web applications for the clients using React, Vue.js, and Angular. I have focused on creating dynamic interfaces and reusable components, collaborating with cross-functional teams to integrate frontend solutions with backend systems."
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title="AI Code Reviewer"
              date="Jun. 2024 - Aug. 2024"
              descriptioTitle="Revelo"
              description="As part of my role, I reviewed and evaluated AI-generated code, providing actionable feedback to enhance its accuracy and effectiveness. I identified and reported both proper and improper tool usage, contributing to the optimization of AI models. Additionally, I collaborated with teams to implement recommendations, improving the quality and relevance of the generated code."
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title="Freelance Developer"
              date="Jan. 2024 - Aug. 2024"
              descriptioTitle="Self-employed"
              description="As a freelance developer, I designed and implemented custom web solutions tailored to clients' needs, utilizing modern technologies such as React, Node.js, and MongoDB. My responsibilities included developing user-friendly interfaces, optimizing application performance, and ensuring seamless integration between frontend and backend. "
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
              description="Completed an intensive program focused on modern full-stack web development. Gained expertise in technologies such as React, Node.js, Express, and MongoDB, and developed practical skills in building scalable and responsive web applications. The program emphasized hands-on projects, collaborative coding, and best practices for software engineering, equipping me with the tools to deliver robust and efficient solutions."
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title="Coursework in Electronic Engineering"
              date="Jan. 2020 - Jul. 2023"
              descriptioTitle="San Luis Gonzaga University"
              description="Completed foundational coursework in electronic systems, circuit design, and programming, acquiring a strong technical background in problem-solving and analytical thinking. Gained experience in applying engineering principles to design and optimize electronic components, while developing skills in teamwork and project-based learning."
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title="Technical Diploma in Industrial Electricity"
              date="Aug. 2012 - Jul. 2015"
              descriptioTitle="SENATI"
              description="Although my background is in industrial electricity, my studies provided a solid foundation in technical problem-solving, analytical thinking, and project management. These skills have been essential in my transition to software development, where I apply similar logical reasoning and troubleshooting techniques to build and optimize software solutions.
              Fun fact: Besides creating magnificent web apps, I could probably install any electrical device wherever you need it! 😄"
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
