import styled, { css } from 'styled-components';
import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { button3FontStyle } from '@/constants/fonts';
import { ThemePropsType } from '@/constants/types/styled';
import { RwdWrapper } from '@/utils/style/wrapper';
import { LayoutNumberOfRow } from './types';

export const GroupWrapper = styled(RwdWrapper)<LayoutNumberOfRow>`
  display: grid;
  grid-template-columns: repeat(${({ numberOfRow }) => numberOfRow || 3}, 1fr);
  gap: 48px 0;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    max-width: 400px;
    grid-template-columns: 1fr;
  }
`;

export const ItemWrapper = styled.div<{ hideAtMobile: boolean } & ThemePropsType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  
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

export const Desc = styled(Typography)`
  -webkit-line-clamp: 5; /* number of lines to show */
  line-clamp: 5; 
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
