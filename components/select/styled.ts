import styled from 'styled-components';
import {
  BorderColorPropsType,
  CustomCssPropsType,
  IsActivePropsType, IsOpenPropsType, ThemePropsType,
} from '@/constants/types/styled';
import { body5FontStyle } from '@/constants/fonts';
import { inputBorderStyle } from '../TextField/styled';
import { DropdownCustomStyle } from './types';

export const Wrapper = styled.div`
  position: relative;
`;
export const InputWrapper = styled.div<ThemePropsType & BorderColorPropsType>`
  ${inputBorderStyle}
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  z-index: 20;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100%;
  cursor: pointer;
`;

export const Dropdown = styled.ul<IsOpenPropsType & DropdownCustomStyle>`
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};
  position: absolute;
  border-radius: 4px;
  overflow: scroll;
  z-index: 109 !important;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight || '220px'};
  transition: opacity ease-in-out .1s;;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  left: 0;
  top: ${({ openDirection }) => (openDirection === 'downward' ? '100%' : 'auto')};
  bottom: ${({ openDirection }) => (openDirection === 'upward' ? '100%' : 'auto')};
`;

export const Option = styled.option<ThemePropsType & IsActivePropsType & CustomCssPropsType>`
  padding: 10px 12px;
  transition: background-color ease-in-out .1s;
  background-color: ${({ theme }) => theme.colors.white};
  ${body5FontStyle}

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray200};
  }

  &.isActive {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
  ${({ customCss }) => customCss}
`;
