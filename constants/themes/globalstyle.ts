import { createGlobalStyle, css } from 'styled-components';

export const resetCss = css`
html, body, div, span,
h1, h2, h3, h4, h5, h6, p, a, 
ol, ul, li, form, button
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  padding-inline: 0;
  padding-block: 0;

  &:focus {
    outline: none;
    outline-width: 0;
  }
}
button {
  background-color: transparent;
}

/* HTML5 display-role reset for older browsers */
section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
`;

export const GlobalStyles = createGlobalStyle`
 ${resetCss}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: inherit;
  }
`;
