import { BorderColorPropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import styled from 'styled-components';

export const Wrapper = styled.div<BorderColorPropsType>`
  padding: 40px;
  border: ${({ borderColor }) => getCustomColorFromTheme(borderColor || 'gray400')} 1.5px solid;
  margin-right: -1.5px;
  margin-bottom: -1.5px;
`;
