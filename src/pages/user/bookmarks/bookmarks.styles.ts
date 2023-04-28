import styled from "styled-components";

const BlogsList = styled.div`
  margin-bottom: 3.2rem;
  grid-column: 5/11;

  @media only screen and (max-width: 1024px) {
    grid-column: 4/12;
  }

  @media only screen and (max-width: 425px) {
    grid-column: 2/14;
  }
`;

const Blog = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: start;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #d4d4d4;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const BlogImage = styled.div`
  flex-basis: 22rem;
  flex-shrink: 0;
  aspect-ration: 16/ 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: coner;
  }
`;

const BlogContent = styled.div``;

const BlogTitle = styled.div`
  a:link,
  a:visited {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
    color: #0a0a0a;
    text-decoration: none;
    margin-bottom: 1.6rem;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
`;

const BlogFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    text-transform: uppercase;
    color: #737373;
    font-weight: 500;
    font-size: 1.2rem;
  }

  img {
    @media only screen and (max-width: 425px) {
      width: 2rem;
    }
  }
`;

const Fallback = styled.p`
  grid-column: 2/ 14;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: #0a0a0a;
  margin-bottom: 3.2rem;
`;

export { BlogsList, Blog, BlogImage, BlogContent, BlogTitle, BlogFooter, Fallback }