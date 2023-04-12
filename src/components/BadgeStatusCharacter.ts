import styled from "styled-components";

interface BadgeProps {
  status: "Alive" | "Dead" | "unknown";
}
export default styled.span<BadgeProps>`
  /* position: absolute;
  top: 0;
  right: 0; */
  font-weight: 500;
  font-size: 0.7rem;
  padding: 4px;
  color: #fff;
  background: ${({ status, theme }) =>
    status === "Alive"
      ? theme.success
      : status === "Dead"
      ? theme.danger
      : theme.warning};
`;
