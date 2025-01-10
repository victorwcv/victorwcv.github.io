import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PortfolioLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PortfolioLayout;
