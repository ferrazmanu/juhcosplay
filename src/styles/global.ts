import { createGlobalStyle } from 'styled-components';

import bgImage from '../assets/images/padme.jpeg';

const GlobalStyle = createGlobalStyle`
    html{
      min-height: 100dvh;

      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #ffe6e6;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #620000;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
   }

   #root{
       margin:0 auto;
       min-height: 100dvh;
   }

    input, button, select, textarea{
        background-color: transparent;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.small_14};

    }

    button{
      cursor: pointer;
    }

   a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
   }

   ul, li{
    list-style: none;
   }

   h1, h2, h3, h4, h5, h6{
    text-transform: uppercase;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.primary};
   }

  body {
    margin: 0 !important;
    font-family: ${({ theme }) => theme.fonts.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.white};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url(${bgImage});
    min-height: 100dvh;
    backdrop-filter: blur(15px);
    position: relative;

    &::after{
      content: '';
      background: linear-gradient(0deg, rgba(255, 255, 255, 0) 60%, rgba(201, 35, 35, 1) 100%);
      height: 100%;
      width: 100%;
      display: flex;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }

  .error{
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    color:red;
    display: block;
  }

`;

export default GlobalStyle;
