import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import * as fonts from '@/constants/fonts';
import { CustomThemeType } from '@/constants/themes';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { ThemePropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import { CustomColor } from '@/constants/themes/colors';
import { SizeLS } from '@/constants/types/global';
import { Variant, ButtonStyle, Corner } from './types';

const getVariantStyle = (
  variants: Variant,
  theme: CustomThemeType,
): FlattenSimpleInterpolation => {
  switch (variants) {
    case 'text': {
      return css`
        background-color: ${theme.colors.transparent};
        border-color: ${theme.colors.transparent};
      `;
    }
    case 'outlined': {
      return css`
        background-color: ${theme.colors.transparent};
        border-color: ${theme.colors.gray900};
        color: ${theme.colors.gray900};
      `;
    }
    case 'filled':
    default: {
      return css`
        background-color: ${theme.colors.gray900};
        border-color: ${theme.colors.gray900};
        color: ${theme.colors.white};
        `;
    }
  }
};

const getSizeStyle = (size: SizeLS): FlattenSimpleInterpolation => {
  switch (size) {
    case 'small': {
      return css`
        ${fonts.button3FontStyle}
        padding: 8px 20px;
      `;
    }
    case 'large':
    default: {
      return css`
        ${fonts.button1FontStyle}
        padding: 12px 24px;

        @media screen and (${MAX_WIDTH_QUERY.tablet}) {
          ${fonts.button3FontStyle}
          padding: 8px 20px;
        }
      `;
    }
  }
};

const getCornerStyle = (corner: Corner): FlattenSimpleInterpolation => {
  const radius = corner === 'round' ? '100px' : '4px';
  return css`
    border-radius: ${radius};
    ::after { 
      border-radius: ${radius};
    }
  `;
};

export const Icon = styled.img<{ size?: SizeLS }>`
  ${({ size = 'large' }) => {
    const isLarge = size === 'large';
    return css`
      margin-right:  ${isLarge ? '12px' : '8px'};
      width: ${isLarge ? '24px' : '20px'};
      height: ${isLarge ? '24px' : '20px'};
      
      @media screen and (${MAX_WIDTH_QUERY.tablet}) {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }
    `;
  }};
`;

export const StyledButton = styled.button<ThemePropsType & ButtonStyle>`
  position: relative;
  border: 1.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  white-space: nowrap;

  ${({ theme }) => css`
    &::after { /* for hover and focus style */
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 0;
      transition: ${theme.transition.normal};
    }
    &:hover::after {
      background-color: ${theme.colors.hoverLayer};
      opacity: 1;
    }
    &:focus::after {
      background-color: ${theme.colors.focusLayer};
      opacity: 1;
    }
    &:disabled {
      opacity: 0.5;
    }
  `};
  
  /* styling: variant, size, corner */
  ${({
    variant = 'filled', size = 'large', corner = 'round', theme,
  }) => (
    css`
      ${getVariantStyle(variant, theme)}
      ${getSizeStyle(size)}
      ${getCornerStyle(corner)}
    `
  )}

  /* customStyle */
  ${({ customStyle }) => {
    const {
      color, borderColor, backgroundColor,
      hoverColor, hoverBorderColor, hoverBackgroundColor,
      maxWidth,
    } = customStyle || {};

    return css`
      ${color ? css`color: ${getCustomColorFromTheme(color)};` : ''}
      ${backgroundColor ? css`background-color: ${getCustomColorFromTheme(backgroundColor)};` : ''}
      ${borderColor || backgroundColor ? css`border-color: ${getCustomColorFromTheme((borderColor || backgroundColor) as CustomColor)};` : ''}
      ${hoverColor ? css`&:hover { color: ${getCustomColorFromTheme(hoverColor)}; }` : ''}
      ${hoverBorderColor ? css`&:hover { border-color: ${getCustomColorFromTheme(hoverBorderColor)}; }` : ''}
      ${hoverBackgroundColor ? css`
        &:hover { background-color: ${getCustomColorFromTheme(hoverBackgroundColor)}; }
        &:hover::after { opacity: 0; }
      ` : ''}
      ${maxWidth ? css`
        max-width: ${maxWidth};
        width: 100vw;
      ` : ''}
    `;
  }}
`;
