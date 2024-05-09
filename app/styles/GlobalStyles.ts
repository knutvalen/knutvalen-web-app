import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    position: relative;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  
  /* Theme */
  
  body {
    --shadow-color: 0 0% 20%;
    background-color: ${(props) => props.theme.colors.white};

    @media ${(props) => props.theme.queries.prefersDarkTheme} {
      --shadow-color: 0 0% 0%;
      background-color: ${(props) => props.theme.colors.black};
    }
  }
  
  html {
    font-family: var(--font-inter);
    scrollbar-width: thin;
    scrollbar-color: 
      ${(props) => props.theme.colors.grey[600]}
      ${(props) => props.theme.colors.grey[100]};

    @media ${(props) => props.theme.queries.prefersDarkTheme} {
      scrollbar-color: 
        ${(props) => props.theme.colors.grey[400]}
        ${(props) => props.theme.colors.grey[800]};
    }
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: ${(props) => props.theme.colors.grey[600]};
    border: 2px solid ${(props) => props.theme.colors.grey[100]};
    
    @media ${(props) => props.theme.queries.prefersDarkTheme} {
      background-color: ${(props) => props.theme.colors.grey[400]};
      border: 2px solid ${(props) => props.theme.colors.grey[800]};
    }
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${(props) => props.theme.colors.grey[100]};

    @media ${(props) => props.theme.queries.prefersDarkTheme} {
      background-color: ${(props) => props.theme.colors.grey[800]};
    }
  }
`;
