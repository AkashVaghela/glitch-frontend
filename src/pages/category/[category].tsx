import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout/Layout";
import Container from "@/components/container/Container";
import {
  BlogsList,
  Blog,
  BlogImage,
  BlogContent,
} from "@/styles/pages/category.styles";
import { secondaryBlogs } from "@/data/data";

const Category: NextPageWithLayout = () => {
  return (
    <Container>
      <BlogsList>
        {secondaryBlogs.map((item) => {
          return (
            <Blog key={item.id}>
              <BlogImage>
                <Image src={item.imageUrl} alt="" />
              </BlogImage>
              <BlogContent>
                <span>{item.date}</span>
                {/* /blog/test-slug */}
                <Link href={`/blog/${encodeURIComponent(item.slug)}`}>
                  <p>{item.title}</p>
                </Link>
              </BlogContent>
            </Blog>
          );
        })}
      </BlogsList>
    </Container>
  );
};

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
