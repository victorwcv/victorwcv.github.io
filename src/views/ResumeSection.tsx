import Carrousel from '@/components/Carrousel';
import ResumeLineBlock from '@/components/ResumeLineBlock';
import { certificates } from '@/data/certificates';
import { Icon } from '@/icons/icons';
import SectionLayout from '@/layouts/SectionLayout';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();
  
  return (
    <SectionLayout id="resume" className="bg-zinc-100">
      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-sm text-center tracking-widest uppercase">
        {t('resume.title')}
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        {t('resume.subtitle')}
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 pb-5">
        <p className="lg:text-xl text-lg text-center font-serif text-zinc-500 max-w-lg leading-relaxed">
          {t('resume.description')}
        </p>
      </div>

      <div>
        {/* Work Experience */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-accent-500 font-bold lg:text-xl text-base tracking-widest my-10 uppercase">
            {t('resume.experience.title')}
          </h3>

          <div className="grid grid-rows-3 max-w-4xl mx-auto">
            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title={t('resume.experience.title-1')}
              date={t('resume.experience.date-1')}
              descriptioTitle={t('resume.experience.organization-1')}
              description= {t('resume.experience.description-1')}
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title={t('resume.experience.title-2')}
              date={t('resume.experience.date-2')}
              descriptioTitle={t('resume.experience.organization-2')}
              description= {t('resume.experience.description-2')}
            />

            <ResumeLineBlock
              icon={<Icon.briefcase className="text-white" />}
              title={t('resume.experience.title-3')}
              date={t('resume.experience.date-3')}
              descriptioTitle={t('resume.experience.organization-3')}
              description= {t('resume.experience.description-3')}
            />
          </div>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-accent-500 font-bold lg:text-xl text-base tracking-widest mt-14 mb-10 uppercase">
            {t('resume.education.title')}
          </h3>

          <div className="grid grid-rows-3 max-w-4xl mx-auto">
            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title={t('resume.education.title-1')}
              date={t('resume.education.date-1')}
              descriptioTitle= {t('resume.education.organization-1')}
              description={t('resume.education.description-1')}
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
             title={t('resume.education.title-2')}
              date={t('resume.education.date-2')}
              descriptioTitle= {t('resume.education.organization-2')}
              description={t('resume.education.description-2')}
            />

            <ResumeLineBlock
              icon={<Icon.graduation className="text-white text-xl" />}
              title={t('resume.education.title-3')}
              date={t('resume.education.date-3')}
              descriptioTitle= {t('resume.education.organization-3')}
              description={t('resume.education.description-3')}
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-accent-500 font-bold lg:text-xl text-base tracking-widest mt-24 mb-16 uppercase">
            {t('resume.certificates.title')}
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
