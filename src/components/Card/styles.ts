import styled, { css } from "styled-components";

export const Container = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 6px;
  text-align: left;
  padding: 1rem;
  position: relative;
  & + & {
    margin-top: 1rem;
  }

  .product-link {
    transition: .6s;
    &:hover {
    transform: scale(1.03);
  }

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    position: relative;

    .infos {
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
    }
  }

  @media (max-width: 720px) {
    .container-image {
      width: 100%;
      text-align: center;
    }
  }
`;

interface BadgeProps {
  status: "Alive" | "Dead" | "unknown";
}
export const Badge = styled.span<BadgeProps>`
  /* position: absolute;
  top: 0;
  right: 0; */
  font-weight: 500;
  font-size: 0.7rem;
  padding: 4px;
  color: #fff;
  background: ${({ status }) =>
    status === "Alive" ? "#28a745" : status === "Dead" ? "#dc3545" : "#ffc107"};
`;

export const ContainerFavorite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
