import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { MarginPropsType } from '@/constants/types/styled';
import { BreakpointKeyObj } from '@/constants/types/global';

export const Icon = styled.img<MarginPropsType>`
  width: 48px;
  height: 48px;
  margin: ${({ margin }) => margin || 0};
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

type CustomSizeImageProps = {
  customStyle?: {
    width: BreakpointKeyObj<string>;
    height: BreakpointKeyObj<string>;
  };
};

export const CustomSizeImage = styled.img<CustomSizeImageProps>`
  object-fit: cover;

  ${({ customStyle = { width: { default: '480px' }, height: { default: '360px' } } }) => Object.keys(customStyle.width).map((breakpoint) => (
    breakpoint === 'default'
      ? `
          width: ${customStyle.width.default};
          height: ${customStyle.height.default};
        `
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
          width: ${customStyle.width?.[breakpoint] || 'auto'};
          height: ${customStyle.height?.[breakpoint] || 'auto'};
        }`
  )).join(' ')}
`;
