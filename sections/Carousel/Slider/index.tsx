import React, { useEffect, useState } from 'react';
import { HOST } from '@/constants/config';
import {
  DesktopArrowButton, Wrapper, MobileArrowButton,
  BottomPaginationWrapper, PaginationDot, ContentWrapper, Hidden,
} from './styled';
import { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
  customStyle: {
    isArrow = true,
    arrowBackgroundColor,
    arrowSvgColorFilter,
  },
  children,
}) => {
  const dataLength = children.length || 1;
  const [activeIndex, setActiveIndex] = useState(
    { current: 0, prev: 0 },
  );

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

  const goSpecificPage = (index) => () => {
    setActiveIndex((prev) => ({
      current: index,
      prev: prev.current,
    }));
  };

  useEffect(() => {
    if (activeIndex.current >= dataLength) {
      setActiveIndex((prev) => ({ current: dataLength - 1, prev: prev.current }));
    }
  }, [dataLength]);

  return (
    <Wrapper>
      {isArrow && (
        <DesktopArrowButton onClick={goPrevPage} className="left" type="button" arrowBackgroundColor={arrowBackgroundColor} arrowSvgColorFilter={arrowSvgColorFilter}>
          <img src={`${HOST}/assets/icon/horizon-large-arrow.svg`} alt="arrow-left" />
        </DesktopArrowButton>
      )}
      <ContentWrapper
        currentActiveChild={activeIndex.current + 1}
        animationDirection={activeIndex.prev < activeIndex.current ? 'Right' : 'Left'}
      >
        {/* eslint-disable-next-line react/no-array-index-key */}
        {children.map((child, i) => <div key={i}>{child}</div>)}
        <Hidden>
          {children?.[0]}
        </Hidden>
      </ContentWrapper>
      {isArrow && (
        <DesktopArrowButton onClick={goNextPage} className="right" type="button" arrowBackgroundColor={arrowBackgroundColor} arrowSvgColorFilter={arrowSvgColorFilter}>
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
          />
        ))}
        <MobileArrowButton onClick={goNextPage} className="right" type="button" />
      </BottomPaginationWrapper>
    </Wrapper>
  );
};

Slider.displayName = 'Slider';
