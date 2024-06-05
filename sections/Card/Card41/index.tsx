import React from 'react';
import { Slider } from '@/sections/Carousel/Slider';
import { getCurrentBreakpoint } from '@/utils/getCurrentBreakpoint';
import { useWindowWidth } from '@/hooks/useContainDimensions';
import { GroupWrapper } from './styled';
import { Card41Props } from './types';
import { CardItem41 } from '../Item/CardItem41';

const groupSizes = {
  default: 3,
  desktop: 3,
  laptop: 2,
  tablet: 2,
  mobile: 1,
};

export const Card41: React.FC<Card41Props> = ({ data, customStyle }) => {
  const width = useWindowWidth();

  const currentBreakpoint = getCurrentBreakpoint(width);

  const groupSize = groupSizes?.[currentBreakpoint] || 1;
  const sliderPage = Math.ceil(data.length / groupSize);

  return (data.length > groupSize ? (
    <Slider
      customStyle={customStyle.slider}
    >
      {[...Array(sliderPage).keys()].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <GroupWrapper>
          {...data.slice(index * groupSize, (index * groupSize) + groupSize).map((item) => (
            <CardItem41
              key={item.userTitle}
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
          <CardItem41
            key={item.userTitle}
            data={item}
            customStyle={customStyle?.item}
          />
        ))}
      </GroupWrapper>
    ));
};
