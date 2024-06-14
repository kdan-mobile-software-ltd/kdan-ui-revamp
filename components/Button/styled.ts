import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import * as fonts from '@/constants/fonts';
import { CustomThemeType } from '@/constants/themes';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CustomCssPropsType, ThemePropsType } from '@/constants/types/styled';
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
        border-color: ${theme.colors.transparent};
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

export const StyledButton = styled.button<ThemePropsType & ButtonStyle & CustomCssPropsType>`
  position: relative;
  border: 1.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition.normal};

  :disabled {
    cursor: default;
  }
  
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
  ${({ customStyle: { maxWidth, customCss } = {} }) => css`
      ${maxWidth && css`
        max-width: ${maxWidth};
        width: 100vw;
      `}

      ${customCss}
    `}
`;
