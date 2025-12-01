import { Icon } from '@/icons/icons';
import SelectLanguage from './SelectLanguage';
import SelectTheme from './SelectTheme';

export const Configbar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 sm:block hidden">
      <div className="flex flex-col items-center justify-between bg-bg-card/80 backdrop-blur px-4 rounded-xl shadow-lg">
        <ul>
          <li className="flex flex-col items-center gap-2 py-4 border-b border-bg-hover">
            <Icon.translate size={22} className="text-text-secondary" />
            <SelectLanguage orientation="vertical" />
          </li>
          <li className="flex flex-col items-center gap-2 py-4">
            <Icon.palette size={22} className="text-text-secondary" />
            <SelectTheme orientation="vertical" />
          </li>
        </ul>
      </div>
    </div>
  );
};
