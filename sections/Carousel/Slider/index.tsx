import React, {
  useEffect, useState, useRef,
} from 'react';
import { HOST } from '@/constants/config';
import {
  DesktopArrowButton, Wrapper, MobileArrowButton,
  BottomPaginationWrapper, PaginationDot, ContentWrapper,
  SlideItem,
  InvisibleFixedHeight,
} from './styled';
import { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
  customStyle: {
    isArrow = true,
    arrowBackgroundColor,
    paginationDotColor,
    arrowSvgColorFilter,
    height,
  },
  children,
}) => {
  const dataLength = children.length || 1;
  const [activeIndex, setActiveIndex] = useState({ current: 0, prev: 0 });
  const touchStartX = useRef<number | null>(null); // for mobile swipe
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex.current >= dataLength) {
      setActiveIndex((prev) => ({ current: dataLength - 1, prev: prev.current }));
    }
  }, [dataLength]);

  const goPrevPage = () => {
    setActiveIndex((prev) => ({
      current: prev.current === 0 ? dataLength - 1 : prev.current - 1,
      prev: prev.current,
    }));
  };

  const goNextPage = () => {
    setActiveIndex((prev) => ({
      current: (prev.current === dataLength - 1 ? 0 : prev.current + 1),
      prev: prev.current,
    }));
  };

  const goSpecificPage = (index: number) => () => {
    setActiveIndex((prev) => ({
      current: index,
      prev: prev.current,
    }));
  };

  const handleSwipe = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;

      if (diffX > 50) { // left swipe
        goNextPage();
      } else if (diffX < -50) { // right swipe
        goPrevPage();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  return (
    <Wrapper>
      {isArrow && (
        <DesktopArrowButton
          onClick={goPrevPage}
          className="left"
          type="button"
          arrowBackgroundColor={arrowBackgroundColor}
          arrowSvgColorFilter={arrowSvgColorFilter}
        >
          <img src={`${HOST}/assets/icon/horizon-large-arrow.svg`} alt="arrow-left" />
        </DesktopArrowButton>
      )}
      <ContentWrapper
        currentActiveChild={activeIndex.current + 1}
        animationDirection={activeIndex.prev < activeIndex.current ? 'Right' : 'Left'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        height={height}
      >
        {children.map((child, i) => (
          <SlideItem
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          >
            {child}
          </SlideItem>
        ))}
        <InvisibleFixedHeight>
          {children?.[0]}
        </InvisibleFixedHeight>
      </ContentWrapper>
      {isArrow && (
        <DesktopArrowButton
          onClick={goNextPage}
          type="button"
          className="right"
          arrowBackgroundColor={arrowBackgroundColor}
          arrowSvgColorFilter={arrowSvgColorFilter}
        >
          <img src={`${HOST}/assets/icon/horizon-large-arrow.svg`} alt="arrow-left" />
        </DesktopArrowButton>
      )}
      <BottomPaginationWrapper>
        <MobileArrowButton onClick={goPrevPage} className="left" type="button" />
        {[...Array(dataLength).keys()].map((index) => (
          <PaginationDot
            key={index}
            onClick={goSpecificPage(index)}
            isActive={activeIndex.current === index}
            paginationDotColor={paginationDotColor}
          />
        ))}
        <MobileArrowButton onClick={goNextPage} className="right" type="button" />
      </BottomPaginationWrapper>
    </Wrapper>
  );
};

Slider.displayName = 'Slider';
