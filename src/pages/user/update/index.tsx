import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import {
  FormContainer,
  InputContainer,
  GoBackButton,
  PageContainer,
} from "@/styles/pages/update.styles";
import UserIcon from "@/assets/user.svg";
import LeftIcon from "@/assets/left.svg";
import { useRouter } from "next/router";
import { ErrorType } from "@/types";
import { validateUsername } from "@/utils";

const Profile: NextPageWithLayout = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "akash vaghela",
  });

  const [usernameError, setUsernameError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const { username } = user;

    // validations & errors
    if (!username) return;
    const enteredUsername = username.trim();

    if (enteredUsername.length > 32) {
      setUsernameError({
        ...usernameError,
        showError: true,
        errorMessage: "username must be less than 32 characters",
      });
    }

    if (!validateUsername(enteredUsername)) {
      setUsernameError({
        ...usernameError,
        showError: true,
        errorMessage: "please enter a valid username.",
      });
    }

    // api call

    // clear form
  };

  return (
    <PageContainer>
      <GoBackButton onClick={() => router.back()}>
        <Image src={LeftIcon} alt="" />
        go back
      </GoBackButton>

      <FormContainer onSubmit={submitHandler}>
        <InputContainer>
          <Image src={UserIcon} alt="" />
          <input
            type="text"
            placeholder={user.username}
            maxLength={32}
            name="username"
            value={user.username}
            autoFocus
            required
            aria-placeholder={user.username}
            aria-required={true}
            aria-valuemax={32}
            onChange={changeHandler}
          />
        </InputContainer>
        <button type="submit">save</button>
      </FormContainer>
    </PageContainer>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
