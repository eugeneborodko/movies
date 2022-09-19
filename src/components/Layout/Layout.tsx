import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
