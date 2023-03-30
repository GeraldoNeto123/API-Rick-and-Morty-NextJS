import styled, { css } from "styled-components";

export const Main = styled.main``;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  position: relative;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .characters,
  .episodes,
  .locations {
    overflow: hidden;
    position: relative;
  }

  .characters {
    grid-row-end: 2;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .episodes {
    grid-row-end: 3;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .locations {
    grid-row-end: 3;
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .label-links {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

interface BackgroundLinksProps {
  page: "characters" | "episodes" | "locations";
}

export const BackgroundLinks = styled.div<BackgroundLinksProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: grayscale(100%);
  filter: brightness(0.5);
  cursor: pointer;
  transition: 0.6s;
  transition-duration: 0.6s;

  ${(props) => {
    if (props.page === "characters") {
      return css`
        background-image: url("/assets/characters.jpg");
      `;
    }

    if (props.page === "episodes") {
      return css`
        background-image: url("/assets/episodes.jpg");
      `;
    }

    if (props.page === "locations") {
      return css`
        background-image: url("/assets/locations.jpg");
      `;
    }

    return css``;
  }}

  &:hover {
    filter: grayscale(0);
    transform: scale(1.25);
    filter: brightness(0.5);
  }
`;
