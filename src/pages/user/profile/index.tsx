import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../../_app";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { FormContainer, InputContainer } from "./profile.styles";
import UserIcon from "@/assets/user.svg";
import MailIcon from "@/assets/mail.svg";
import PasswordIcon from "@/assets/password.svg";

const Profile: NextPageWithLayout = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Image src={UserIcon} alt="" />
        <input type="text" placeholder="enter username" required />
      </InputContainer>
      <InputContainer>
        <Image src={MailIcon} alt="" />
        <input type="email" placeholder="enter email" required />
      </InputContainer>
      <InputContainer>
        <Image src={PasswordIcon} alt="" />
        <input type="password" placeholder="enter password" required />
      </InputContainer>
      <button type="submit">save</button>
    </FormContainer>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
