import { getCustomColorFromTheme } from '@/utils/style';
import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { SizeLSProps } from '@/constants/types/global';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { ThemePropsType } from '@/constants/types/styled';
import { CardItem41WrapperStyle } from './types';

export const Wrapper = styled.div<CardItem41WrapperStyle & SizeLSProps & ThemePropsType>`
  ${({ borderColor }) => css`border: solid 1.5px ${getCustomColorFromTheme(borderColor || 'transparent')};`}
  ${({ backgroundColor }) => css`background-color: ${getCustomColorFromTheme(backgroundColor || 'white')};`}
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};
  width: 320px;
  height: ${({ height }) => height?.default || 'auto'};
  padding: 40px 16px;
  margin: 12px;
  
  
  ${({ size, height }) => size === 'large' && css`
    display: flex;
    width: 100%;
    height: ${height?.largeSize || height?.default || 'auto'};
    justify-content: center;
    padding: 40px;
    @media screen and (${MAX_WIDTH_QUERY.mobile}) {
      padding: 40px 16px;
    }
  `}

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    display: block;
    width: 100%;
    max-width: 688px;
    height: ${({ height }) => height?.tablet || height?.default || 'auto'};
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    max-width: 480px;
  }
`;

export const ContentWrapper = styled.div<SizeLSProps>`
  ${({ size }) => size === 'large' && css`
    border-left: 1.5px solid ${({ theme }) => theme.colors.gray400};
    padding-left: 40px;
    flex-grow: 1;

    @media screen and (${MAX_WIDTH_QUERY.tablet}) {
      border: 0;
      padding: 0;
    }
  `}
`;

export const Image = styled(CustomSizeImage)<SizeLSProps>`
  display: block;
  margin: 0 auto 20px;
  
  ${({ size }) => (size === 'large' && css`
    margin: auto 40px auto 0;

    @media screen and (${MAX_WIDTH_QUERY.tablet}) {
      margin: 0 auto 20px;
    }
  `)}
`;
