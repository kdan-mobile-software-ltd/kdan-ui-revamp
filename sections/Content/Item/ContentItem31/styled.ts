import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CustomColor } from '@/constants/themes/colors';
import { BackgroundColorPropsType, BorderColorPropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import { limitedTextLine } from '@/utils/style/limitedTextLine';
import styled from 'styled-components';
import { HardRwdWrapper } from '@/utils/style/wrapper';
import { IsTextPositionRightType } from './types';

export const Wrapper = styled(HardRwdWrapper)<BorderColorPropsType & BackgroundColorPropsType & IsTextPositionRightType>`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ isTextPositionRight }) => (isTextPositionRight ? 'row-reverse' : 'row')};

  border: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray800')} 1.5px solid;
  background-color: ${({ backgroundColor }) => getCustomColorFromTheme(backgroundColor || 'transparent')};

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  padding: 40px 60px 40px 84px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    order: 1;
    padding: 24px 24px 24px 48px;
    width: 100%;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 24px;
  }
`;

export const Title = styled(Typography)<{ borderLeftColor?: CustomColor }>`
  position: relative;
  ${limitedTextLine(2)}

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

export const Desc = styled(Typography)`
  ${limitedTextLine(5)}
  min-height: calc(1.4em * 3);

  ${({ customCss = '' }) => customCss}
`;

export const Image = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 50%;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 100%;
  }
`;
