import styled from "styled-components";

const PageContainer = styled.div`
  margin-bottom: 3.2rem;
  width: clamp(30%, 400px, 90%);
  margin-inline: auto;
  text-align: left;

  h1 {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  a:is(:link, :active, :hover, :visited) {
    display: inline-block;
    color: #fafafa;
    background: #0a0a0a;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

const DetailsContainer = styled.div`
  margin-bottom: 2rem;
  font-weight: 500;

  span {
    display: inline-block;
    color: #737373;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  
  p {
    color: #0a0a0a;
    font-size: 1.4rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid #d4d4d4;
  }

  p:not([datatype="email"]) {
    text-transform: capitalize;
  }
`;

export { PageContainer, DetailsContainer };