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
  width?: BreakpointKeyObj<string>;
  height?: BreakpointKeyObj<string>;
};

export const CustomSizeImage = styled.img<CustomSizeImageProps>`
  object-fit: cover;

  ${({ width = ({}), height = ({}) }) => Object.keys(width).map((breakpoint) => (
    breakpoint === 'default'
      ? `
          width: ${width.default || 480}px;
          height: ${height.default || 360}px;
        `
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
          width: ${width[breakpoint]};
          height: ${height[breakpoint]};
        }`
  )).join(' ')}
`;
