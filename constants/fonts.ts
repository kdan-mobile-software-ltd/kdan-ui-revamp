import { css } from 'styled-components';

export const h1FontStyle = css`
  font-size: 56px;
  line-height: 70px;
`;
export const h2FontStyle = css`
  font-size: 48px;
  line-height: 62px;
`;
export const h3FontStyle = css`
  font-size: 36px;
  line-height: 49px;
`;
export const h4FontStyle = css`
  font-size: 32px;
  line-height: 43px; 
`;
export const h5FontStyle = css`
  font-size: 28px;
  line-height: 38px;
`;
export const h6FontStyle = css`
  font-size: 26px;
  line-height: 35px;
`;
export const h7FontStyle = css`
  font-size: 22px;
  line-height: 30px;
`;
export const h8FontStyle = css`
  font-size: 18px;
  line-height: 24px;
`;
export const h9FontStyle = css`
  font-size: 16px;
  line-height: 22px;
`;

export const body1FontStyle = css`
  font-size: 24px;
  line-height: 1.2; // 待定
`;
export const body2FontStyle = css`
  font-size: 20px;
`;
export const body3FontStyle = css`
  font-size: 18px;
  line-height: 28px;
`;
export const body4FontStyle = css`
  font-size: 16px;
  line-height: 24px;
`;
export const body5FontStyle = css`
  font-size: 14px;
  line-height: 20px;
`;
export const caption1FontStyle = css`
  font-size: 12px;
`;

export const button1FontStyle = css`
  font-size: 22px;
  line-height: 1.2; // 待定
`;
export const button2FontStyle = css`
  font-size: 20px;
  line-height: 1.2;
`;
export const button3FontStyle = css`
  font-size: 16px;
  line-height: 1.2;
`;
export const button4FontStyle = css`
  font-size: 14px;
  line-height: 1.2;
`;

export const FONT_SIZE = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h7',
  h8: 'h8',
  h9: 'h9',
  body1: 'body1',
  body2: 'body2',
  body3: 'body3',
  body4: 'body4',
  body5: 'body5',
  caption1: 'caption1',
  button1: 'button1',
  button2: 'button2',
  button3: 'button3',
  button4: 'button4',
} as const;

export type FontSize = keyof typeof FONT_SIZE;
