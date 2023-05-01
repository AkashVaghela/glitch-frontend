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
import UserIcon from "@/assets/user.svg";
import MailIcon from "@/assets/mail.svg";
import PasswordIcon from "@/assets/password.svg";
import { SignUpType, ErrorType } from "@/types";
import { validateUsername, validateEmail } from "@/utils";

const SignUp: React.FC = () => {
  const [user, setUser] = useState<SignUpType>({
    username: "",
    email: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const [emailError, setEmailError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const [passwordError, setPasswordError] = useState<ErrorType>({
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
    const { username, email, password } = user;

    // validations & errors
    if (!username || !email || !password) return;
    const enteredUsername = username.trim();
    const enteredEmail = username.trim();
    const enteredPassword = username.trim();

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

    if (enteredEmail.length > 32) {
      setEmailError({
        ...emailError,
        showError: true,
        errorMessage: "email must be less than 32 characters",
      });
    }

    if (!validateEmail(enteredEmail)) {
      setEmailError({
        ...emailError,
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

  return (
    <Container>
      <ImageContainer>
        <Image src={TestImage} alt="" priority />
        <p>
          Lorem, ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Tenetur corrupti quis consequuntur.
        </p>
      </ImageContainer>
      <FormContainer onSubmit={submitHandler}>
        <h1>start empowreing now</h1>
        <InputContainer>
          <Image src={UserIcon} alt="" />
          <input
            type="text"
            placeholder="enter username"
            maxLength={32}
            name="username"
            value={user.username}
            autoFocus
            required
            aria-placeholder="enter username"
            aria-required={true}
            aria-valuemax={32}
            onChange={changeHandler}
          />
        </InputContainer>

        {usernameError.showError && (
          <ErrorContainer>{usernameError.errorMessage}</ErrorContainer>
        )}

        <InputContainer>
          <Image src={MailIcon} alt="" />
          <input
            type="email"
            placeholder="enter email"
            maxLength={32}
            name="email"
            value={user.email}
            required
            aria-placeholder="enter email"
            aria-required={true}
            aria-valuemax={32}
            onChange={changeHandler}
          />
        </InputContainer>

        {emailError.showError && (
          <ErrorContainer>{emailError.errorMessage}</ErrorContainer>
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
          already have account? <Link href="/auth/sign-in">sign in</Link>
        </p>

        <button type="submit">sign up</button>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
