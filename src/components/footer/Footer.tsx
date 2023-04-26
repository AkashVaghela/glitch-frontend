import React from "react";
import { Rowdies } from "next/font/google";
import { StyledFooter, FooterDescription, Copyright } from "./footer.styles";
import { HeaderLogo } from "../header/header.styles";

const rowdies = Rowdies({ weight: "700", subsets: ["latin"] });

const Footer = () => {
  return (
    <StyledFooter>
      <HeaderLogo className={rowdies.className}>
        G<span>lit</span>
        ch
      </HeaderLogo>
      <FooterDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        praesentium, laudantium incidunt quam officia sapiente perspiciatis,
        fugiat veritatis magnam nisi ex fuga inventore amet. Natus minus id
        labore neque ullam. Expedita asperiores veniam itaque suscipit
        temporibus quibusdam possimus iusto minus. Qui, vero laudantium?
      </FooterDescription>
      <Copyright>Copyright @ {new Date().getFullYear()} glitch</Copyright>
    </StyledFooter>
  );
};

export default Footer;
