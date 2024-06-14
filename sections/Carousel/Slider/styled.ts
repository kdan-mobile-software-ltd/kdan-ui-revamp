import styled, { css } from 'styled-components';
import { HOST } from '@/constants/config';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { getCustomColorFromTheme, slideAnimation } from '@/utils/style';
import { ThemePropsType } from '@/constants/types/styled';
import { CustomColor } from '@/constants/themes/colors';

const Z_INDEX = {
  arrowButton: 50,
  activeSlide: 20,
  inactiveSlide: 1,
};

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

// each content item with slide animation
type ContentWrapperProps = {
  currentActiveChild: number;
  animationDirection: 'Right' | 'Left'; // the fixed word from animation naming in /utils/style
};
export const ContentWrapper = styled.div<ContentWrapperProps>`
  overflow: hidden;
  position: relative;
  
  ${slideAnimation}

  & > div {
    animation: animateHide .3s forwards ease-in-out;
    z-index: ${Z_INDEX.inactiveSlide};
    position: absolute;
  }
  
  ${({ currentActiveChild, animationDirection }) => css`
    & > :nth-child(${currentActiveChild}) {
      animation: ${`animateShowFrom${animationDirection}`} .3s forwards ease-in-out;
      z-index: ${Z_INDEX.activeSlide};
    }
  `}
`;

export const DesktopArrowButton = styled.button<{ arrowColor?: CustomColor }>`
  background: url('${HOST}/assets/icon/horizon-large-arrow.svg') CENTER CENTER NO-REPEAT;
  background-color: ${({ arrowColor }) => getCustomColorFromTheme(arrowColor || 'gray400')};
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
  z-index: ${Z_INDEX.arrowButton};
  top: calc(50% - 32px);

  &.left {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  &.right {
    transform: translate(50%, -50%);
    right: 0;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    display: none;
  }
`;

export const BottomPaginationWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 24px;
`;

export const PaginationDot = styled.div<ThemePropsType & { isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) => (isActive
    ? theme.colors.gray600 : theme.colors.gray400)};
  transition: all 0.3s ease;
`;

export const MobileArrowButton = styled.button`
  background: url('${HOST}/assets/icon/horizon-arrow.svg') CENTER CENTER NO-REPEAT;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;

  &.left {
    transform: rotate(180deg);
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    display: block;
  }
`;

export const Hidden = styled.section`
  visibility: hidden;
`;
