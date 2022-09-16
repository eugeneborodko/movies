import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
