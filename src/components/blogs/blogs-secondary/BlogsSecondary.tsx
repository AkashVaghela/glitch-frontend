import Link from "next/link";
import Image from "next/image";
import {
  BlogsSecondary as StyledBlogsSecondary,
  BlogItem,
  BlogImage,
  BlogTitle,
} from "./blogs-secondary.styles";
import { BlogsHeader, BlogsList } from "../blogs-primary/blogs-primary.styles";
import TestImage from "@/assets/test.jpg";

const BlogsSecondary: React.FC = () => {
  return (
    <StyledBlogsSecondary>
      <BlogsHeader>
        <span>backend</span>
      </BlogsHeader>
      <BlogsList>
        <BlogItem>
          <BlogImage>
            <Image src={TestImage} alt=""></Image>
          </BlogImage>
          <BlogTitle>
            <Link href="/">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nobis accusamus voluptate.
            </Link>
          </BlogTitle>
          <span>12/12/1222</span>
        </BlogItem>{" "}
        <BlogItem>
          <BlogImage>
            <Image src={TestImage} alt=""></Image>
          </BlogImage>
          <BlogTitle>
            <Link href="/">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nobis accusamus voluptate.
            </Link>
          </BlogTitle>
          <span>12/12/1222</span>
        </BlogItem>{" "}
        <BlogItem>
          <BlogImage>
            <Image src={TestImage} alt=""></Image>
          </BlogImage>
          <BlogTitle>
            <Link href="/">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nobis accusamus voluptate.
            </Link>
          </BlogTitle>
          <span>12/12/1222</span>
        </BlogItem>{" "}
        <BlogItem>
          <BlogImage>
            <Image src={TestImage} alt=""></Image>
          </BlogImage>
          <BlogTitle>
            <Link href="/">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nobis accusamus voluptate.
            </Link>
          </BlogTitle>
          <span>12/12/1222</span>
        </BlogItem>
      </BlogsList>
    </StyledBlogsSecondary>
  );
};

export default BlogsSecondary;
