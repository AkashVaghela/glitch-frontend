import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  ImageContainer,
  FormContainer,
  InputContainer,
  ErrorContainer,
} from "@/styles/pages/sign-up.styles";
import TestImage from "@/assets/test.jpg";
import MailIcon from "@/assets/mail.svg";
import PasswordIcon from "@/assets/password.svg";
import { ErrorType, SignInType } from "@/types";
import { validateEmail } from "@/utils";

const SignIn: React.FC = () => {
  const [user, setUser] = useState<SignInType>({
    identifier: "",
    password: "",
  });

  const [identifierError, setIdentifierError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const [passwordError, setPasswordError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    const { identifier, password } = user;

    // validations & errors
    if (!identifier || !password) return;
    const enteredEmail = identifier.trim();
    const enteredPassword = password.trim();

    if (enteredEmail.length > 32) {
      setIdentifierError({
        ...identifierError,
        showError: true,
        errorMessage: "email must be less than 32 characters",
      });
    }

    if (!validateEmail(enteredEmail)) {
      setIdentifierError({
        ...identifierError,
        showError: true,
        errorMessage: "please enter a valid email.",
      });
    }

    if (enteredPassword.length < 8) {
      setPasswordError({
        ...passwordError,
        showError: true,
        errorMessage: "password must contain 8 characters",
      });
    }

    if (enteredPassword.length > 32) {
      setPasswordError({
        ...passwordError,
        showError: true,
        errorMessage: "password must be less than 32 characters",
      });
    }

    // api call

    // clear form
  };

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container>
      <ImageContainer signInPage="true">
        <Image src={TestImage} alt="" priority />
        <p>
          Lorem, ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Tenetur corrupti quis consequuntur.
        </p>
      </ImageContainer>
      <FormContainer signInPage="true" onSubmit={submitHandler}>
        <h1>welcome back</h1>
        <InputContainer>
          <Image src={MailIcon} alt="" />
          <input
            type="email"
            placeholder="enter email"
            maxLength={32}
            name="identifier"
            value={user.identifier}
            autoFocus
            required
            aria-placeholder="enter email"
            aria-required={true}
            onChange={changeHandler}
          />
        </InputContainer>

        {identifierError.showError && (
          <ErrorContainer>{identifierError.errorMessage}</ErrorContainer>
        )}

        <InputContainer>
          <Image src={PasswordIcon} alt="" />
          <input
            type="password"
            placeholder="enter password"
            minLength={8}
            maxLength={32}
            name="password"
            value={user.password}
            required
            aria-placeholder="enter password"
            aria-required={true}
            aria-valuemin={8}
            aria-valuemax={32}
            onChange={changeHandler}
          />
        </InputContainer>

        {passwordError.showError && (
          <ErrorContainer>{passwordError.errorMessage}</ErrorContainer>
        )}

        <p>
          <Link href="/auth/forgot-password">forgot password?</Link>
        </p>
        <button type="submit">sign in</button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
