import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/Layout";
import { Container } from "@/components/container/container.styles";
import {
  Blog,
  BlogTitle,
  BlogHeader,
  BlogImage,
  BlogContent,
  BlogFooter,
  Recommendations,
  Icons,
  RecommendedBlog,
  RecommendedBlogImage,
  RecommendedBlogContent,
} from "./slug.styles";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import LinkIcon from "@/assets/link.svg";
import BookmarkIcon from "@/assets/bookmark.svg";
import LikeOutlineIcon from "@/assets/like-outline.svg";
import CommentsIcon from "@/assets/comments.svg";
import TestImage from "@/assets/test.jpg";

const Slug: NextPageWithLayout = () => {
  return (
    <Container>
      <Blog>
        <BlogTitle>
          Lorem ipsum dolor sit amet consectetur elit. Laudantium temporibus
          possimus repellendus!
        </BlogTitle>
        <BlogHeader>
          <span>23/23/2343</span>
          <Icons>
            <Image src={LinkedinIcon} alt="" />
            <Image src={TwitterIcon} alt="" />
            <Image src={LinkIcon} alt="" />
            <Image src={BookmarkIcon} alt="" />
          </Icons>
        </BlogHeader>
        <BlogImage>
          <Image src={TestImage} alt="" priority />
        </BlogImage>
        <BlogContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel hic
            expedita quis deserunt, in quisquam dolores architecto molestias
            esse voluptates repellendus sint nihil ipsum fugiat explicabo
            aspernatur quos voluptate. Error expedita vel deserunt quas culpa
            veniam omnis quisquam dolorum harum inventore reiciendis sequi
            impedit amet consequuntur deleniti in quam placeat, aliquam dicta
            iure aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni
            pariatur <strong>repellendus</strong> ipsum alias corrupti atque
            adipisci repellat est dolorem quos iure molestias consectetur maxime
            illum similique, nam qui minima, ad quas facere. Porro nulla vitae
            nobis voluptatem? Iure officia debitis nam repellendus architecto ex
            adipisci, ad aliquid vero eaque? Consectetur temporibus architecto
            inventore.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur facilis incidunt placeat deleniti praesentium doloremque
            laboriosam asperiores laudantium, fuga delectus odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            praesentium delectus iusto quidem quas dolor enim ipsam officia in
            velit? Excepturi, impedit quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            eveniet qui delectus necessitatibus labore aspernatur non nostrum,
            ullam ducimus magni mollitia pariatur quae voluptatum inventore
            minus odit quam aliquam impedit. Autem illum incidunt id fugit
            explicabo commodi quam blanditiis quo harum necessitatibus! Ea
            deserunt nobis eos, doloribus pariatur magni quaerat, quisquam, ab
            explicabo inventore earum necessitatibus.
          </p>
        </BlogContent>
        <BlogFooter>
          <div className="likes">
            <Image src={LikeOutlineIcon} alt="" />
            <span>23</span>
          </div>
          <div className="comments">
            <Image src={CommentsIcon} alt="" />
            <span>12</span>
          </div>
        </BlogFooter>
      </Blog>
      <Recommendations>
        <h2>Recommended for you</h2>
        <RecommendedBlog>
          <RecommendedBlogImage>
            <Image src={TestImage} alt="" />
          </RecommendedBlogImage>
          <RecommendedBlogContent>
            <span>12/12/1221</span>
            {/* /blog/test-slug */}
            <Link href="/blog/test-slug">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                maxime alias magnam.
              </p>
            </Link>
          </RecommendedBlogContent>
        </RecommendedBlog>
        <RecommendedBlog>
          <RecommendedBlogImage>
            <Image src={TestImage} alt="" />
          </RecommendedBlogImage>
          <RecommendedBlogContent>
            <span>12/12/1221</span>
            {/* /blog/test-slug */}
            <Link href="/blog/test-slug">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                maxime alias magnam.
              </p>
            </Link>
          </RecommendedBlogContent>
        </RecommendedBlog>
      </Recommendations>
    </Container>
  );
};

Slug.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Slug;
