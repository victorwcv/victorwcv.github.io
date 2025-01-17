import { skills } from '@/data/skills';
import { Icon } from '@/icons/icons';
import SectionLayout from '@/layouts/SectionLayout';
import { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <SectionLayout id="about">
      {/* Title */}
      <h3 className="text-primary font-bold lg:text-base text-sm text-center tracking-widest">
        ABOUT
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        Let me introduce myself.
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-12 mb-5">
        <div className="ring-primary ring-offset-base-100 lg:w-36 w-24 rounded-full ring ring-offset-2 m-8 overflow-hidden">
          <img src="/profile.jpg" />
        </div>
        <p className="lg:text-xl text-lg lg:text-left text-center font-serif text-zinc-500 max-w-lg leading-relaxed">
          Hi!, I'm Victor , a passionate web developer from Lima, Peru. My focus
          is creating digital solutions, offering products that are functional,
          scalable, and visually appealing. My main goal is transforming ideas
          into real projects through the use of modern technologies.
        </p>
      </div>

      {/* Profile */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mt-12 lg:mx-20 gap-x-12">
        {/* Left Side */}
        <div className="flex flex-col mx-auto max-w-lg">
          <h4 className="font-extrabold text-lg lg:text-left text-center my-4 tracking-widest">
            PROFILE
          </h4>
          <p className="text-zinc-500 font-serif leading-relaxed pb-8">
            Constantly seeking new challenges to grow as a web developer,
            enhance skills, and adopt emerging technologies to remain aligned
            with the latest industry trends.
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <ul className="mr-6">
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.user />
                  FULLNAME:
                </h5>
                <p className="text-zinc-500">Victor Ccanchi Vasquez</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.briefcase /> JOB:
                </h5>
                <p className="text-zinc-500">
                  Software Engineer - Frontend Developer
                </p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.globe /> LOCATION:
                </h5>
                <p className="text-zinc-500">Peru - Latin America</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.envelope /> EMAIL:
                </h5>
                <a
                  href="mailto:victorwccv@gamil.com"
                  className="text-zinc-500 hover:text-primary flex items-center gap-2"
                >
                  victorwccv@gmail.com
                  <Icon.externalLink />
                </a>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.linkedin /> LINKEDIN:
                </h5>
                <a
                  href="https://www.linkedin.com/in/victor-ccanchi/"
                  className="text-zinc-500 hover:text-primary flex items-center gap-2"
                  target="_blank"
                >
                  victor-ccanchi
                  <Icon.externalLink />
                </a>
              </li>
              <li>
                <h5 className="font-bold flex items-center gap-2">
                  <Icon.github /> GITHUB:
                </h5>
                <a
                  href="https://github.com/victorwcv"
                  className="text-zinc-500 hover:text-primary flex items-center gap-2"
                  target="_blank"
                >
                  victorwcv
                  <Icon.externalLink />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-auto max-w-lg">
          <h4 className="font-extrabold text-lg lg:text-left text-center my-4 tracking-widest">
            SKILLS
          </h4>
          <p className="text-zinc-500 font-serif leading-relaxed pb-8">
            Skilled in JavaScript, TypeScript, React, Angular, Vue.js, Node.js,
            Express, MongoDB, Tailwind CSS, and more modern technologies & tools
            for web development.
          </p>
          <div className='sm:h-auto h-[420px]'>
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Technologies"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-6">
                  {skills.technologies.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-primary cursor-pointer"
                    >
                      <skill.icon className="w-6 h-6" />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Tools"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-6">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-primary cursor-pointer"
                    >
                      <skill.icon className="w-6 h-6" />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Others"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-6">
                  {skills.others.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-primary cursor-pointer"
                    >
                      <skill.icon className="w-6 h-6" />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="flex sm:flex-row flex-col justify-center gap-6 mt-12">
        <a
          href="#contact"
          className="text-center border-zinc-700 border-[3px] lg:w-64 w-full lg:px-16 px-8 lg:py-4 py-2 hover:border-primary hover:text-primary font-bold transition-all duration-300 cursor-pointer"
        >
          HIRE ME
        </a>
        <a
          href="#"
          className="text-center border-zinc-700 bg-zinc-700 text-white border-[3px] lg:w-64 w-full lg:px-16 px-8 lg:py-4 py-2 hover:border-zinc-900 hover:bg-zinc-900  font-bold transition-all duration-300 cursor-pointer"
        >
          DOWNLOAD CV
        </a>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
