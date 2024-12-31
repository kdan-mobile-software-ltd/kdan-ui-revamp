import styled, { css } from 'styled-components';
import {
  BorderColorPropsType, CustomCssPropsType, IsOpenPropsType, ThemePropsType,
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
  padding-right: 12px;
  z-index: 20;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100%;
  cursor: pointer;
`;

export const Dropdown = styled.ul<IsOpenPropsType & DropdownCustomStyle & CustomCssPropsType>`
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};
  position: absolute;
  border-radius: 4px;
  overflow: scroll;
  z-index: 100;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight || '220px'};
  transition: all ease-in-out .1s;;

  ${({ isOpen }) => (isOpen
    ? css`
      opacity: 1;
      visibility: unset;
    ` : css`
      opacity: 0;
      visibility: hidden;
    `
  )}

  left: 0;
  top: ${({ openDirection }) => (openDirection === 'downward' ? '100%' : 'auto')};
  bottom: ${({ openDirection }) => (openDirection === 'upward' ? '100%' : 'auto')};
  ${({ customCss }) => customCss}
`;

export type OptionStyleType = ThemePropsType & CustomCssPropsType & { isBottom?: boolean; };
export const Option = styled.option<OptionStyleType>`
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
