import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.gray400};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface OptionProps {
  active: boolean;
}
export const Option = styled.button<OptionProps>`
  ${({ active }) =>
    active
      ? css`
          background: ${({ theme }) => theme.green300};
          color: ${({ theme }) => theme.white};
        `
      : ""}
`;
