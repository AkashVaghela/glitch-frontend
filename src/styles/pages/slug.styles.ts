import styled from "styled-components";

const Blog = styled.div`
  grid-column: 5/ 11;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 1024px) {
    grid-column: 4/12;
  }

  @media only screen and (max-width: 768px) {
    grid-column: 3/13;
  }

  @media only screen and (max-width: 425px) {
    grid-column: 2/14;
  }
`;

const BlogTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -.5px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 425px) {
    font-size: 2.6rem;
  }
`;

const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  span {
    text-transform: uppercase;
    color: #737373;
    font-size: 1.4rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    @media only screen and (max-width: 425px) {
      width: 2rem;
      aspect-ration: 1;
    }
  }
`;

const BlogImage = styled.div`
  aspect-ratio: 16/ 9;
  margin-bottom: 3.2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BlogContent = styled.section`
  p {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    color: #262626;
    line-height: 1.5;
  }

  strong {
    font-weight: 600;
  }
`;

const BlogFooter = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3.2rem;

  .likes, .comments {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

    img {
      @media only screen and (max-width: 425px) {
        width: 2rem;
      }
    }

    span {
      text-transform: uppercase;
      color: #737373;
      font-weight: 500;
      font-size: 1.4rem;
    }
`;

// recommendations

const Recommendations = styled.div`
  grid-column: 5/ 11;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 1024px) {
    grid-column: 4/12;
  }

  @media only screen and (max-width: 768px) {
    grid-column: 3/13;
  }

  @media only screen and (max-width: 425px) {
    grid-column: 2/14;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -.5px;
    margin-bottom: 2rem;
  }
`;

const RecommendedBlog = styled.div`
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

const RecommendedBlogImage = styled.div`
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

const RecommendedBlogContent = styled.div`
span {
  text-transform: uppercase;
  color: #737373;
  font-weight: 500;
  font-size: 1.2rem;
}

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

export { Blog, BlogTitle, BlogHeader, BlogImage, BlogContent, BlogFooter, Recommendations, Icons, RecommendedBlog, RecommendedBlogImage, RecommendedBlogContent }