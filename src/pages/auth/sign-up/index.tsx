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
import UserIcon from "@/assets/user.svg";
import MailIcon from "@/assets/mail.svg";
import PasswordIcon from "@/assets/password.svg";

const SignUp: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={TestImage} alt="" priority />
        <p>
          Lorem, ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Tenetur corrupti quis consequuntur.
        </p>
      </ImageContainer>
      <FormContainer>
        <h1>start empowreing now</h1>
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
        <button type="submit">sign up</button>
        <p>
          already have account? <Link href="/auth/sign-in">sign in</Link>
        </p>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
