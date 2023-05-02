import styled from "styled-components";

const PageContainer = styled.div`
  width: clamp(20%, 300px, 90%);
  margin-inline: auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: clamp(20%, 300px, 90%);
  margin-inline: auto;
  margin-bottom: 3.2rem;

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

  input:is([type="text"], [type="email"], [type="password"]) {
    width: 100%;
    padding: 1rem;
    border-radius: .4rem;
    background: transparent;
    border: 1px solid #a3a3a3;
    padding-left: 4rem;
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

const GoBackButton = styled.button`
  border: none;
  padding: 1rem;  
  margin-bottom: 1.6rem;
  margin-left: 1.5rem;
`;

export { PageContainer, FormContainer, InputContainer, GoBackButton };