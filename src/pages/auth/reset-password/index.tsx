import Image from "next/image";
import {
  FormContainer,
  InputContainer,
} from "../../../styles/pages/reset-password.styles";
import HideIcon from "@/assets/hide.svg";

const ResetPassword = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Image src={HideIcon} alt="" />
        <input type="password" placeholder="enter new password" required />
      </InputContainer>
      <InputContainer>
        <Image src={HideIcon} alt="" />
        <input type="password" placeholder="confirm password" required />
      </InputContainer>
      <button type="submit">submit</button>
    </FormContainer>
  );
};

export default ResetPassword;
