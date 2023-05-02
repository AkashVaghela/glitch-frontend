import Image from "@/assets/test.jpg";

const primaryBlog = {
  imageUrl: Image,
  slug: "test-slug",
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic?",
  date: "12/23/3233",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impeditdolore quisquam culpa odio omnis quia deserunt quidem adipisci velincidunt tempora cupiditate cum provident quaerat accusantium dignissimos expedita eligendi, perspiciatis ipsum porro nostrumoptio. Fugit, exercitationem. Ipsum a inventore quae architectoamet. Similique.",
};

const secondaryBlogs = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quodeum illum illo?",
    slug: "test-slug",
    imageUrl: Image,
    date: "12/23/3233",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quodeum illum illo?",
    slug: "test-slug",
    imageUrl: Image,
    date: "12/23/3233",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quodeum illum illo?",
    slug: "test-slug",
    imageUrl: Image,
    date: "12/23/3233",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quodeum illum illo?",
    slug: "test-slug",
    imageUrl: Image,
    date: "12/23/3233",
  },
];

const navbar = [
  {
    id: 1,
    category: "frontend",
  },
  {
    id: 2,
    category: "backend",
  },
  {
    id: 3,
    category: "ai",
  },
  {
    id: 4,
    category: "devops",
  },
  {
    id: 5,
    category: "career",
  },
];

const blog = {};

export { primaryBlog, secondaryBlogs, navbar, blog };
