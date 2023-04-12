import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  } 

  html{
    /* font-size: 93.75%; //15px */

    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
  }
  
  html, body, #__next{
    height: 100%;
    background-color: ${({ theme }) => theme.black400};
  }
  
  #__next {      
    height: auto;
    color: ${({ theme }) => theme.white};

    -webkit-font-smoothing: antialiased !important;
        
    a{
      color: inherit;
      text-decoration: none;
      &:hover{
        color: inherit;
      }
    }

    ul,
    ol {
      padding-left: 0px;
    }
    ul li {
      list-style: initial;
      list-style-position: inside;
    }
    ol li {
      list-style: decimal;
      list-style-position: inside;
    }
    img, video{
      max-width: 100%;
      height: auto;
    }

    [disabled],
    .disabled {
      opacity: 0.6;
      cursor: not-allowed !important;
    }

    .btn {
      font-weight: 600;
      vertical-align: center !important;
      font-size: 1rem;
      border: none;
      padding: 1rem;
      border-radius: 4px;
      transition: 0.2s;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      /* height: 50px; */
      cursor: pointer;

      &:hover{
        filter: brightness(0.9);
      }
    }
    
    .shadow-default {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .shadow-default:hover {
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    }   

    .border-radius {
      border-radius: 5px;
    }

    .animate-pulse{
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: .5;
        }
      }
    }

    .container{
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  }
`;
