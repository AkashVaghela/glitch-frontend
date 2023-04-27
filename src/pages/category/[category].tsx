import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/Layout";
import Container from "@/components/container/Container";
import { BlogsList, Blog, BlogImage, BlogContent } from "./category.styles";
import TestImage from "@/assets/test.jpg";

const Category: NextPageWithLayout = () => {
  return (
    <Container>
      <BlogsList>
        <Blog>
          <BlogImage>
            <Image src={TestImage} alt="" />
          </BlogImage>
          <BlogContent>
            <span>12/12/1221</span>
            {/* /blog/test-slug */}
            <Link href="/blog/test-slug">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                maxime alias magnam.
              </p>
            </Link>
          </BlogContent>
        </Blog>

        <Blog>
          <BlogImage>
            <Image src={TestImage} alt="" />
          </BlogImage>
          <BlogContent>
            <span>12/12/1221</span>
            {/* /blog/test-slug */}
            <Link href="/blog/test-slug">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                maxime alias magnam.
              </p>
            </Link>
          </BlogContent>
        </Blog>
      </BlogsList>
    </Container>
  );
};

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
