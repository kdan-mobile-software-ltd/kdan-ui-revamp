import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { textCustomCss } from '@/utils/style/textStyle';
import { HyperlinkStyle, Variant } from './types';

const getVariantStyle = (variants: Variant): FlattenSimpleInterpolation => {
  switch (variants) {
    case 'underline': {
      return css`
        text-decoration: underline;
      `; }
    case 'arrow':
    case 'noUnderline':
    default: {
      return css`
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      `;
    }
  }
};

export const StyledHyperlink = styled.a<HyperlinkStyle>`
  ${({ variant = 'noUnderline' }) => getVariantStyle(variant)}
  ${textCustomCss}
  ${({ customCss = '' }) => customCss}
`;
