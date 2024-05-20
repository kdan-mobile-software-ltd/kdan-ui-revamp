import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { CardItem11WrapperStyle } from './types';

export const Wrapper = styled.a<CardItem11WrapperStyle & { isNoHover: boolean }>`
  width: 240px;
  height: 240px;
  padding: 32px 24px;
  display: block;
  text-decoration: none;
  ${({ isNoBorder, borderColor }) => css`border: solid ${isNoBorder ? '0' : '1.5px'} ${getCustomColorFromTheme(borderColor || 'gray600')};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor)};`}
  transition: transform 0.3s ease;
  border-radius: 8px;
  

  ${({ isNoHover, isNoHoverShadow }) => !isNoHover && css`
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      ${!isNoHoverShadow && css`box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};`}
    }
  `}
`;
