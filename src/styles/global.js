import { createGlobalStyle } from "styled-components";

import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratSemibold from "../assets/fonts/Montserrat-SemiBold.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import OpenSansRegular from "../assets/fonts/OpenSans-Regular.ttf";
import OpenSansSemiBold from "../assets/fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "../assets/fonts/OpenSans-Bold.ttf";
import { fonts, colors } from "./vars";

export default createGlobalStyle`

@font-face {
    font-family: 'Montserrat';
    src:  url(${MontserratMedium});
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }
@font-face {
    font-family: 'Montserrat';
    src:  url(${MontserratSemibold});
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
@font-face {
    font-family: 'Montserrat';
    src:  url(${MontserratBold});
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
@font-face {
    font-family: 'OpenSans';
    src:  url(${OpenSansRegular});
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
@font-face {
    font-family: 'OpenSans';
    src:  url(${OpenSansSemiBold});
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
@font-face {
    font-family: 'OpenSans';
    src:  url(${OpenSansBold});
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    scrollbar-width: none;
    -webkit-font-smoothing: antialiased;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html, body {
    min-height: 100vh;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  a, button {
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: none;
    cursor: pointer;
  }


  // iOS fix
  button[type="submit"] {
    font-weight: 400 !important;
  }

  input, textarea {
    &[readonly] {
      cursor: default;
    }

    &::placeholder {
      transition: opacity var(--transition);
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  textarea {
    resize: none;
  }

  fieldset {
    border: none;
  }



  img {
    vertical-align: top;
    max-width: 100%;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  body {
    font-family: ${fonts.opensans};
    font-size: 1rem;
    font-weight: 500;
    background-color: ${colors.backgroundColor};
    color: ${colors.textColor};
  }

  html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}


`;
