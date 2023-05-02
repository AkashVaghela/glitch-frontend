import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { PageContainer, DetailsContainer } from "@/styles/pages/profile.styles";

const Profile: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <h1>my profile</h1>
      <DetailsContainer>
        <span>username</span>
        <p>akash vaghela</p>
      </DetailsContainer>
      <DetailsContainer>
        <span>email</span>
        <p datatype="email">akash.softrefine@gmail.com</p>
      </DetailsContainer>
      <Link href="/user/update">edit profile</Link>
    </PageContainer>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
