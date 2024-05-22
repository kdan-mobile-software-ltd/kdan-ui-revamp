import styled from 'styled-components';
import { BackgroundColorPropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import { textCustomCss } from '@/utils/style/textStyle';

export const Wrapper = styled.div<BackgroundColorPropsType>`
  background-color: ${({ backgroundColor = 'transparent' }) => getCustomColorFromTheme(backgroundColor)};
  padding: 12px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  ${textCustomCss}
`;
