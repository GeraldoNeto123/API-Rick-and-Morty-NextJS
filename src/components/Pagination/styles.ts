import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;

  ul li {
    list-style: none !important;
  }
  .pagination {
    display: flex;
    gap: .7rem;
    .item-active {
      background: var(--primary);
      a {
        color: #fff !important;
      }
    }
  }
`;
