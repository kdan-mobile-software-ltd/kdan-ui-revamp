import styled, { css } from 'styled-components';
import { IsDisabledPropsType, ThemePropsType } from '@/constants/types/styled';
import { textCustomCss, TextCustomCssProps } from '@/utils/style/textStyle';
import { RadioCustomStyle } from './types';

export const Label = styled.label<ThemePropsType & TextCustomCssProps & IsDisabledPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  width: fit-content;
  ${textCustomCss}
`;

export const Radio = styled.input<ThemePropsType & RadioCustomStyle>`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 2px;
  outline: 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    width: 17px;
    height: 17px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  }

  &:checked {
    &::before {
      border-color: ${({ theme, activeColor: color }) => color || theme.colors.kdanGreen};
    }
    
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 25px;
      background-color: ${({ theme, activeColor: color }) => color || theme.colors.kdanGreen};
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
    `};
    }
  };
`;
