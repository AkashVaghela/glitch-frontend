import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
