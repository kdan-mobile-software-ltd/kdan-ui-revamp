import React from 'react';
import { Slider } from '@/sections/Carousel/Slider';
import { getCurrentBreakpoint } from '@/utils/getCurrentBreakpoint';
import { useWindowWidth } from '@/hooks/useContainDimensions';
import { GroupWrapper } from './styled';
import { Card23Props } from './types';
import { CardItem23 } from '../Item/CardItem23';

const groupSizes = {
  default: 3,
  desktop: 3,
  laptop: 2,
  tablet: 2,
  mobile: 1,
};

export const Card23: React.FC<Card23Props> = ({ data = [], customStyle }) => {
  const width = useWindowWidth();

  if (!data || !data?.length) return null;

  const currentBreakpoint = getCurrentBreakpoint(width);
  const groupSize = groupSizes?.[currentBreakpoint] || 1;
  const sliderPage = Math.ceil(data.length / groupSize);

  return (data.length > groupSize ? (
    <Slider
      customStyle={customStyle.slider}
    >
      {[...Array(sliderPage).keys()].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <GroupWrapper key={index}>
          {...data.slice(index * groupSize, (index * groupSize) + groupSize).map((item) => (
            <CardItem23
              key={item.title}
              data={item}
              customStyle={customStyle?.item}
            />
          ))}
        </GroupWrapper>
      ))}
    </Slider>
  )
    : (
      <GroupWrapper>
        {data.map((item) => (
          <CardItem23
            key={item.title}
            data={item}
            customStyle={customStyle?.item}
          />
        ))}
      </GroupWrapper>
    ));
};
