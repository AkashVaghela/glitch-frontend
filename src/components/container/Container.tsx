import React, { ReactNode } from "react";
import { Container as StyledContainer } from "./container.styles";

interface Props {
  children?: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
