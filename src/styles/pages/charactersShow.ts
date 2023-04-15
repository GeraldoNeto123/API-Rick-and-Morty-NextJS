import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  margin-top: 84px !important;
  padding-bottom: 4rem !important;
  padding-top: 1rem !important;

  @media (max-width: 720px) {
    margin-top: 140px !important;
  }
`;

export const Wrapper = styled.div`
  .name {
    margin: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
  p + p {
    padding-top: 1rem;
  }
  .container-image {
    text-align: center;
    position: relative;
    .container-favorite {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
`;
