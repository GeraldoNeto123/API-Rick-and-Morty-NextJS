import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.gray700};
  z-index: 1;
`;

export const Wrapper = styled.div`
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${({ theme }) => theme.green300};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`;
