import { CustomThemeType } from '@/constants/themes';
import { CustomColor } from '@/constants/themes/colors';

export const getCustomColorFromTheme = (
export const arrowIconRotateStyle = css<IsOpenPropsType>`
  transition: all 0.3s ease 0s;
  transform: rotate(0);
  ${({ isOpen }) => isOpen && css`transform: rotate(-180deg);`} 
`;
