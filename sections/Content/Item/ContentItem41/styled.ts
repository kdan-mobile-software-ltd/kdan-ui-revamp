import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { BackgroundColorPropsType, BorderColorPropsType, IsOpenPropsType } from '@/constants/types/styled';
import {
  arrowIconRotateStyle, buttonStyleReset, getCustomColorFromTheme, upDownAnimation,
} from '@/utils/style';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<BorderColorPropsType & BackgroundColorPropsType>`
  width: 100%;
  padding: 40px 16px;
  border: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray400')} 1.5px solid;
  background-color: ${({ backgroundColor }) => getCustomColorFromTheme(backgroundColor || 'transparent')};
  margin-right: -1.5px;
  margin-bottom: -1.5px;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 24px 16px;
  }
`;

export const ToggleWrapper = styled.button`
  ${buttonStyleReset}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
`;

export const Title = styled(Typography)`
  flex-grow: 1;
`;

export const DescWrapper = styled.div<IsOpenPropsType>`
display: block;

@media screen and (${MAX_WIDTH_QUERY.mobile}) {
  ${upDownAnimation}
  animation: animateShowFromBottom .1s ease-in-out;
  
  ${({ isOpen }) => !isOpen && css`
    animation: animateHideToBottom .1s forwards ease-in-out;
  `}
  }
`;

export const ToggleIcon = styled.img<IsOpenPropsType & { arrowSvgColorFilter?: string }>`
  ${arrowIconRotateStyle}
  width: 40px;
  height: 40px;
  display: none;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    display: block;
  }
  
  ${({ arrowSvgColorFilter }) => arrowSvgColorFilter && css`
    filter: ${arrowSvgColorFilter};
  `}
`;
