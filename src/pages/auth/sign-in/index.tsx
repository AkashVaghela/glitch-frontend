import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  ImageContainer,
  FormContainer,
  InputContainer,
} from "../../../styles/pages/sign-up.styles";
import TestImage from "@/assets/test.jpg";
import MailIcon from "@/assets/mail.svg";
import PasswordIcon from "@/assets/password.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <ImageContainer signInPage="true">
        <Image src={TestImage} alt="" priority />
        <p>
          Lorem, ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Tenetur corrupti quis consequuntur.
        </p>
      </ImageContainer>
      <FormContainer signInPage="true">
        <h1>welcome back</h1>
        <InputContainer>
          <Image src={MailIcon} alt="" />
          <input type="email" placeholder="enter email" required />
        </InputContainer>
        <InputContainer>
          <Image src={PasswordIcon} alt="" />
          <input type="password" placeholder="enter password" required />
        </InputContainer>
        <p>
          <Link href="/auth/forgot-password">forgot password?</Link>
        </p>
        <button type="submit">sign in</button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
