import styled from 'styled-components';
import { CustomCssPropsType, ThemePropsType } from '@/constants/types/styled';
import { TextCustomCssProps, textCustomCss } from '@/utils/style/textStyle';

export type TypographyProps = Partial<ThemePropsType> & TextCustomCssProps & CustomCssPropsType;

export const Typography = styled.p<TypographyProps & CustomCssPropsType>`
  ${textCustomCss}
  word-wrap: break-word;
  ${({ customCss }) => customCss}
`;
