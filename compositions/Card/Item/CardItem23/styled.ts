import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { CardItem23WrapperStyle } from './types';

export const Wrapper = styled.a<CardItem23WrapperStyle & { isNoHover: boolean }>`
  text-decoration: none;
  width: 320px;
  height: 473px;
  ${({ borderColor }) => borderColor && css`border: solid 1.5px ${getCustomColorFromTheme(borderColor)};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor || 'gray100')};`}
  transition: box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px;

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

export const Image = styled(CustomSizeImage)`
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;
