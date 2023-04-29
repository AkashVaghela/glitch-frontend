import Link from "next/link";
import Image from "next/image";
import {
  BlogsSecondary as StyledBlogsSecondary,
  BlogItem,
  BlogImage,
  BlogTitle,
} from "./blogs-secondary.styles";
import { BlogsHeader, BlogsList } from "../blogs-primary/blogs-primary.styles";
import { secondaryBlogs } from "@/data/data.js";

const BlogsSecondary: React.FC = () => {
  return (
    <StyledBlogsSecondary>
      <BlogsHeader>
        <span>backend</span>
      </BlogsHeader>
      <BlogsList>
        {secondaryBlogs.map((item) => {
          return (
            <BlogItem key={item.id}>
              <BlogImage>
                <Image src={item.imageUrl} alt=""></Image>
              </BlogImage>
              <BlogTitle>
                <Link href={`/blog/${encodeURIComponent(item.slug)}`}>
                  {item.title}
                </Link>
              </BlogTitle>
              <span>{item.date}</span>
            </BlogItem>
          );
        })}
      </BlogsList>
    </StyledBlogsSecondary>
  );
};

export default BlogsSecondary;
