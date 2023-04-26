import React from "react";
import { Rowdies } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  Header as StyledHeader,
  HeaderLogo,
  HeaderNavBar,
  HeaderCTA,
  MobileNavbar,
} from "./header.styles";
import MenuSvg from "@/assets/menu.svg";

const rowdies = Rowdies({ weight: "700", subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderLogo className={rowdies.className}>
        G<span>lit</span>
        ch
      </HeaderLogo>
      <MobileNavbar>
        <Image src={MenuSvg} alt="" priority />
      </MobileNavbar>
      <HeaderNavBar>
        <Link href="/frontend">Frontend</Link>
        <Link href="/frontend">Backend</Link>
        <Link href="/frontend">AI</Link>
        <Link href="/frontend">DevOps</Link>
        <Link href="/frontend">Career</Link>
      </HeaderNavBar>
      <HeaderCTA>
        <Link href="/auth/sign-up">Subscribe</Link>
      </HeaderCTA>
    </StyledHeader>
  );
};

export default Header;
