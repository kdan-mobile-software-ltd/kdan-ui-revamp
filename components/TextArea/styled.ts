import styled from 'styled-components';
import {
  BorderColorPropsType, ThemePropsType,
} from '@/constants/types/styled';
import { textCustomCss, TextCustomCssProps } from '@/utils/style/textStyle';
import { body5FontStyle, h9FontStyle } from '@/constants/fonts';
import { getCustomColorFromTheme } from '@/utils/style';

export const Label = styled.label<ThemePropsType & TextCustomCssProps>`
  font-weight: 700;
  display: block;
  ${h9FontStyle}
  ${textCustomCss}
`;

export const Area = styled.textarea<ThemePropsType & BorderColorPropsType>`
  width: 100%;
  max-width: 800px;
  border-radius: 4px;
  margin-top: 8px;
  padding: 9px 12px;
  border: 1.5px solid ${({ borderColor, theme }) => borderColor || theme.colors.gray400};
  outline: 0;
  transition: border-color 300ms ease;
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
