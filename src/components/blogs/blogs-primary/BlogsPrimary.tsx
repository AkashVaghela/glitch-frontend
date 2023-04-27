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
import TestImage from "@/assets/test.jpg";

const BlogsPrimary: React.FC = () => {
  return (
    <StyledBlogsPrimary>
      <BlogsHeader>
        <span>frontend</span>
      </BlogsHeader>
      <Blog>
        <BlogImage>
          <Image src={TestImage} alt="" />
        </BlogImage>
        <BlogContent>
          {/* /blog/:slug */}
          <Link href="/blog/Lorem-ipsum-dolor-sit-amet-consectetur">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            hic?
          </Link>
          <span>12/12/2022</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            dolore quisquam culpa odio omnis quia deserunt quidem adipisci vel
            incidunt tempora cupiditate cum provident quaerat accusantium
            dignissimos expedita eligendi, perspiciatis ipsum porro nostrum
            optio. Fugit, exercitationem. Ipsum a inventore quae architecto
            amet. Similique.
          </p>
        </BlogContent>
      </Blog>
      <BlogsList>
        <BlogItem>
          <BlogItemContent>
            <Link href="/">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                eum illum illo?
              </p>
            </Link>
            <BlogImageSmall>
              <Image src={TestImage} alt="" />
            </BlogImageSmall>
          </BlogItemContent>
          <BlogItemFooter>12/04/2022</BlogItemFooter>
        </BlogItem>
        <BlogItem>
          <BlogItemContent>
            <Link href="/">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                eum illum illo?
              </p>
            </Link>
            <BlogImageSmall>
              <Image src={TestImage} alt="" />
            </BlogImageSmall>
          </BlogItemContent>
          <BlogItemFooter>12/04/2022</BlogItemFooter>
        </BlogItem>
        <BlogItem>
          <BlogItemContent>
            <Link href="/">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                eum illum illo?
              </p>
            </Link>
            <BlogImageSmall>
              <Image src={TestImage} alt="" />
            </BlogImageSmall>
          </BlogItemContent>
          <BlogItemFooter>12/04/2022</BlogItemFooter>
        </BlogItem>
        <BlogItem>
          <BlogItemContent>
            <Link href="/">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                eum illum illo?
              </p>
            </Link>
            <BlogImageSmall>
              <Image src={TestImage} alt="" />
            </BlogImageSmall>
          </BlogItemContent>
          <BlogItemFooter>12/04/2022</BlogItemFooter>
        </BlogItem>
      </BlogsList>
    </StyledBlogsPrimary>
  );
};

export default BlogsPrimary;
