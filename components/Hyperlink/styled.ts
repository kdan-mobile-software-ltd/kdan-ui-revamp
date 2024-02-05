import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import * as fonts from '@/constants/fonts';
import { ColorPropsType } from '@/constants/types/styled';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { colors } from '@/constants/themes/colors';
import { Variant } from './types';

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

export const StyledHyperlink = styled.a<ColorPropsType & { variant?: Variant }>`
  ${fonts.body3FontStyle}
  color: ${({ color = 'hyperlink' }) => colors?.[color] || color};
  ${({ variant = 'noUnderline' }) => getVariantStyle(variant)}

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    ${fonts.body5FontStyle}
  }
`;
