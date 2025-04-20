import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { Typography } from '@/components/Typography';
import { CardItem23ImageStyle, CardItem23WrapperStyle } from './types';

export const Wrapper = styled.div<CardItem23WrapperStyle & { isNoHover: boolean; hasHyperlink: boolean; }>`
  ${({ borderColor }) => borderColor && css`border: solid 1.5px ${getCustomColorFromTheme(borderColor)};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor || 'gray100')};`}
  transition: box-shadow 0.3s ease;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 320px;
  overflow: hidden;

  ${({ isNoHover }) => !isNoHover && css`
    cursor: pointer;
    &:hover {  
      box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};
    }
  `}

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 288px;
  }
`;

export const Image = styled.img<CardItem23ImageStyle>`
  object-fit: cover;
  ${({ isNoMargin }) => (isNoMargin
    ? css`min-height: 240px;`
    : css`
        border-radius: 8px;
        padding: 16px 16px 0;
        min-height: 232px;
      `)}
      
  width: 100%;
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    min-height: ${({ isNoMargin }) => (isNoMargin ? '216px' : '208px')};
  }
`;

export const ContentWrapper = styled.div`
  padding: 24px 16px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2; // Limit to 2 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const Desc = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
