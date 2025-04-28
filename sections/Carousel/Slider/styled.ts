import styled, { css } from 'styled-components';
import { HOST } from '@/constants/config';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { getCustomColorFromTheme, slideAnimation } from '@/utils/style';
import { ThemePropsType } from '@/constants/types/styled';
import { ArrowCustomStyle, HeightStyle, PaginationDotStyle } from './types';

const Z_INDEX = {
  arrowButton: 50,
  activeSlide: 20,
  inactiveSlide: 1,
};

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

// each content item with slide animation
type ContentWrapperProps = {
  currentActiveChild: number;
  animationDirection: 'Right' | 'Left'; // the fixed word from animation naming in /utils/style
} & HeightStyle;
export const ContentWrapper = styled.div<ContentWrapperProps>`
  overflow: hidden;
  position: relative;
  ${slideAnimation}

  ${({ currentActiveChild, animationDirection }) => css`
    & > div:nth-child(${currentActiveChild}) {
      animation: ${`animateShowFrom${animationDirection}`} 0.3s forwards ease-in-out;
      z-index: ${Z_INDEX.activeSlide};
    }
  `}

  ${({ height }) => height && Object.entries(height).map(([breakpoint, size]) => (
    breakpoint === 'default'
      ? `height: ${size};`
      : `@media screen and (${MAX_WIDTH_QUERY[breakpoint]}) {
            height: ${size};
          }`
  )).join(' ')}
`;

export const SlideItem = styled.div`
  animation: animateHide 0.3s forwards ease-in-out;
  z-index: ${Z_INDEX.inactiveSlide};
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const DesktopArrowButton = styled.button<ArrowCustomStyle>`
  background-color: ${({ arrowBackgroundColor }) => getCustomColorFromTheme(arrowBackgroundColor || 'gray400')};
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  z-index: ${Z_INDEX.arrowButton};
  top: calc(50% - 32px);

  display: flex;
  justify-content: center;
  align-items: center;

  &.left {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  &.right {
    transform: translate(50%, -50%);
    right: 0;
  }
  > img {
    width: 24px;
    height: 24px;

    ${({ arrowSvgColorFilter }) => arrowSvgColorFilter && css`
      filter: ${arrowSvgColorFilter};
    `}
  }

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
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

export const PaginationDot = styled.div<ThemePropsType & { isActive: boolean } & PaginationDotStyle>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme, isActive, paginationDotColor }) => (isActive
    ? (paginationDotColor || theme.colors.gray600)
    : theme.colors.gray400)};
  transition: all 0.3s ease;
`;

export const MobileArrowButton = styled.button`
  background: url('${HOST}/assets/icon/horizon-arrow.svg') CENTER CENTER NO-REPEAT;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;
  border: 0;

  &.left {
    transform: rotate(180deg);
  }

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    display: block;
  }
`;

export const InvisibleFixedHeight = styled.section`
  visibility: hidden;
`;
