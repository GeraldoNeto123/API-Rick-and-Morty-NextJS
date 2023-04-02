import styled, { css } from "styled-components";

interface ButtonProps {
  favorite: boolean;
}
export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  background: transparent;
  transition: .6s;
  &:hover {
    transform: scale(1.5);
  }

  svg {
    height: 24px;
    width: 24px;
    path {
      fill: ${({ favorite }) => (favorite ? "var(--danger)" : "var(--cinza)")};
    }
  }
`;
