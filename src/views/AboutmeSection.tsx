import { Tabs } from '@/components/Tabs';
import { skills } from '@/data/skills';
import { Icon } from '@/data/icons';
import SectionLayout from '@/layouts/SectionLayout';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="about" >
      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-sm text-center tracking-widest uppercase">
        {t('about.title')}
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        {t('about.subtitle')}
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-20 mt-12 mb-4 p-4 rounded-xl bg-bg-card shadow">
        <div className="relative text-accent-500 lg:w-36 lg:h-36 w-24 h-24 rounded-xl m-8 overflow-hidden flex justify-center items-center">
          <img src="/profile.webp" alt="My picture" />
        </div>
        <p className="text-text-secondary lg:text-lg text-sm lg:text-left text-center max-w-lg">
          {t('about.description')}
        </p>
      </div>

      {/* Profile */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mx-20 gap-4 text-text-secondary">
        {/* Left Side */}
        <div className="flex flex-col mx-auto p-8 rounded-xl bg-bg-card shadow">
          <h4 className="font-extrabold text-lg lg:text-left text-center mb-4 tracking-widest uppercase text-text-primary">
            {t('about.profile.title')}
          </h4>
          <p className="text-text-secondary leading-relaxed pb-8 sm:text-base text-sm">
            {t('about.profile.description')}
          </p>
          <div className="flex-1 mx-auto sm:text-base text-sm">
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
        <div className="mx-auto p-8 rounded-xl bg-bg-card shadow">
          <h4 className="font-extrabold text-lg lg:text-left text-center mb-4 tracking-widest uppercase text-text-primary">
            {t('about.skills.title')}
          </h4>
          <p className="text-text-secondary leading-relaxed pb-8 sm:text-base text-sm">
            {t('about.skills.description')}
          </p>
          <div className="md:h-auto h-[400px] sm:text-base text-sm">
           <Tabs tabs={skills} />
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="flex sm:flex-row flex-col justify-center gap-6 mt-12">
        <a
          href="#contact"
          className="min-w-[250px] text-center px-6 py-3 text-xl border-2 border-accent-500 rounded bg-accent-500 hover:bg-accent-600 transition-all duration-300 text-accent-50"
        >
          {t('about.hire-me-button')}
        </a>
        <a
          href="#"
          className=" min-w-[250px] text-center px-6 py-3 text-xl border-2 border-text-secondary text-text-secondary rounded hover:text-accent-500 hover:border-accent-500 transition-all duration-300"
        >
          {t('about.download-cv-button')}
        </a>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
