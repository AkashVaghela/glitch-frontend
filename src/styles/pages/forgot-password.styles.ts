import styled from "styled-components";

const FormContainer = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: clamp(20%, 300px, 90%);
  margin-inline: auto;

  button[type="submit"] {
    width: 100%;
    padding: .8rem;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #fafafa;
    background: #0a0a0a;
    border: none;
    border-radius: .4rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  input:is([type="email"]) {
    width: 100%;
    padding: 1rem 1rem 1rem 4rem;
    border-radius: .4rem;
    background: transparent;
    border: 1px solid #a3a3a3;
    color: #737373;
    font-size: 1.3rem;
  }
  
  input:is([type="email"])::placeholder {
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

export { FormContainer, InputContainer, ErrorContainer };