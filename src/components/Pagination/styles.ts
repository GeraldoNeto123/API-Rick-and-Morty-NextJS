import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;

  ul li {
    list-style: none !important;
  }
  .pagination {
    display: flex;
    gap: 0.7rem;
    .item-active {
      background: ${({ theme }) => theme.green300};
      a {
        color: ${({ theme }) => theme.white} !important;
      }
    }
  }
`;
