import styled, { css } from 'styled-components';
import { IsDisabledPropsType, ThemePropsType } from '@/constants/types/styled';
import { textCustomCss, TextCustomCssProps } from '@/utils/style/textStyle';
import { CheckCustomStyle } from './types';

export const Label = styled.label<ThemePropsType & TextCustomCssProps & IsDisabledPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  gap: 8px;
  width: fit-content;
  ${textCustomCss}
`;

export const Check = styled.input<ThemePropsType & CheckCustomStyle>`
  width: 18px;
  height: 18px;
  position: relative;
  margin: 3px;
  outline: 0;
  
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    transition: all ease-in-out .1s;
  }
  &:checked {
    &::before {
      border-color: ${({ theme, activeColor }) => activeColor || theme.colors.kdanGreen};
      background-color: ${({ theme, activeColor }) => activeColor || theme.colors.kdanGreen};
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 4px;
      width: 2px;
      height: 2px;
      transform: rotate(45deg) translate(-50%, -50%);
      ${({ theme }) => css`
        background: ${theme.colors.white};
        box-shadow: ${theme.colors.white} 2px 0px 0px, ${theme.colors.white} 4px 0px 0px, ${theme.colors.white} 4px -2px 0px, ${theme.colors.white} 4px -4px 0px, ${theme.colors.white} 4px -6px 0px, ${theme.colors.white} 4px -8px 0px;
      `};
    }
  }

  &:disabled {
    &::before {
      background-color: ${({ theme }) => theme.colors.gray300};
      border-color: ${({ theme }) => theme.colors.gray400};
    }
    &::after {
      ${({ theme }) => css`
      background: ${theme.colors.gray400};
      box-shadow: ${theme.colors.gray400} 2px 0px 0px, ${theme.colors.gray400} 4px 0px 0px, ${theme.colors.gray400} 4px -2px 0px, ${theme.colors.gray400} 4px -4px 0px, ${theme.colors.gray400} 4px -6px 0px, ${theme.colors.gray400} 4px -8px 0px;
    `};
    }
  };
`;
