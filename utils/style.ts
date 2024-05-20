import { CustomColor, colors } from '@/constants/themes/colors';
import { IsOpenPropsType } from '@/constants/types/styled';
import styled, { css } from 'styled-components';

export const getCustomColorFromTheme = (
  customColor: CustomColor | undefined,
): CustomColor => (customColor && colors[customColor]) || customColor || '';

export const upDownAnimation = css`
  @keyframes animateShowFromBottom {
    from {
      transform: translate3d(0, 50%, 0);
      display: none;
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      display: block;
    }
  }

  @keyframes animateHideToBottom {
    from {
      transform: translate3d(0, 0, 0);
      display: block;
    }
    to {
      transform: translate3d(0, 50%, 0);
      opacity: 0;
      display: none;
    }
  }
`;

export const slideAnimation = css`
  @keyframes animateShowFromRight {
    0% {
      transform: translate3d(50%, 0, 0);
      display: none;
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      display: block;
    }
  }
  @keyframes animateShowFromLeft {
    0% {
      transform: translate3d(-50%, 0, 0);
      display: none;
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      display: block;
    }
  }

  @keyframes animateHide {
    0% {
      display: block;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;

export const arrowIconRotateStyle = css<IsOpenPropsType>`
  transition: all 0.3s ease 0s;
  transform: rotate(0);
  ${({ isOpen }) => isOpen && css`transform: rotate(-180deg);`} 
`;

export const buttonStyleReset = css`
  background-color: ${({ theme }) => theme.colors.transparent};
  border-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
`;

export const AlignBottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: inherit;
`;
