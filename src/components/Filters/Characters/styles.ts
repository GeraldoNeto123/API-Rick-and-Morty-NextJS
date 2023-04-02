import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid var(--cinza);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface OptionProps {
  active: boolean;
}
export const Option = styled.button<OptionProps>`
  ${({ active }) => (active ? css`
    background: var(--primary);
    color: #fff;
  ` : "")}
`;
