import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Header as StyledHeader,
  HeaderLogo,
  HeaderNavBar,
  HeaderCTA,
  Profile,
  MobileNavbar,
  MobileMenu,
} from "./header.styles";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";
import { navbar } from "@/data/data";

const navigation = [
  {
    id: 1,
    href: "/user/profile",
    title: "profile",
  },
  {
    id: 2,
    href: "/user/bookmarks",
    title: "bookmarks",
  },
  {
    id: 3,
    href: "/",
    title: "log out",
  },
];

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const navbarHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <HeaderLogo>
        <Link href="/">
          G<span>lit</span>
          ch
        </Link>
      </HeaderLogo>

      {/* Mobile navigation */}
      <MobileNavbar onClick={navbarHandler}>
        {isOpen ? (
          <Image src={CloseIcon} alt="" priority />
        ) : (
          <Image src={MenuIcon} alt="" priority />
        )}
      </MobileNavbar>

      {isOpen && (
        <MobileMenu>
          <h2>categories</h2>
          <ul>
            {navbar.map((item) => {
              return (
                <li key={item.id} onClick={navbarHandler}>
                  <Link href={`/category/${encodeURIComponent(item.category)}`}>
                    {item.category}
                  </Link>
                </li>
              );
            })}
          </ul>

          {loggedIn && <h2>profile</h2>}
          {loggedIn && (
            <ul>
              {navigation.map((item) => {
                return (
                  <li key={item.id} onClick={navbarHandler}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </MobileMenu>
      )}

      {/* Desktop navigation */}
      <HeaderNavBar>
        <ul>
          {navbar.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/category/${encodeURIComponent(item.category)}`}>
                  {item.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </HeaderNavBar>

      {loggedIn ? (
        <Profile>
          <button type="button">account</button>
          <ul>
            {navigation.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
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
