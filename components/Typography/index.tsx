import styled from 'styled-components';
import { ThemePropsType } from '@/constants/types/styled';
import { TextCustomCssProps, textCustomCss } from '@/utils/style/textStyle';

export const Typography = styled.p<ThemePropsType & TextCustomCssProps>`
  ${textCustomCss}
  word-wrap: break-word;
`;
