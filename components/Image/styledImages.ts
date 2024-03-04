import styled from 'styled-components';
import { MAX_WIDTH_QUERY, BreakpointKeyObj } from '@/constants/breakpoints';
import { MarginPropsType } from '@/constants/types/styled';

export const Icon = styled.img<MarginPropsType>`
  width: 48px;
  height: 48px;
  margin: ${({ margin }) => margin || 0};
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export type CustomImageSize = {
  width: BreakpointKeyObj<string>;
  height: BreakpointKeyObj<string>;
};

type CustomSizeImageProps = {
  customStyle?: CustomImageSize;
};

export const CustomSizeImage = styled.img<CustomSizeImageProps>`
  object-fit: cover;
  width: 100%;

  ${({ customStyle = { width: { default: '480px' }, height: { default: '360px' } } }) => Object.keys(customStyle.width).map((breakpoint) => (
    breakpoint === 'default'
      ? `
          max-width: ${customStyle.width.default};
          max-height: ${customStyle.height.default};
        `
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
          max-width: ${customStyle.width?.[breakpoint] || 'auto'};
          max-height: ${customStyle.height?.[breakpoint] || 'auto'};
        }`
  )).join(' ')}
`;
