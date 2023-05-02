import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  max-width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 3.2rem;
  z-index: 90;
  background: #fafafa;
`;

const HeaderLogo = styled.span`
  font-size: 3.2rem;
  font-family: "Rowdies", cursive;

  a:is(:link, :visited, :hover, :active) {
    text-decoration: none;
    color: inherit;

    span {
      color: #22c55e;
    }
  }
`;

const HeaderNavBar = styled.nav`
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;

    li {
      a:is(:link, :visited) {
        color: #171717;
        font-weight: 500;
        font-size: 1.3rem;
        margin-right: 3rem;
        text-decoration: none;
      }

      a:is(:hover, :active) {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderCTA = styled.button`
  border: none;
  color: #fafafa;
  background: #0a0a0a;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
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

const Profile = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  button[type="button"] {
    border: none;
    color: #fafafa;
    width: 10rem;
    background: #0a0a0a;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  &:is(:hover, :focus) {
    ul {
      display: block;
    }
  }

  ul {
    display: none;
    list-style: none;
    position: absolute;
    background: #fafafa;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    li {
      width: 10rem;
    }

    li a:is(:link, :visited) {
      display: block;
      text-decoration: none;
      color: #737373;
      font-size: 1.3rem;
      text-transform: capitalize;
      padding: 0.8rem 1rem;
    }

    li a:is(:hover, :active) {
      color: #0a0a0a;
      background: #22c55e;
    }
  }
`;

const MobileNavbar = styled.div`
  display: none;
  z-index: 300;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  padding-top: 5rem;
  background: #f5f5f5;
  height: 100vh;
  z-index: 200;
  width: min(80vw, 300px);
  overflow: hidden;

  h2 {
    text-transform: capitalize;
    margin-bottom: 2rem;
    font-weight: 500;
    color: #a3a3a3;
  }

  ul {
    display: block;
    list-style: none;
    margin-bottom: 4rem;

    li {
      a:is(:link, :visited) {
        display: block;
        text-decoration: none;
        font-size: 2rem;
        font-weight: 600;
        color: #171717;
        text-transform: uppercase;
        transition: all 0.5ms ease-in-out;
      }

      a:is(:hover, :active) {
        color: #f5f5f5;
        background: #171717;
      }
    }
  }
`;

export {
  Header,
  HeaderLogo,
  HeaderNavBar,
  HeaderCTA,
  Profile,
  MobileNavbar,
  MobileMenu,
};
