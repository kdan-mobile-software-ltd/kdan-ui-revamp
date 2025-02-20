import styled, { css } from 'styled-components';
import { HOST } from '@/constants/config';
import {
  BorderColorPropsType, CustomCssPropsType, IsActivePropsType, ThemePropsType,
} from '@/constants/types/styled';
import { textCustomCss, TextCustomCssProps } from '@/utils/style/textStyle';
import { body5FontStyle, h9FontStyle } from '@/constants/fonts';
import { getCustomColorFromTheme } from '@/utils/style';

export const Wrapper = styled.div<CustomCssPropsType>`
  position: relative; // refer to ClearButton;
  ${({ customCss }) => !!customCss && customCss}
`;

export const Label = styled.label<ThemePropsType & TextCustomCssProps>`
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
  ${h9FontStyle}
  ${textCustomCss}
`;

export const ClearButton = styled.button<ThemePropsType & IsActivePropsType>`
  width: 25px;
  height: 20px;
  background: url('${HOST}/assets/icon/clear.svg') CENTER CENTER NO-REPEAT;
  position: absolute;
  bottom: 10px;
  right: 14px;
  cursor: pointer;
  display: none;

  input:is(:hover, :focus) + &:not([disabled]), &:is(:hover, :focus):not([disabled]) {
    display: block;
  }

  &:disabled {
    cursor: default;
  }
`;

export const inputBorderStyle = css<BorderColorPropsType>`
  border: 1.5px solid ${({ borderColor, theme }) => borderColor || theme.colors.gray400};
  transition: border-color 300ms ease;
  border-radius: 4px;
  
  &:focus {
    border-color: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray600')};
  }
`;

export const Input = styled.input<ThemePropsType & BorderColorPropsType>`
  width: 100%;
  max-width: 800px;
  padding: 9px 12px;
  outline: 0;
  ${body5FontStyle}
  ${inputBorderStyle}
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;
