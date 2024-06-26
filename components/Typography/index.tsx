import styled from 'styled-components';
import { ThemePropsType } from '@/constants/types/styled';
import { TextCustomCssProps, textCustomCss } from '@/utils/style/textStyle';

export type TypographyProps = ThemePropsType & TextCustomCssProps;

export const Typography = styled.p<TypographyProps>`
  ${textCustomCss}
  word-wrap: break-word;
`;
