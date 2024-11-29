import styled, { css } from 'styled-components';
import { button3FontStyle } from '@/constants/fonts';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { arrowIconRotateStyle, upDownAnimation } from '@/utils/style';
import { HideAtMobilePropsType, IsOpenPropsType } from '@/constants/types/styled';
import { HOST } from '@/constants/config';

// use this combined with hooks/useToggle.tsx

export const ItemToggleAnimationWrapper = styled.div<HideAtMobilePropsType>`
  ${upDownAnimation}
  animation: animateShowFromBottom .3s ease-in-out;
  
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    ${({ hideAtMobile }) => hideAtMobile && css`
      animation: animateHideToBottom .3s forwards ease-in-out;
    `}
  }
`;

export const ToggleWrapper = styled.button<IsOpenPropsType>`
  display: none;
  margin: 40px auto;
  padding: 12px 18px;
  width: fit-content;
  gap: 12px;
  background-color: transparent;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {  
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
`;

export const SimpleToggle = styled.button<IsOpenPropsType>`
  ${button3FontStyle}
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 24px;
  height: 24px;
  border-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: url(${HOST}/assets/icon/vertical-arrow.svg) CENTER CENTER NO-REPEAT;
  ${arrowIconRotateStyle}
`;
