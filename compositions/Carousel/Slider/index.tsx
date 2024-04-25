import React, { useState } from 'react';
import {
  DesktopArrowButton, Wrapper, MobileArrowButton,
  BottomPaginationWrapper, PaginationDot, ContentWrapper,
} from './styled';
import { ComponentProps } from './types';

export const Slider: React.FC<ComponentProps> = ({
  dataLength,
  currentIndex: currentIndexProp,
  sizes,
  customStyle,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    { current: currentIndexProp, prev: currentIndexProp },
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

  return (
    <Wrapper sizes={sizes}>
      <DesktopArrowButton onClick={goPrevPage} className="left" type="button" />
      <ContentWrapper
        currentActiveChild={activeIndex.current + 1}
        animationDirection={activeIndex.prev < activeIndex.current ? 'Right' : 'Left'}
        sizes={sizes}
      >
        {children}
      </ContentWrapper>
      <DesktopArrowButton onClick={goNextPage} className="right" type="button" />
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
