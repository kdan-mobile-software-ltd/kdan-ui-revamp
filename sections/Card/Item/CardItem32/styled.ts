import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { h9FontStyle } from '@/constants/fonts';
import { CardItem32WrapperStyle } from './types';

export const Wrapper = styled.div<CardItem32WrapperStyle>`
  position: relative;
  width: 320px;
  max-width: 100%;
  padding: 24px 16px;
  display: block;
  text-decoration: none;
  ${({ borderColor }) => css`border: solid 1.5px ${getCustomColorFromTheme(borderColor || 'gray600')};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor)};`}
  transition: transform 0.3s ease;
  border-radius: 8px;

  ${({ isHighlight, borderColor }) => isHighlight && css`
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &:before {
      content: 'Popular';
      position: absolute;
      left: -1.5px;
      bottom: 100%;
      width: calc(100% + 3px);
      padding: 8px 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background-color: ${getCustomColorFromTheme(borderColor || 'gray600')};
      color: white;
      text-align: center;
      ${h9FontStyle};
    }
  `};

  @media screen and (${MAX_WIDTH_QUERY.laptop}) {
    width: 288px;
  }

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 480px;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    width: 288px;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 16px;
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  margin-bottom: 16px;
`;

export const Desc = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Aux = styled(Desc)`
  margin-bottom: 24px;
`;

export const Depict = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;

  &:before {
    content: '•';
    width: 20px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
