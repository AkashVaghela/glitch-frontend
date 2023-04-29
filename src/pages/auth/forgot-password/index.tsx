import React from "react";
import Image from "next/image";
import MailIcon from "@/assets/mail.svg";
import {
  FormContainer,
  InputContainer,
} from "../../../styles/pages/forgot-password.styles";

const ForgotPassword = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Image src={MailIcon} alt="" />
        <input type="email" placeholder="enter email" required />
      </InputContainer>
      <button type="submit">submit</button>
    </FormContainer>
  );
};

export default ForgotPassword;
