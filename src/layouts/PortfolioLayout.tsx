import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PortfolioLayout: FC<Props> = ({ children }) => {
  return <main >{children}</main>;
};

export default PortfolioLayout;
