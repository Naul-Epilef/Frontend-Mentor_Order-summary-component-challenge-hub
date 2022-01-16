import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-pale: hsl(225, 100%, 94%);
    --blue-bright: hsl(245, 75%, 52%);

    --blue-very-pale: hsl(225, 100%, 98%);
    --blue-desaturated: hsl(224, 23%, 55%);
    --blue-dark: hsl(223, 47%, 23%);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Red Hat Display', sans-serif;
  }

  body {
    background-image: url("/media/svgs/pattern-background-desktop.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--blue-pale);
  }

  @media (max-width: 375px) {
    body {
      background-image: url("/media/svgs/pattern-background-mobile.svg");
      background-repeat:no-repeat;
      background-size:contain
    }
  }
`;

export default GlobalStyle;
