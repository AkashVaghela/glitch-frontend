import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Main as StyledMain } from "./layout.styles";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledMain>
      <Header />
      <section>{children}</section>
      <Footer />
    </StyledMain>
  );
};

export default Layout;
