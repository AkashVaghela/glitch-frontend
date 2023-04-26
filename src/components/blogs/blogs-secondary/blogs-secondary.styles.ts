import styled from "styled-components";

const BlogsSecondary = styled.div`
  grid-column: 2/ 14;
  margin-bottom: 4.4rem;
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 425px) {
    margin-bottom: 1.6rem;
  }
`;

const BlogImage = styled.div`
  margin-bottom: 1.2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BlogTitle = styled.div`
  flex-grow: 1;
  margin-bottom: 1.2rem;

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

export { BlogsSecondary, BlogItem, BlogImage, BlogTitle };
