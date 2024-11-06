import React from 'react';
import { Slider } from '@/sections/Carousel/Slider';
import { getCurrentBreakpoint } from '@/utils/getCurrentBreakpoint';
import { useWindowWidth } from '@/hooks/useContainDimensions';
import { GroupWrapper } from './styled';
import { Card32Props } from './types';
import { CardItem32 } from '../Item/CardItem32';

const groupSizes = {
  default: 3,
  desktop: 3,
  laptop: 3,
  tablet: 1,
  mobile: 1,
};

export const Card32: React.FC<Card32Props> = ({ data, customStyle }) => {
  const width = useWindowWidth();

  const currentBreakpoint = getCurrentBreakpoint(width);

  const groupSize = groupSizes?.[currentBreakpoint] || 1;
  const sliderPage = Math.ceil(data.length / groupSize);

  return (data.length > groupSize ? (
    <Slider customStyle={{ isArrow: false }}>
      {[...Array(sliderPage).keys()].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <GroupWrapper>
          {...data.slice(index * groupSize, (index * groupSize) + groupSize).map((item, idx) => (
            <CardItem32
              key={item.name}
              data={item}
              customStyle={customStyle.items[groupSize * index + idx]}
            />
          ))}
        </GroupWrapper>
      ))}
    </Slider>
  )
    : (
      <GroupWrapper>
        {data.map((item, idx) => (
          <CardItem32
            key={item.name}
            data={item}
            customStyle={customStyle?.items[idx]}
          />
        ))}
      </GroupWrapper>
    ));
};
