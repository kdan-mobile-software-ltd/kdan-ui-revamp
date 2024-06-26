import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { textCustomCss } from '@/utils/style/textStyle';
import { HyperlinkCustomStyle, HyperlinkVariant } from './types';

const getVariantStyle = (variants: HyperlinkVariant): FlattenSimpleInterpolation => {
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

export const StyledHyperlink = styled.a<HyperlinkCustomStyle>`
  cursor: pointer;
  ${({ variant = 'noUnderline' }) => getVariantStyle(variant)}
  ${textCustomCss}
  ${({ customCss = '' }) => customCss}
`;
