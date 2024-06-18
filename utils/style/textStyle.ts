import { FlattenSimpleInterpolation, css } from 'styled-components';
import * as fonts from '@/constants/fonts';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import {
  ColorPropsType, DisplayPropsType, FontSizePropsType, FontWeightPropsType, MarginPropsType,
  PaddingPropsType, TextAlignPropsType,
} from '@/constants/types/styled';
import { getCustomColorFromTheme } from '../style';

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
  button1: fonts.button1FontStyle,
  button2: fonts.button2FontStyle,
  button3: fonts.button3FontStyle,
  button4: fonts.button4FontStyle,
};

export type TextCustomCssProps = FontSizePropsType & FontWeightPropsType &
ColorPropsType & PaddingPropsType & MarginPropsType & TextAlignPropsType & DisplayPropsType;

export const textCustomCss = css<TextCustomCssProps>`
  ${({ fontSize = ({ default: 'button1' }) }) => Object.entries(fontSize).map(([breakpoint, size]) => (
    breakpoint === 'default'
      ? styleTypeMap[size]
      // do not add styled's "css" before "`" in order to concat string correctly in below line
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
        ${styleTypeMap[size]}
        }`
  )).join(' ')}
  color: ${({ color = 'black' }) => getCustomColorFromTheme(color)};
  ${({ padding }) => padding && css`padding: ${padding};`}
  ${({ margin }) => margin && css`margin: ${margin};`}
  ${({ textAlign }) => textAlign && css`text-align: ${textAlign};`}
  ${({ fontWeight }) => fontWeight && css`font-weight: ${fontWeight};`}
  ${({ display }) => display && css`display: ${display};`}
`;
