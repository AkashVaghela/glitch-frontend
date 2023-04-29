import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
import Layout from "@/components/layout/Layout";
import Container from "@/components/container/Container";
import {
  BlogsList,
  Blog,
  BlogImage,
  BlogContent,
  BlogTitle,
  BlogFooter,
  Fallback as StyledFallback,
} from "../../../styles/pages/bookmarks.styles";
import BookmarkIcon from "@/assets/bookmark.svg";
import { secondaryBlogs } from "@/data/data";

const Fallback = () => {
  return <StyledFallback>You don&apos;t have bookmarks :(</StyledFallback>;
};

const Bookmarks: NextPageWithLayout = () => {
  const [blogs, setBlogs] = useState([1]);

  return (
    <Container>
      {blogs.length === 0 && <Fallback />}

      {blogs.length > 0 && (
        <BlogsList>
          {secondaryBlogs.map((item) => {
            return (
              <Blog key={item.id}>
                <BlogImage>
                  <Image src={item.imageUrl} alt="" />
                </BlogImage>
                <BlogContent>
                  <BlogTitle>
                    {/* /blog/test-slug */}
                    <Link href={`/blog/${encodeURIComponent(item.slug)}`}>
                      <p>{item.title}</p>
                    </Link>
                  </BlogTitle>
                  <BlogFooter>
                    <span>{item.date}</span>
                    <Image src={BookmarkIcon} alt="" />
                  </BlogFooter>
                </BlogContent>
              </Blog>
            );
          })}
        </BlogsList>
      )}
    </Container>
  );
};

Bookmarks.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Bookmarks;
