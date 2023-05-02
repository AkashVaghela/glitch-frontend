import React, { useState } from "react";
import Image from "next/image";
import MailIcon from "@/assets/mail.svg";
import {
  FormContainer,
  InputContainer,
  ErrorContainer,
} from "@/styles/pages/forgot-password.styles";
import { ErrorType } from "@/types";
import { validateEmail } from "@/utils";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });
  const changeHandler = (e: any) => {
    const { value } = e.target;
    setEmail(value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    // validations & errors
    if (!email) return;
    const enteredEmail = email.trim();

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

    // api call

    // clear form
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <InputContainer>
        <Image src={MailIcon} alt="" />
        <input
          type="email"
          placeholder="enter email"
          maxLength={32}
          name="email"
          value={email}
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

      <button type="submit">submit</button>
    </FormContainer>
  );
};

export default ForgotPassword;
