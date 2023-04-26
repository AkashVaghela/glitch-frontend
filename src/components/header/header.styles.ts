import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 3.2rem;
`;

const HeaderLogo = styled.span`
  font-size: 3.2rem;
  span {
    color: #22c55e;
  }
`;

const HeaderNavBar = styled.nav`
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;

  a:link,
  a:visited {
    color: #171717;
    font-weight: 500;
    font-size: 1.3rem;
    margin-right: 3rem;
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderCTA = styled.button`
  border: none;
  background: #0a0a0a;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;

  a:link,
  a:visited {
    color: #fafafa;
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: #22c55e;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavbar = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export { Header, HeaderLogo, HeaderNavBar, HeaderCTA, MobileNavbar };
