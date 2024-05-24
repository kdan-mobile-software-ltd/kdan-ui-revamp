import styled, { css } from 'styled-components';
import { button3FontStyle } from '@/constants/fonts';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { arrowIconRotateStyle, upDownAnimation } from '@/utils/style';
import { HideAtMobilePropsType, IsOpenPropsType } from '@/constants/types/styled';

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

export const Toggle = styled.button<IsOpenPropsType>`
  display: none;
  padding: 16px 12px;
  ${button3FontStyle}
  background-color: ${({ theme }) => theme.colors.transparent};
  border-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 40px auto 0;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {  
    display: flex;
    
    & > img {
      ${arrowIconRotateStyle}
    }
  }
`;
