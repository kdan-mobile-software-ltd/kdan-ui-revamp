import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CustomColor } from '@/constants/themes/colors';
import { BackgroundColorPropsType, BorderColorPropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import styled from 'styled-components';

export const Wrapper = styled.div<BorderColorPropsType & BackgroundColorPropsType>`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;

  border: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray800')} 1.5px solid;
  background-color: ${({ backgroundColor }) => getCustomColorFromTheme(backgroundColor || 'transparent')};

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div<{ minHeight?: string; }>`
  width: 50%;
  padding: 40px 60px 40px 84px;
  position: relative;
  min-height: ${({ minHeight }) => minHeight || '200px'};

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    order: 1;
    padding: 24px 24px 24px 48px;
    width: 100%;
  }
`;

export const Title = styled(Typography)<{ borderLeftColor?: CustomColor }>`
  position: relative;

  &::before {
    content: ' ';
    background-color: ${({ borderLeftColor }) => getCustomColorFromTheme(borderLeftColor || 'gray400')};
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -20px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 50%;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 100%;
  }
`;
