import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1.6rem repeat(12, 1fr) 1.6rem;
  gap: 1.6rem;

  @media only screen and (max-width: 768px) {
    gap: 0.8rem;
  }
`;
