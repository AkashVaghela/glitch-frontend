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
} from "./bookmarks.styles";
import TestImage from "@/assets/test.jpg";
import BookmarkIcon from "@/assets/bookmark.svg";

const Fallback = () => {
  return <StyledFallback>You don't have bookmarks :(</StyledFallback>;
};

const Bookmarks: NextPageWithLayout = () => {
  const [blogs, setBlogs] = useState([1]);

  return (
    <Container>
      {blogs.length === 0 && <Fallback />}

      {blogs.length > 0 && (
        <BlogsList>
          <Blog>
            <BlogImage>
              <Image src={TestImage} alt="" />
            </BlogImage>
            <BlogContent>
              <BlogTitle>
                {/* /blog/test-slug */}
                <Link href="/blog/test-slug">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore maxime alias magnam.
                  </p>
                </Link>
              </BlogTitle>
              <BlogFooter>
                <span>12/12/1221</span>
                <Image src={BookmarkIcon} alt="" />
              </BlogFooter>
            </BlogContent>
          </Blog>

          <Blog>
            <BlogImage>
              <Image src={TestImage} alt="" />
            </BlogImage>
            <BlogContent>
              <BlogTitle>
                {/* /blog/test-slug */}
                <Link href="/blog/test-slug">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore maxime alias magnam.
                  </p>
                </Link>
              </BlogTitle>
              <BlogFooter>
                <span>12/12/1221</span>
                <Image src={BookmarkIcon} alt="" />
              </BlogFooter>
            </BlogContent>
          </Blog>
        </BlogsList>
      )}
    </Container>
  );
};

Bookmarks.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Bookmarks;
