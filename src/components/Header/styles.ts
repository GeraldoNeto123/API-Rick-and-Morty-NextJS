import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--offWhite);
  z-index: 1;
`;

export const Wrapper = styled.div`
  background-color: var(--offWhite);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem 3rem;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;

  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`;
