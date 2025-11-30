import { Tabs } from '@/components/Tabs';
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
        <p className="lg:text-lg text-lg lg:text-left text-center   max-w-lg leading-relaxed">
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
          <p className="  leading-relaxed pb-8">
            {t('about.profile.description')}
          </p>
          <div className="flex-1 mx-auto">
            <ul className="mr-6">
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.user />
                  {t('about.profile.fullname-title')}:
                </h5>
                <p className="">{t('about.profile.fullname')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.briefcase /> {t('about.profile.job-title')}:
                </h5>
                <p className="">{t('about.profile.job')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.globe /> {t('about.profile.location-title')}:
                </h5>
                <p className="">{t('about.profile.location')}</p>
              </li>
              <li className="mb-3">
                <h5 className="font-bold flex items-center gap-2 uppercase">
                  <Icon.envelope /> {t('about.profile.email-title')}:
                </h5>
                <a
                  href="mailto:victorwccv@gamil.com"
                  className=" hover:text-accent-500 flex items-center gap-2"
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
                  className=" hover:text-accent-500 flex items-center gap-2"
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
                  className=" hover:text-accent-500 flex items-center gap-2"
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
          <p className="  leading-relaxed pb-8">
            {t('about.skills.description')}
          </p>
          <div className="h-[420px]">
           <Tabs tabs={skills} />
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="flex sm:flex-row flex-col justify-center gap-6 mt-12">
        <a
          href="#contact"
          className="min-w-[250px] text-center px-6 py-3 text-xl border-2 border-accent-500 rounded bg-accent-500 hover:bg-accent-500/90 transition-all duration-300"
        >
          {t('about.hire-me-button')}
        </a>
        <a
          href="#"
          className=" min-w-[250px] text-center px-6 py-3 text-xl border-2 border-gray-600 text-gray-400 rounded hover:border-gray-500 hover:text-gray-300 transition-all duration-300"
        >
          {t('about.download-cv-button')}
        </a>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
