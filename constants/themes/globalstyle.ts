import { createGlobalStyle, css } from 'styled-components';
import { KDAN_S3_STORAGE } from '../config';

const resetCss = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export const GlobalStyles = createGlobalStyle`
 ${resetCss}

 * {
    box-sizing: border-box;
 }
 
 body:lang(en) {
    font-family: 'Clear Sans', sans-serif;
  }
  body:lang(zh-tw) {
    font-family: 'Noto Sans TC', sans-serif;
  }
  body:lang(zh-cn) {
    font-family: 'Noto Sans SC', sans-serif;
  }
  body:lang(ja) {
    font-family: 'Noto Sans JP', sans-serif;
  }
  body:lang(es),
  body:lang(ko) {
    font-family: 'Open Sans', sans-serif;
  }

  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Regular.woff2);
  }
  
  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Medium.woff2);
  }
  
  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Bold.woff2);
  }
`;
