import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  text-align: center;
  background: #0a0a0a;
  color: #fafafa;
  padding: 4rem 1rem;
`;

const FooterDescription = styled.p`
  max-width: 64rem;
  margin-inline: auto;
  padding: 1rem;
  padding-top: 3rem;
  font-size: 1.4rem;
  color: #d4d4d4;
`;

const Copyright = styled.p`
  color: #d4d4d4;
  font-size: 1.2rem;
  padding-top: 4.4rem;
`;

export { StyledFooter, FooterDescription, Copyright };
