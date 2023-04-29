import Image from "next/image";
import Link from "next/link";
import {
  BlogsPrimary as StyledBlogsPrimary,
  BlogsHeader,
  Blog,
  BlogImage,
  BlogContent,
  BlogsList,
  BlogItem,
  BlogItemContent,
  BlogItemFooter,
  BlogImageSmall,
} from "./blogs-primary.styles";
import { primaryBlog, secondaryBlogs } from "@/data/data.js";

const BlogsPrimary: React.FC = () => {
  return (
    <StyledBlogsPrimary>
      <BlogsHeader>
        <span>frontend</span>
      </BlogsHeader>
      <Blog>
        <BlogImage>
          <Image src={primaryBlog.imageUrl} alt="" />
        </BlogImage>
        <BlogContent>
          {/* /blog/:slug */}
          <Link href={`/blog/${encodeURIComponent(primaryBlog.slug)}`}>
            {primaryBlog.title}
          </Link>
          <span>{primaryBlog.date}</span>
          <p>{primaryBlog.description}</p>
        </BlogContent>
      </Blog>
      <BlogsList>
        {secondaryBlogs.map((item) => {
          return (
            <BlogItem key={item.id}>
              <BlogItemContent>
                <Link href={`/blog/${encodeURIComponent(primaryBlog.slug)}`}>
                  <p>{item.title}</p>
                </Link>
                <BlogImageSmall>
                  <Image src={item.imageUrl} alt="" />
                </BlogImageSmall>
              </BlogItemContent>
              <BlogItemFooter>{item.date}</BlogItemFooter>
            </BlogItem>
          );
        })}
      </BlogsList>
    </StyledBlogsPrimary>
  );
};

export default BlogsPrimary;
