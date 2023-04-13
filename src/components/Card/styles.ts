import styled, { css } from "styled-components";
interface ContainerProps {
  status: "Alive" | "Dead" | "unknown";
}

export const Container = styled.div<ContainerProps>`
  border-radius: 6px;
  text-align: left;
  position: relative;
  & + & {
    margin-top: 2rem;
  }
  box-shadow: 0px 5px 10px 0px
    ${({ status, theme }) =>
      status === "Alive"
        ? theme.greenAlpha300
        : status === "Dead"
        ? theme.redAlpha700
        : theme.yellow700};
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }

  .character-link {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    position: relative;
  }

  .container-image {
    position: relative;
    width: 160px;
    overflow: hidden;

    img {
      border-radius: 5px 0 0 5px;
      /* aspect-ratio: 16/9; */
      object-fit: cover;
    }
  }

  @media (max-width: 720px) {
    & + & {
      margin-top: 3rem;
    }
    .character-link {
      flex-wrap: wrap;
    }
    .container-image {
      height: 250px;
      width: 100%;
      img {
        border-radius: 5px 5px 0 0;
      }
    }
  }
`;

export const ContainerFavorite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Description = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 500;
  }
  .name {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
  p + p {
    padding-top: 1rem;
  }
`;
