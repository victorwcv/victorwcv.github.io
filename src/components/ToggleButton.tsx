import { Icon } from '@/icons/icons';
import { FC } from 'react';

interface Props {
  open: boolean;
  toggle: () => void;
}

const ToggleButton: FC<Props> = ({ open, toggle }) => {
  return (
    <div
      className="fixed top-4 right-4 z-50 text-lg bg-accent-500 text-white w-10 h-12  flex items-center justify-center cursor-pointer"
      onClick={() => toggle()}
    >
      {open ? <Icon.xmark /> : <Icon.bars />}
    </div>
  );
};

export default ToggleButton;
