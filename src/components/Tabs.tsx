import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';

interface icons {
  name: string;
  icon: IconType;
}

interface Tab {
  label: string;
  icons: icons[];
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab headers */}
      <div className="flex border-b-2 border-accent-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-2 text-sm font-medium transition-colors cursor-pointer  ${
              activeIndex === index
                ? ' text-accent-500'
                : ' hover:text-accent-600'
            }`}
          >
            {t(`about.skills.${tab.label}`)}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-6 p-6">
        {tabs[activeIndex].icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center hover:text-accent-500 cursor-pointer"
          >
            <icon.icon className="w-6 h-6" />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
