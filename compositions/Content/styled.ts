import styled, { css } from 'styled-components';
import { button3FontStyle } from '@/constants/fonts';
import { ThemePropsType } from '@/constants/types/styled';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const HyperlinkWrapper = styled.div`
  margin-top: auto;
  padding-top: 24px;
`;

export const ItemWrapperWithToggle = styled.div<{ hideAtMobile?: boolean } & ThemePropsType>`
  width: 100%;
  
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 1;
  transform: translateY(0);
  position: relative;
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    ${({ hideAtMobile }) => hideAtMobile && css`
      opacity: 0; 
      transform: translateY(50%);
      position: absolute; 
    `}
  }
`;

export const Toggle = styled.button<{ isOpen: boolean }>`
  display: none;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {  
    padding: 8px 12px;
    ${button3FontStyle}
    background-color: ${({ theme }) => theme.colors.transparent};
    border-color: ${({ theme }) => theme.colors.transparent};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: auto;
    
    & > img {
      transition: all 0.3s ease 0s;
      transform: rotate(0);
      ${({ isOpen }) => isOpen && css`transform: rotate(-180deg);`} 
    }
  }
`;
