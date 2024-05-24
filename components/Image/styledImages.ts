import styled from 'styled-components';
import { MAX_WIDTH_QUERY, BreakpointKeyObj } from '@/constants/breakpoints';
import { MarginPropsType } from '@/constants/types/styled';

export const ActionIcon = styled.img<MarginPropsType>`
  width: 24px;
  height: 24px;
  margin: ${({ margin }) => margin || 0};
`;

export type CustomImageSize = {
  width: BreakpointKeyObj<string>;
  height?: BreakpointKeyObj<string>;
  margin?: string;
};

type CustomSizeImageProps = {
  customStyle?: CustomImageSize;
};

export const CustomSizeImage = styled.img<CustomSizeImageProps>`
  object-fit: cover;
  display: block;
  ${({ customStyle }) => customStyle?.margin && `margin: ${customStyle.margin};`};

  ${({ customStyle = { width: { default: '480px' }, height: { default: '360px' } } }) => Object.keys(customStyle.width).map((breakpoint) => (
    breakpoint === 'default'
      ? `
          width: 100%;
          height: ${customStyle?.height?.default || 'unset'};
          max-width: ${customStyle.width.default};
          max-height: ${customStyle?.height?.default || 'unset'};
        `
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
          max-width: ${customStyle.width?.[breakpoint] || 'auto'};
          max-height: ${customStyle.height?.[breakpoint] || 'unset'};
        }`
  )).join(' ')}
`;
