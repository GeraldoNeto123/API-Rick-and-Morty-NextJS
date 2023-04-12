import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  margin-top: 94px !important;
  padding-bottom: 4rem !important;
  padding-top: 1rem !important;

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
export const FormSearchName = styled.form`
  display: flex;
  width: 100%;
  gap: 3rem;
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
