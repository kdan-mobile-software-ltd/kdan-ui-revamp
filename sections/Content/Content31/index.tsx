import React from 'react';
import { Slider } from '@/sections/Carousel/Slider';
import { ContentItem31 } from '../Item/ContentItem31';
import { Content31Props } from './types';

export const Content31: React.FC<Content31Props> = ({ data, customStyle }) => (
  <Slider customStyle={customStyle.slider}>
    {data.map((item) => (
      <ContentItem31
        key={item.title}
        data={item}
        customStyle={customStyle?.item}
      />
    ))}
  </Slider>
);
