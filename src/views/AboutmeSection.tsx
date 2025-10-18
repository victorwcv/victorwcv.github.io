import { skills } from '@/data/skills';
import { Icon } from '@/icons/icons';
import SectionLayout from '@/layouts/SectionLayout';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="about">
      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-sm text-center tracking-widest uppercase">
        {t('about.title')}
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        {t('about.subtitle')}
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-12 mb-5">
        <div className="relative ring-primary ring-offset-base-100 lg:w-36 lg:h-36 w-24 h-24 rounded-full ring-3 ring-offset-2 m-8 overflow-hidden flex justify-center items-center">
          <img src="/profile.webp" alt="My picture" />
        </div>
        <p className="lg:text-lg text-lg lg:text-left text-center font-serif text-zinc-500 max-w-lg leading-relaxed">
          {t('about.description')}
        </p>
      </div>

      {/* Profile */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mt-12 lg:mx-20 gap-x-12">
        {/* Left Side */}
        <div className="flex flex-col mx-auto max-w-lg">
          <h4 className="font-extrabold text-lg lg:text-left text-center my-4 tracking-widest uppercase">
            {t('about.profile.title')}
          </h4>
          <p className="text-zinc-500 font-serif leading-relaxed pb-8">
            {t('about.profile.description')}
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <ul className="mr-6">
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.user />
                  {t('about.profile.fullname-title')}:
                </h5>
                <p className="text-zinc-500">{t('about.profile.fullname')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.briefcase /> {t('about.profile.job-title')}:
                </h5>
                <p className="text-zinc-500">{t('about.profile.job')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.globe /> {t('about.profile.location-title')}:
                </h5>
                <p className="text-zinc-500">{t('about.profile.location')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.envelope /> {t('about.profile.email-title')}:
                </h5>
                <a
                  href="mailto:victorwccv@gamil.com"
                  className="text-zinc-500 hover:text-accent-500 flex items-center gap-2"
                >
                  {t('about.profile.email')}
                  <Icon.externalLink />
                </a>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.linkedin /> {t('about.profile.linkedin-title')}:
                </h5>
                <a
                  href="https://www.linkedin.com/in/victor-ccanchi/"
                  className="text-zinc-500 hover:text-accent-500 flex items-center gap-2"
                  target="_blank"
                >
                  {t('about.profile.linkedin')}
                  <Icon.externalLink />
                </a>
              </li>
              <li>
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.github /> {t('about.profile.github-title')}:
                </h5>
                <a
                  href="https://github.com/victorwcv"
                  className="text-zinc-500 hover:text-accent-500 flex items-center gap-2"
                  target="_blank"
                >
                  {t('about.profile.github')}
                  <Icon.externalLink />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-auto max-w-lg">
          <h4 className="font-extrabold text-lg lg:text-left text-center my-4 tracking-widest uppercase">
            {t('about.skills.title')}
          </h4>
          <p className="text-zinc-500 font-serif leading-relaxed pb-8">
            {t('about.skills.description')}
          </p>
          <div className="sm:h-auto h-[420px]">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label={t('about.skills.technologies-label')}
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
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-accent-500 cursor-pointer"
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
                aria-label={t('about.skills.tools-label')}
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-6">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-accent-500 cursor-pointer"
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
                aria-label={t('about.skills.others-label')}
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-6">
                  {skills.others.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center text-zinc-500 hover:text-accent-500 cursor-pointer"
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
          className="text-center border-zinc-700 border-[3px] lg:w-64 w-full lg:px-16 px-8 lg:py-4 py-2 hover:border-accent-500 hover:text-accent-500 font-bold transition-all duration-300 cursor-pointer uppercase"
        >
          {t('about.hire-me-button')}
        </a>
        <a
          href="#"
          className="text-center border-zinc-700 bg-zinc-700 text-white border-[3px] lg:w-64 w-full lg:px-16 px-8 lg:py-4 py-2 hover:border-zinc-900 hover:bg-zinc-900  font-bold transition-all duration-300 cursor-pointer uppercase"
        >
          {t('about.download-cv-button')}
        </a>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
