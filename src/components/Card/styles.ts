import styled, { css } from "styled-components";

export const Container = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 6px;
  text-align: left;
  padding: 1rem;

  & + & {
    margin-top: 1rem;
  }

  .product-link {
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
        font-size: 1.25rem;
        font-weight: 700;
      }
      p + p {
        padding-top: 1rem;
      }
    }
  }
`;

interface BadgeProps {
  status: "Alive" | "Dead" | "unknown";
}
export const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 500;
  font-size: 0.8rem;
  padding: 4px;
  color: #fff;
  background: ${({ status }) =>
    status === "Alive" ? "#28a745" : status === "Dead" ? "#dc3545" : "#ffc107"};
`;
