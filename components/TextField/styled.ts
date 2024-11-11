import styled from 'styled-components';
import { HOST } from '@/constants/config';
import {
  BorderColorPropsType, IsActivePropsType, ThemePropsType,
} from '@/constants/types/styled';
import { textCustomCss, TextCustomCssProps } from '@/utils/style/textStyle';
import { body5FontStyle, h9FontStyle } from '@/constants/fonts';
import { getCustomColorFromTheme } from '@/utils/style';

export const Wrapper = styled.div`
  position: relative; // refer to ClearButton;
`;

export const Label = styled.label<ThemePropsType & TextCustomCssProps>`
  font-weight: 700;
  display: block;
  ${h9FontStyle}
  ${textCustomCss}
`;

export const ClearButton = styled.button<ThemePropsType & IsActivePropsType>`
  width: 20px;
  height: 20px;
  background: url('${HOST}/assets/icon/clear.svg') CENTER CENTER NO-REPEAT;
  position: absolute;
  bottom: 10px;
  right: 14px;
  cursor: pointer;
  display: none;

  input:hover + &:not([disabled]), &:hover:not([disabled]) {
    display: block;
  }

  &:disabled {
    cursor: default;
  }
`;

export const Input = styled.input<ThemePropsType & BorderColorPropsType>`
  width: 100%;
  max-width: 800px;
  border-radius: 4px;
  margin-top: 8px;
  padding: 9px 12px;
  border: 1.5px solid ${({ borderColor, theme }) => borderColor || theme.colors.gray400};
  transition: border-color 300ms ease;
  outline: 0;
  ${body5FontStyle}
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    border-color: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray600')};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;
