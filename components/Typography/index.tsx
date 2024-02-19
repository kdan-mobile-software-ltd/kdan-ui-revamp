import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import * as fonts from '@/constants/fonts';
import {
  ColorPropsType, FontSizePropsType, MarginPropsType,
  PaddingPropsType, TextAlignPropsType, ThemePropsType,
} from '@/constants/types/styled';

import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

const styleTypeMap: Record<keyof typeof fonts.FONT_SIZE, FlattenSimpleInterpolation> = {
  h1: fonts.h1FontStyle,
  h2: fonts.h2FontStyle,
  h3: fonts.h3FontStyle,
  h4: fonts.h4FontStyle,
  h5: fonts.h5FontStyle,
  h6: fonts.h6FontStyle,
  h7: fonts.h7FontStyle,
  h8: fonts.h8FontStyle,
  h9: fonts.h9FontStyle,
  body1: fonts.body1FontStyle,
  body2: fonts.body2FontStyle,
  body3: fonts.body3FontStyle,
  body4: fonts.body4FontStyle,
  body5: fonts.body5FontStyle,
  caption1: fonts.caption1FontStyle,
};

export const Typography = styled.p<
ThemePropsType & FontSizePropsType &
ColorPropsType & PaddingPropsType & MarginPropsType & TextAlignPropsType
>`
  ${({ fontSize = fonts.FONT_SIZE.body1 }) => styleTypeMap[fontSize]}
  ${({ rwdFontSize = ({}) }) => Object.entries(rwdFontSize).map(([breakpoint, fontSize]) => (
    breakpoint === 'default'
      ? styleTypeMap[fontSize]
      // do not add styled's "css" before "`" in order to concat string correctly in below line
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
        ${styleTypeMap[fontSize]}
      }`)).join(' ')}
  color: ${({ color = 'black', theme }) => theme.colors?.[color] || color};
  ${({ padding }) => padding && css`padding: ${padding};`}
  ${({ margin }) => margin && css`margin: ${margin};`}
  ${({ textAlign = 'left' }) => css`text-align: ${textAlign};`}
  word-wrap: break-word;
`;

// todo: 看要不要就捨去 fontSize 都改用rwdFontSize設定尺寸就好，跟 freeSizeImage align
