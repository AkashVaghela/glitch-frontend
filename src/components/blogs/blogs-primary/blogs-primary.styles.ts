import styled from "styled-components";

const BlogsPrimary = styled.div`
  grid-column: 2/ 14;
  margin-bottom: 4.4rem;
`;

const BlogsHeader = styled.div`
  border-top: 2px solid #0a0a0a;
  margin-bottom: 2rem;

  span {
    font-size: 1.4rem;
    text-transform: capitalize;
    color: #fafafa;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #0a0a0a;
  }
`;

const Blog = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.6rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #d4d4d4;
`;

const BlogImage = styled.div`
  grid-column: 1/ 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 1024px) {
    grid-column: 1/ 8;
  }

  @media only screen and (max-width: 768px) {
    grid-column: 1/ 14;
  }
`;

const BlogContent = styled.div`
  grid-column: 9/ 14;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 1024px) {
    grid-column: 8/ 14;
  }

  @media only screen and (max-width: 768px) {
    grid-column: 1/ 14;
  }

  a:link,
  a:visited {
    color: #0a0a0a;
    line-height: 1;
    font-weight: 900;
    font-size: 3.6rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: uppercase;

    @media only screen and (max-width: 1024px) {
      font-size: 3rem;
    }
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }

  span {
    text-transform: uppercase;
    color: #737373;
    font-weight: 500;
    font-size: 1.4rem;
    flex-grow: 1;
  }

  p {
    color: #404040;
    font-size: 1.6rem;

    @media only screen and (max-width: 1024px) {
      font-size: 1.4rem;
    }
  }
`;

const BlogsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogItem = styled.div`
  padding-right: 1rem;
  border-right: 1px solid #d4d4d4;

  @media only screen and (max-width: 768px) {
    border: none;
  }

  @media only screen and (max-width: 425px) {
    margin-bottom: 1.6rem;
  }
`;

const BlogItemContent = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  a:link,
  a:visited {
    font-size: 1.8rem;
    font-weight: 600;
    color: #0a0a0a;
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
`;

const BlogImageSmall = styled.div`
  flex-basis: 6.4rem;
  flex-grow: 0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogItemFooter = styled.span`
  text-transform: uppercase;
  color: #737373;
  font-weight: 500;
  font-size: 1.2rem;
`;

export {
  BlogsPrimary,
  BlogsHeader,
  Blog,
  BlogImage,
  BlogContent,
  BlogsList,
  BlogItem,
  BlogItemContent,
  BlogItemFooter,
  BlogImageSmall,
};
