import styled from "styled-components";

const FormContainer = styled.div`
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

  input:is([type="password"]) {
    width: 100%;
    padding: 1rem;
    border-radius: .4rem;
    background: transparent;
    border: 1px solid #a3a3a3;
    padding-right: 4rem;
  }
  input:is([type="password"])::placeholder {
    color: #737373;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  img {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
`;

export { FormContainer, InputContainer };