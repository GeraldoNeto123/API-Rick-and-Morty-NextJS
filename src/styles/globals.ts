import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --amarelo: #FFE132;
    --azul: #0047FF;
    --preto: #4C4637;
    --offWhite: #f8f8f8;
    --primary: #0047FF;
    --secondary: #FFE132;
    --danger: #EC1C1C;
    --success: #58CC02;
    --primary-light: #305fb8;
    --cinza: #E3DDCB;
  }
  
  html, body, #__next  {
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  } 
  
  #__next {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
    height: 100%;
    
    color: var(--preto);
    -webkit-font-smoothing: antialiased !important;
    font-size: 93.75%; //15px

    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
    

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

    [disabled]{
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

    .align-items-center {
      display: flex;
      align-items: center;
    }

    .border-radius-right {
      border-radius: 0 5px 5px 0;
    }

    .border-radius-left {
      border-radius: 5px 0 0 5px;
    }

    .border-radius {
      border-radius: 5px;
    }

    .pb-2 {
      padding-bottom: 2rem;
    }

    .pb-3 {
      padding-bottom: 3rem;
    }

    .form-control {      
      .border-dark {
        border: 1px solid var(--preto);
      }
    }

    .border-dark {
      border: 1px solid $darkPrimary;
    }

    .form-control:focus {
      background: #ffffff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 1px solid var(--amarelo);
      box-sizing: border-box;
    }

    .form-default {
      height: 50px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }

    .shadow-default {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .shadow-default:hover {
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
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
  }
`;
