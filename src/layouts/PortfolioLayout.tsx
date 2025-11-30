import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PortfolioLayout: FC<Props> = ({ children }) => {
  return <div className="relative bg-bg-primary text-text-primary">{children}</div>;
};

export default PortfolioLayout;
