import styled from "styled-components";

interface LayoutProps {
  signInPage?: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  align-items: center;
  gap: 1.6rem;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    gap: 0;
    height: auto;
  }
`;

const ImageContainer = styled.div<LayoutProps>`
  grid-column: ${(props) => (props.signInPage === "true" ? "6/-1" : "1/8")};
  grid-row: ${(props) => props.signInPage === "true" && "1/-1"};
  height: 100%;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: 900;
    width: 75%;
    color: #fafafa;
    line-height: 1.1;
    padding: 1rem;

    @media only screen and (max-width: 768px) {
      font-size: 3.2rem;
    }

    @media only screen and (max-width: 425px) {
      font-size: 2.4rem;
      width: 90%;
    }

    span {
      color: #22c55e;
      text-decoration: underline;
    }
  }
`;

const FormContainer = styled.form<LayoutProps>`
  grid-column: ${(props) => (props.signInPage === "true" ? "2/5" : "9/12")};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media only screen and (max-width: 768px) {
    grid-column: 4 / 10;
    margin: 3.2rem 0;
  }

  @media only screen and (max-width: 425px) {
    grid-column: 1 / 13;
    margin-inline: 1.6rem;
  }

  h1 {
    text-transform: capitalize;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  button[type="submit"] {
    padding: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #fafafa;
    background: #0a0a0a;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  button[disabled] {
    opacity: .8;
    cursor: not-allowed;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: capitalize;
    text-align: center;

    a:link,
    a:visited {
      color: #22c55e;
      font-weight: 600;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;

  input:is([type="text"], [type="email"], [type="password"]) {
    width: 100%;
    padding: 1rem 1rem 1rem 4rem;
    border-radius: 0.4rem;
    background: transparent;
    border: 1px solid #a3a3a3;
    color: #737373;
    font-size: 1.3rem;
  }

  input:is([type="text"], [type="email"], [type="password"])::placeholder {
    color: #737373;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  img {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  img {
    @media only screen and (max-width: 425px) {
      width: 2rem;
    }
  }
`;

const ErrorContainer = styled.div`
  color: #dc2626;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export { Container, ImageContainer, FormContainer, InputContainer, ErrorContainer };
