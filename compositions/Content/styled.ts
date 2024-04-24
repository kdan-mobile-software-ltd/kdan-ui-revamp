import styled, { css } from 'styled-components';
import { button3FontStyle } from '@/constants/fonts';
import { ThemePropsType } from '@/constants/types/styled';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { arrowIconRotateStyle, upDownAnimation } from '@/utils/style';

export const HyperlinkWrapper = styled.div`
  margin-top: auto;
  padding-top: 24px;
`;

export const ItemWrapperWithToggle = styled.div<{ hideAtMobile?: boolean } & ThemePropsType>`
  width: 100%;
  ${upDownAnimation}
  animation: animateShowFromBottom .3s ease-in-out;
  
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    ${({ hideAtMobile }) => hideAtMobile && css`
      animation: animateHideToBottom .3s forwards ease-in-out;
    `}
  }
`;

export const Toggle = styled.button<{ isOpen: boolean }>`
  display: none;
  padding: 8px 12px;
  ${button3FontStyle}
  background-color: ${({ theme }) => theme.colors.transparent};
  border-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {  
    display: flex;
    
    & > img {
      ${arrowIconRotateStyle}
    }
  }
`;
