import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/Layout";

const Slug: NextPageWithLayout = () => {
  return <div>Slug</div>;
};

Slug.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Slug;
