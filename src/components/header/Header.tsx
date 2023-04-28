import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Header as StyledHeader,
  HeaderLogo,
  HeaderNavBar,
  HeaderCTA,
  Profile,
  MobileNavbar,
} from "./header.styles";
import MenuSvg from "@/assets/menu.svg";

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <StyledHeader>
      <HeaderLogo>
        <Link href="/">
          G<span>lit</span>
          ch
        </Link>
      </HeaderLogo>
      <MobileNavbar>
        <Image src={MenuSvg} alt="" priority />
      </MobileNavbar>
      <HeaderNavBar>
        {/* /category/:category */}
        <Link href="/category/frontend">Frontend</Link>
        <Link href="/category/frontend">Backend</Link>
        <Link href="/category/frontend">AI</Link>
        <Link href="/category/frontend">DevOps</Link>
        <Link href="/category/frontend">Career</Link>
      </HeaderNavBar>
      {loggedIn ? (
        <Profile>
          <button type="button">account</button>
          <ul>
            <li>
              <Link href="/user/profile">profile</Link>
            </li>
            <li>
              <Link href="/user/bookmarks">bookmarks</Link>
            </li>
            {/* <li>
              <Link href="/contact">contact</Link>
            </li> */}
            <li>
              <Link href="/">log out</Link>
            </li>
          </ul>
        </Profile>
      ) : (
        <HeaderCTA>
          <Link href="/auth/sign-up">Subscribe</Link>
        </HeaderCTA>
      )}
    </StyledHeader>
  );
};

export default Header;
