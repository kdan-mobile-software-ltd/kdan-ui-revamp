import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CardItem23WrapperStyle } from './types';

export const Wrapper = styled.a<CardItem23WrapperStyle & { isNoHover: boolean }>`
  text-decoration: none;
  width: 320px;
  height: 473px;
  ${({ borderColor }) => css`border: solid 1.5px ${getCustomColorFromTheme(borderColor || 'gray500')};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor || 'gray100')};`}
  transition: box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({ isNoHover }) => !isNoHover && css`
    cursor: pointer;
    &:hover {  
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.10);
    }
  `}

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 288px;
    height: 449px;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 24px 16px;
  position: relative;
`;
