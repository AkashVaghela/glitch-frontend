import Image from "next/image";
import {
  FormContainer,
  InputContainer,
  ErrorContainer,
} from "@/styles/pages/reset-password.styles";
import HideIcon from "@/assets/hide.svg";
import { useState } from "react";
import { ErrorType, ResetPasswordType } from "@/types";

const ResetPassword = () => {
  const [user, setUser] = useState<ResetPasswordType>({
    password: "",
    passwordConfirmation: "",
  });

  const [passwordError, setPasswordError] = useState<ErrorType>({
    showError: false,
    errorMessage: "",
  });

  const [confirmedPasswordError, setConfirmedPasswordError] =
    useState<ErrorType>({
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
    const { password, passwordConfirmation } = user;

    // // validations & errors
    if (!password || !passwordConfirmation) return;
    const enteredPassword = password.trim();
    const enteredConfirmedPassword = passwordConfirmation.trim();

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

    if (enteredPassword !== enteredConfirmedPassword) {
      setConfirmedPasswordError({
        ...confirmedPasswordError,
        showError: true,
        errorMessage: "passwords do not match",
      });
    }

    // api call

    // clear form
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <InputContainer>
        <Image src={HideIcon} alt="" />
        <input
          type="password"
          placeholder="enter new password"
          minLength={8}
          maxLength={32}
          name="password"
          value={user.password}
          required
          aria-placeholder="enter new password"
          aria-required={true}
          aria-valuemin={8}
          aria-valuemax={32}
          onChange={changeHandler}
        />
      </InputContainer>

      {passwordError.showError && (
        <ErrorContainer>{passwordError.errorMessage}</ErrorContainer>
      )}

      <InputContainer>
        <Image src={HideIcon} alt="" />
        <input
          type="password"
          placeholder="confirm entered password"
          minLength={8}
          maxLength={32}
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          required
          aria-placeholder="confirm entered password"
          aria-required={true}
          aria-valuemin={8}
          aria-valuemax={32}
          onChange={changeHandler}
        />
      </InputContainer>

      {confirmedPasswordError.showError && (
        <ErrorContainer>{confirmedPasswordError.errorMessage}</ErrorContainer>
      )}

      <button type="submit">submit</button>
    </FormContainer>
  );
};

export default ResetPassword;
