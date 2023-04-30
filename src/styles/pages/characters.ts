import styled from "styled-components";

export const Container = styled.div` 
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "aside main";
  gap: 1rem;

  @media (max-width: 720px) {
    margin-top: 140px !important;
    grid-template-areas: "main main";
  }
`;


export const Aside = styled.aside`
  grid-area: aside;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Main = styled.div`
  grid-area: main;
`;
